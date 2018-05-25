const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const User = mongoose.model('User');

const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const School = mongoose.model('School');
const SchoolReview = mongoose.model('SchoolReview');
const Validations = require('../utils/Validation');
const Encryption = require('../utils/Encryption');
const randtoken = require('rand-token');
const emailSender = require('../config/emailSender');
//const geoip = require('geoip-lite');
//const randtoken = require('rand-token');
//const bcrypt = require('bcryptjs');
const EMAIL_REGEX = require('../config/Config').EMAIL_REGEX;

/*
  GET function to get the current logged in user:
  The default name for a token in the headers of an HTTP request is x-access-token
  takes:-
  returns: If there is no token provided with the request the server sends back an error (401) with response message of ‘No token provided',
  If the token exists, the jwt.verify() method will be called to decode the token to view the original payload.
   We’ll handle errors if there are any and if there are not, send back the decoded value as the response.
  redirects to: ..
  calling route: 'api/users'
*/
module.exports.currentUser = function(req, res, next) {

    if (!req.userId) {
        res.status(200).send('no id');
    }
    User.findById(req.userId, { password: 0 }, function(err, user) {
        if (err) {
            res.status(500).json({
                error: err,
                msg: 'Error retrieving user',
                data: null
            });
        }
        if (!user) {
            res.status(404).json({
                error: err,
                msg: 'no user found',
                data: null
            });

        } else {
            res.status(200).json({
                error: null,
                msg: 'user retrieved successfully',
                data: user
            });
        }

    });
};

//get user by id in url
module.exports.getOneUser = function(req, res) {
    var userId = req.params.userId;

    // finds user with the userId from the User model
    User
        .findById(userId)
        .select("-password")
        .exec(function(err, doc) {
            //if an error to find the user,I return the error message
            if (err) {
                res.status(500).json({
                    error: err,
                    msg: "there is a problem retrieving the data from the database",
                    data: null
                });
                //if no user with that userId was found,I return an error message
            } else if (!doc) {
                res.status(404).json({
                    error: null,
                    msg: "Can not find a user with the specified id " + userId,
                    data: null
                });
            }
            //when the user is found successfully,I return the user
            else {
                res.status(200).json({
                    error: null,
                    msg: "User is found successfully",
                    data: doc
                });
            }
        });
};


module.exports.getUsers = function(req, res) {
    User.find({}, function(err, users) {
        res.json(users);
    });
};

/*
    Post Function, to register a new user into the temp users database and send the
    verification email.
    Takes:
        body{
            firstName
            lastName
            email
            password
            confirmPassword
        }
    Returns: Success or failure messages along with errors in case of failure.
    Redirects to: Nothing.
    Calling Route: '/api/user/register'
*/

module.exports.register = function(req, res, next) {
    // Check that the body keys are in the expected format and the required fields are there
    var valid =
        req.body.email &&
        Validations.isString(req.body.email) &&
        Validations.matchesRegex(req.body.email, EMAIL_REGEX) &&
        req.body.password &&
        Validations.isString(req.body.password) &&
        req.body.confirmPassword &&
        Validations.isString(req.body.confirmPassword);
    var errorMsg = "";
    var emailValid = req.body.email && Validations.isString(req.body.email) && Validations.matchesRegex(req.body.email, EMAIL_REGEX);
    var passwordValid = req.body.password && Validations.isString(req.body.password);
    var confirmValid = req.body.confirmPassword && Validations.isString(req.body.confirmPassword);

    if (!emailValid) {
        errorMsg = errorMsg + "Email of a valid format is required. \n";
    }
    if (!passwordValid) {
        errorMsg = errorMsg + " Password is required. \n";
    }
    if (!confirmValid) {
        errorMsg = errorMsg + " Confirm password is required.";
    }

    if (!(emailValid && passwordValid && confirmValid)) {
        return res.status(422).json({
            err: null,
            msg: errorMsg,
            data: null
        });
    }
    // Check that the password is 8+ characters
    var password = req.body.password.trim();
    if (password.length < 8) {
        return res.status(422).json({
            err: null,
            msg: 'Password must be of length 8 characters or more.',
            data: null
        });
    }
    // Check that password matches confirmPassword
    if (password !== req.body.confirmPassword.trim()) {
        return res.status(422).json({
            err: null,
            msg: 'Password and confirm password does not match.',
            data: null
        });
    }
    // Check that no other user is registered with this email
    User.findOne({
        email: req.body.email.trim().toLowerCase()
    }).exec(function(err, user) {
        // If an err occurred, call the next middleware in the app.js which is the error handler
        if (err) {
            return next(err);
        }
        // If there is a user with this email don't continue
        if (user) {
            return res.status(422).json({
                err: null,
                msg: 'A user with this email address already exists, please try another email address.',
                data: null
            });
        }

        // Security Check
        delete req.body.createdAt;
        delete req.body.updatedAt;

        // Encrypt the password before saving the user in the database
        Encryption.hashPassword(password, function(err, hash) {
            // If an err occurred, call the next middleware in the app.js which is the error handler
            if (err) {
                return next(err);
            }
            req.body.password = hash;
            User.create(req.body, function(err, newUser) {
                if (err) {
                    return next(err);
                }
                res.status(201).json({
                    err: null,
                    msg: 'Registration successful, you can now login to your account.',
                    data: newUser.toObject()
                });
            });
        });
    });
};

/*
	Post function to log in: takes the email and password from user, validates them and checks them against db 
	Takes: email and password
	Returns: Error or jwt if log in successful
	Redirects to: -
	Calling route: '/api/user/login'*/
module.exports.login = function(req, res, next) {
    //1-Check that the body keys are in the expected format and the required fields are there
    var valid =
        req.body.email && //check email is entered
        Validations.isString(req.body.email) && //check email is string
        Validations.matchesRegex(req.body.email, EMAIL_REGEX) && //check the email is of the right format
        req.body.password && //check password is entered
        Validations.isString(req.body.password); //check password is string

    if (!valid) {
        return res.status(422).json({
            err: null,
            msg: 'Email of valid email format and password are required fields.',
            data: null
        });
    }

    //if fields are valid--> Find the user with this email from the database:
    User.findOne({ email: req.body.email.trim().toLowerCase() })
        .exec(function(err, user) {

            if (err) {
                return next(err);
            }
            // If user not found then he/she is not registered
            if (!user) {
                return res.status(404).json({
                    err: null,
                    msg: 'User not found.',
                    data: null
                });
            }

            // If user found then check that the password he entered matches the encrypted hash in the database
            Encryption.comparePasswordToHash(req.body.password, user.password, function(
                err,
                passwordMatches
            ) {
                if (err) {
                    return next(err);
                }
                // If password doesn't match then its incorrect
                if (!passwordMatches) {
                    return res.status(401)
                        .json({
                            err: null,
                            msg: 'Password is incorrect.',
                            data: null
                        });
                }
                //iff password matches--> server creates a JWT (unique string of characters)using the desired payload and a secret key and put in it the user object from the database
                //The jwt.sign() method takes a payload and the secret key defined in config.js as parameters.
                // user.toObject transorms the document to a json object without the password as we can't leak sensitive info to the frontend

                //var token = jwt.sign({ user: user.toObject() }, req.app.get('secret'), { expiresIn: '12h', subject: (user._id).toString() });
                var token = jwt.sign({
                        // user.toObject transorms the document to a json object without the password as we can't leak sensitive info to the frontend
                        user: user.toObject()
                    },
                    req.app.get('secret'), {
                        expiresIn: '12h'
                    }
                );

                // Send the JWT to the frontend
                res.status(200).json({ err: null, msg: 'Welcome', data: token, expiresIn: '23h' });
            });
        });
};
//note:The practice of adding a token to the request headers is as way of authorizing the user to access resources.


/*
    Delete function, to delete a user account by getting his username from the session
    used when he logged in,and then removing his entry from the db and logging out.
    Takes: nothing.
    Returns: Errors in case of failure.
    Redirects to: '/' (Home Page).
    Calling Route: '/api/user/deleteAccount'
*/
module.exports.deleteAccount = function(req, res) {
    User.findByIdAndRemove(req.user._id, function(err) {
        if (err)
            res.status(500).json({
                error: err,
                msg: null,
                data: null
            });
        else {
            req.logout();
            res.status(200).redirect('/');
        }
    });
};

module.exports.logout = function(req, res) {
    localStorage.clear();
};

module.exports.authenticate = function(req, res) {
    res.send("logged in");

};



/*
    Put function to Add school id to the favorites array in user model.
    Takes:
        params{
            schoolId
        }
    Returns: Success or failure messages along with errors in case of failure.
    Redirects to: Nothing.
    Calling route: '/api/user/addFavorite/:schoolId'
*/
//TESTED
module.exports.addFavorite = function(req, res) {
    var schoolId = req.params.schoolId; //to get the id of the busniness i want to add to favorites
    var userId = req.userId;
    //res.send('hi mizo');
    School.findById(schoolId, function(err, doc) {
        //if an error to find the business,I return the error message
        if (err) {
            res.status(500).json({
                error: err,
                msg: 'Error retrieving desired school',
                data: null
            });

        } else if (!doc) {
            //if no school with that schoolId was found,I return an error message
            res.status(404).json({
                error: null,
                msg: 'School not found',
                data: null
            });
        }
        //if the business is found, add it to user's favorites
        else {
            User.update({
                    _id: userId
                }, {
                    $addToSet: {
                        favorites: schoolId
                    }
                }, //add the school id to the favorites array
                function(err, result) {
                    //couldn't add to array, return the error
                    if (err) {
                        res.status(500).json({
                            error: null,
                            msg: 'adding school to favorites failed',
                            data: null
                        });
                    } else {
                        res.status(200).json({
                            error: null,
                            msg: 'school added to favorites',
                            data: null
                        });
                    }
                }
            );
        }
    });
};


module.exports.isFavorite = function(req, res) {
    var schoolId = req.params.schoolId; //to get the id of the busniness i want to add to favorites
    var userId = req.userId;


    User.findById(userId, function(err, user) {
        if (err) {
            res.status(500).json({
                error: err,
                msg: 'Error retrieving user',
                data: null
            });

        } else if (!user) {
            //if no school with that schoolId was found,I return an error message
            res.status(404).json({
                error: null,
                msg: 'user not found',
                data: null
            });
        }
        //if the user is found
        else {
            for (var i = 0; i < user.favorites.length; i++) {
                if (user.favorites[i] == schoolId) {
                    res.status(200).json({
                        error: null,
                        msg: 'user has this school favorited',
                        data: true
                    });
                    return;
                }
            }
            res.status(200).json({
                error: null,
                msg: 'user doesnt have this school favorited',
                data: false
            });
        }
    });
}



/* delete function to delete business id from the favorites array in user model,
and return success message if business removed successfuly,
else returns error message.
Redirects to: Nothing
Calling route: '/api/user/deleteFavorite/:schoolId'
*/
//TESTED
module.exports.deleteFavorite = function(req, res) {
    var schoolId = req.params.schoolId; //to get the id of the busniness i want to delete from favorites
    var userId = req.userId; //Get the id of the signed in user

    User.update({
            _id: userId
        }, {
            $pull: {
                favorites: schoolId
            }
        },
        function(err, data) {
            if (err) {
                res.status(500).json({
                    error: err,
                    msg: 'deleting favorite failed',
                    data: null
                });
            } else {
                //if school found in user favorites
                if (data.nModified > 0) {
                    res.status(200).json({
                        error: null,
                        msg: 'school deleted successfully from favorites, number of your favorites: ',
                        data: data.favorites
                    });
                } else {
                    //if school not found in user favorites
                    res.status(404).json({
                        error: null,
                        msg: 'school not found in user favorites',
                        data: null
                    });
                }
            }
        }
    );
};

/* get function to check if the registered user already reviewed a school before by finding the school
   id in the list of user reviews,
and return true if found and false if not or an error message.
Redirects to: Nothing
Calling route: 'api/school/review/isReviewed/:schoolId'
*/
module.exports.isReviewed = function(req, res) {
    var schoolId = req.params.schoolId; //to get the id of the busniness i want to add to favorites
    var userId = req.userId;
    var isRev = false;

    User.findById(userId, function(err, user) {
        if (err) {
            res.status(500).json({
                error: err,
                msg: 'Error retrieving user',
                data: null
            });

        } else if (!user) {
            //if no school with that schoolId was found,I return an error message
            res.status(404).json({
                error: null,
                msg: 'user not found',
                data: null
            });
        } else {

            for (var i = 0; i < user.schoolReviews.length; i++) {
                SchoolReview.findById(user.schoolReviews[i], function(err, review) {
                    if (err) {
                        res.status(500).json({
                            error: err,
                            msg: 'Error retrieving review',
                            data: null
                        });
                        return;

                    } else if (review) {
                        console.log("hi: " + review.school);

                        if (review.school == schoolId) {
                            isRev = true;
                            send(isRev);

                        }
                    }


                });

            }

            /*res.status(200).json({
                error: null,
                msg: 'user has not reviewed this school',
                data: false
            });*/

        }
    });

    function send(isRev) {
        res.status(200).json({
            error: null,
            msg: 'you already reviewed this school',
            data: isRev
        });
        return;


    }
}


/*
  GET function to send an email to mernashg@gmail.com from the email of the user:
  The default name for a token in the headers of an HTTP request is x-access-token
  takes:-
  returns: If there is no token provided with the request the server sends back an error (401) with response message of ‘No token provided',
  If the token exists, the jwt.verify() method will be called to decode the token to view the original payload.
   We’ll handle errors if there are any and if there are not, send back the decoded value as the response.
  redirects to: ..
  calling route: 'api/users'
*/
module.exports.sendEmail = function(req, res, next) {
    var subject = 'user message';

    var recipent = 'schoolshop.guc@gmail.com';
    var message = req.body.message;
    var name = req.body.message;
    var email = req.body.email;

    var errorMsg = "";

    var emailValid = req.body.email && //check email is entered
        Validations.isString(req.body.email) && //check email is string
        Validations.matchesRegex(req.body.email, EMAIL_REGEX); //check the email is of the right format

    var messageValid = req.body.message; //check message is 

    if (!emailValid) {
        errorMsg = errorMsg + " Please enter a valid email so we can contact you."
    }
    if (!messageValid) {
        errorMsg = errorMsg + " Please enter your message."
    }

    if ((!emailValid) || (!messageValid)) {
        return res.status(422).json({
            err: null,
            msg: errorMsg,
            data: null
        });

    } else {
        var text = '';

        var html = '<p>A message from: ' + name + '. <br>Contact email: ' + email + '.<br><br> Message content: ' +
            message + '.<br> </p>';

        //sendEmail(subject, email, text, html, done)
        emailSender.sendEmail(subject, recipent, '', html, function(err, info) {
            if (err) {
                return res.status(500).json({
                    error: err,
                    msg: 'Error sending email',
                    data: null
                });
            } else {
                //callback(null, true);
                res.status(200).json({
                    error: null,
                    msg: 'email sent successfully ',
                    data: info
                });
            }
        });

    }




}