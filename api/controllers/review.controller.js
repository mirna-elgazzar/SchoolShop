const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const User = mongoose.model('User');
const SchoolReview = mongoose.model('SchoolReview');
const TeacherReview = mongoose.model('TeacherReview');
const School = mongoose.model('School');
const Teacher = mongoose.model('Teacher');
const Validations = require('../utils/Validation');
const Encryption = require('../utils/Encryption');
const EMAIL_REGEX = require('../config/Config').EMAIL_REGEX;

//////////////--------------------SCHOOL REVIEWS-----------------------//////////////

/*
    Get function that retrieves the school reviews made by a user from the database
    and displays them
    Takes:
        params: {
            userId
        }
    Returns: {
        error: "Error object if any"
        msg: "Success or failure message"
        All reviews made by a user
    }
    Redirects to: Nothing
    Calling route: '/api/school/review/user/:userId'
*/

module.exports.getUserSchoolReviews = function(req, res) {
    //Finds all reviews made by a user according to the User ID
    SchoolReview.find({
            user: req.params.userId
        })
        .populate({
            path: 'school',
            select: 'name'
        })
        .exec(function(err, reviews) {
            //If an error occurred, return an error
            if (err) {
                res.status(500).json({
                    error: err,
                    msg: 'Error retrieving desired reviews',
                    data: null
                });
            } else {
                //returns an array of reviews or empty array
                res.status(200).json({
                    error: null,
                    msg: 'Reviews retrieved Successfully',
                    data: reviews
                });
            }
        });
};


/*
    GET function that retrieves the reviews made on a school from the database
    Takes:
        params: {
            schoolId
        }
    Returns: {
        error: "Error object if any",
        msg: "Success or failure message"
        All reviews made on a Bussines
    }
    Redirects to: Nothing
    Calling route: '/api/school/review/:schoolname'
*/


module.exports.getSchoolReviews = function(req, res) {

    var encodedSchoolName = req.params.schoolName;
    var decodedSchoolName = encodedSchoolName.replace(/_/g, ' ');
    console.log("encoded: " + encodedSchoolName + " decoded: " + decodedSchoolName);

    SchoolReview.find({
            school_name: decodedSchoolName
        })
        .exec(function(err, reviews) {
            //If an error occurred, return an error
            if (err) {
                res.status(500).json({
                    error: err,
                    msg: 'Error retrieving desired reviews',
                    data: null
                });
            }
            if (reviews) {
                res.status(200).json({
                    error: null,
                    msg: 'Reviews retrieved Successfully',
                    data: reviews
                });

            } else {
                res.status(404).json({
                    error: err,
                    msg: 'no reviews found about this school',
                    data: null
                });
            }
        });
};
/*
    Get function that calculates, save and returns the average rating of a school. i also want to save the 
    average rating, total ratings and total number of reviews to the school.
    Takes:
        body: {
            school_name
        }
    Returns: {
        error: "Error object if any",
        msg: "Success or failure message",
        data: "average rating of business"
    }
    Redirects to: Nothing.
    Calling route: '/api/school/review/averageRating/:schoolName'
*/

module.exports.schoolAverage = function(req, res) {

    var encodedSchoolName = req.params.schoolName;
    var decodedSchoolName = encodedSchoolName.replace(/_/g, ' ');
    var totalRate = 0;



    //get all reviews of a certain school:
    SchoolReview.find({ school_name: decodedSchoolName }, function(err, reviews) {
        if (err) {
            return res.status(500).json({
                error: err,
                msg: 'Error getting average rating',
                data: null
            });


        }
        if (!reviews) {
            res.status(404).json({
                error: err,
                msg: 'no reviews found about this school',
                data: null
            });

        } else {
            getTotal(reviews.length); //total number of reviews
            getRating(reviews);

            //res.send(reviews);
        }


    });


    function getTotal(results) {
        return total = results;
    }


    function getRating(rev) {
        for (var i = 0; i < rev.length; i++) {
            rateFloat = parseFloat(rev[i].rating); //correct
            totalRate += rateFloat; //correct

        }
        average = totalRate / parseFloat(total);

        console.log("average: " + average); //correct

        School.findOne({
            name: decodedSchoolName
        }, function(err, school) {
            if (err) {
                res.status(404).json({
                    error: err,
                    msg: 'school not found',
                    data: null
                });
            } else {
                if (!school) {
                    res.status(404).json({
                        error: err,
                        msg: 'school not found',
                        data: null
                    });

                } else {
                    school.average = average; //correct
                    school.rating = "" + average;
                    school.totalReviews = total; //total number of reviews
                    school.totalRatings = totalRate; //the sum of all ratings

                    school.save(function(err, sc) {
                        if (err) {
                            res.status(500).json({
                                error: err,
                                msg: 'Error retrieving desired reviews',
                                data: null
                            });
                        } else {
                            //returns an array of reviews or empty array
                            res.status(200).json({
                                error: null,
                                msg: 'averag rating retrieved Successfully',
                                data: {
                                    average: school.average,
                                    total: school.totalReviews, //total number of reviews
                                    totalRatings: school.totalRatings //the sum of all ratings
                                }
                            });
                        }


                    });
                }


            }

            average = 0;
            totalRate = 0;
            total = 0;
            rateFloat = 0;
        })
    }

}

module.exports.analyzeRating = function(req, res) {
    var encodedSchoolName = req.params.schoolName;
    var decodedSchoolName = encodedSchoolName.replace(/_/g, ' ');
    var rating5Num = 0;
    var rating4Num = 0;
    var rating3Num = 0;
    var rating2Num = 0;
    var rating1Num = 0;

    SchoolReview.count({ school_name: decodedSchoolName, rating: "5" }, function(err, count) {
        if (err) {
            return res.status(500).json({
                error: err,
                msg: 'Error counting reviews',
                data: null
            });

        } else {
            rating5Num = count;
            SchoolReview.count({ school_name: decodedSchoolName, rating: "4" }, function(err, count) {
                if (err) {
                    return res.status(500).json({
                        error: err,
                        msg: 'Error counting reviews',
                        data: null
                    });

                } else {
                    rating4Num = count;
                    SchoolReview.count({ school_name: decodedSchoolName, rating: "3" }, function(err, count) {
                        if (err) {
                            return res.status(500).json({
                                error: err,
                                msg: 'Error counting reviews',
                                data: null
                            });

                        } else {
                            rating3Num = count;
                            SchoolReview.count({ school_name: decodedSchoolName, rating: "2" }, function(err, count) {
                                if (err) {
                                    return res.status(500).json({
                                        error: err,
                                        msg: 'Error counting reviews',
                                        data: null
                                    });

                                } else {
                                    rating2Num = count;
                                    SchoolReview.count({ school_name: decodedSchoolName, rating: "1" }, function(err, count) {
                                        if (err) {
                                            return res.status(500).json({
                                                error: err,
                                                msg: 'Error counting reviews',
                                                data: null
                                            });

                                        } else {
                                            rating1Num = count;
                                            res.status(200).json({
                                                error: null,
                                                msg: 'rating analyzed Successfully',
                                                data: {
                                                    rating1Num: rating1Num,
                                                    rating2Num: rating2Num,
                                                    rating3Num: rating3Num,
                                                    rating4Num: rating4Num,
                                                    rating5Num: rating5Num
                                                }
                                            });

                                        }

                                    });

                                }

                            });

                        }

                    });

                }

            });

        }

    });



}

/*
    Get function that returns the average rating of a school
    Takes:
        params: {
            schoolId
        }
    Returns: {
        error: "Error object if any",
        msg: "Success or failure message",
        data: "average rating of business"
    }
    Redirects to: Nothing.
    Calling route: '/api/school/review/averageRating/:schoolId'
*/
module.exports.getSchoolAverageRating = function(req, res) {
    // Get the school reviews from the database by name
    var encodedSchoolName = req.params.schoolName;
    var decodedSchoolName = encodedSchoolName.replace(/_/g, ' ');

    School.find({ name: decodedSchoolName }, function(err, school) {
        // If there is an error return it in response
        if (err)
            return res.status(500).json({
                error: err,
                msg: 'Error finding school',
                data: null
            });
        if (school) {
            // Calculate average rating using totalRating and count of reviews
            const reviewsCount = school.reviews.length;
            var averageRating = 0.0;
            if (reviewsCount != 0) {
                averageRating =
                    school.totalRatings /
                    parseFloat(reviewsCount);
            }
            // Return average rating in response
            res.status(200).json({
                error: null,
                msg: 'Successfully calculated average rating',
                data: averageRating
            });
        } else
            res.status(404).json({
                error: null,
                msg: 'School not found',
                data: null
            });
    });
};


/*
    Post function that adds a review by a registered user on a school
    to the database
    Takes:
        Body: {
            public school_name: string,
            public user_name: string,  (if no user logged in)
            public comment: string,
	        public rating: string,
	        public language: string,
	        public time?: Date
        }
    Returns: {
        error: "Error object if any"
        msg: "Success or failure message"
    }
    Redirects to: Nothing
    Calling route: '/api/school/review/schoolId/add'
*/
///fixxxxx
module.exports.addSchoolReview = function(req, res) {
    //get values from post request
    var user_name = req.body.user_name;
    var school = req.params.schoolId; //correct
    var school_name = req.body.school_name;
    var comment = req.body.comment;
    var rating = req.body.rating;
    var language = req.body.language;
    var time = req.body.time_string;
    var commentAvailable = false;
    var userReview = false;

    if (req.body.comment) {
        commentAvailable = true;
    }

    var ratingNotValid = false;
    var errorMsg = "";

    req.checkBody('rating', 'Rating is required.').notEmpty();
    req.checkBody('user_name', 'user name is required.').notEmpty();

    if (rating == "0" || rating == 0) {
        ratingNotValid = true;
        errorMsg = errorMsg + " Rating is required.";
    }

    if (!user_name) {
        errorMsg = errorMsg + "Your name is required.";
    }

    if (ratingNotValid || (!user_name)) {
        return res.status(422).json({
            err: null,
            msg: errorMsg,
            data: null
        });
    }
    var errors = req.validationErrors();
    if (errors) {
        res.status(500).json({
            error: errors,
            msg: 'error',
            data: null
        });
    } else {

        //creates a new Review object with the values from the post request
        const newReview = new SchoolReview({
            school_name: school_name,
            user_name: user_name, //if no user logged in
            comment: comment,
            rating: rating,
            language: language,
            time: Date.now(),
            commentAvailable: commentAvailable,
            userReview: userReview,
            school: school
        });
        //console.log(newReview);
        //saves the new review in the database
        newReview.save(function(err, schoolReview) {
            //if an error occurred, return an error
            if (err)
                return res.status(500).json({
                    error: err,
                    msg: 'There was a problem adding the information to the database',
                    data: null
                });
            //if no error--> i need to do 2 things, save threview in the array of reviews of the user and in the school reviews

            School.findById(schoolReview.school, function(err, school) {
                if (err)
                    return res.status(500).json({
                        error: err,
                        msg: 'Error occured while updating school concerned',
                        data: null
                    });

                //if no error: updates totalRating of the school & add the review to its reviews
                if (schoolReview.rating) {
                    school.totalRatings = school.totalRatings + parseFloat(schoolReview.rating);
                    school.totalReviews = school.totalReviews + 1;
                    school.average = school.totalRatings / parseFloat(school.totalReviews);

                }

                //Adds review to reviews array of corresponding school
                school.reviews.push(schoolReview._id);

                // Saves the updated school document in database
                school.save(function(err) {
                    if (err) {
                        return res.status(400).json({
                            error: err,
                            msg: 'Error occured while saving review',
                            data: null
                        });
                    } else {
                        res.status(200).json({
                            error: null,
                            msg: 'Review submitted Successfully',
                            data: null
                        });

                    }

                });

            });

        });
    }



};


module.exports.addUserSchoolReview = function(req, res) {

    var userId = req.userId;
    var user_name = "";
    var school = req.params.schoolId;
    var school_name = req.body.school_name;
    var comment = req.body.comment;
    var rating = req.body.rating;
    var language = req.body.language;
    var commentAvailable = false;
    var userReview = true;
    User.findById(userId, function(err, user) {
        if (err) {
            res.status(500).json({
                error: errors,
                msg: 'error',
                data: null
            });

        }
        if (!user) {
            res.status(404).json({
                error: null,
                msg: 'User not found.',
                data: null
            });

        } else {
            user_name = user.name;
            if (req.body.comment) {
                commentAvailable = true;
            }


            var ratingNotValid = false;
            var errorMsg = ""; //correct


            req.checkBody('rating', 'Rating is required.').notEmpty();
            if (rating == "0" || rating == 0) {
                ratingNotValid = true;
                errorMsg = errorMsg + " Rating is required.";
            }


            if (ratingNotValid) {
                return res.status(422).json({
                    err: null,
                    msg: errorMsg,
                    data: null
                });
            }

            var errors = req.validationErrors();
            if (errors) {
                res.status(500).json({
                    error: errors,
                    msg: 'error',
                    data: null
                });
            } else {
                //creates a new Review object with the values from the post request
                const newReview = new SchoolReview({
                    school_name: school_name,
                    user_name: user.firstName + " " + user.lastName,
                    comment: comment,
                    commentAvailable: commentAvailable,
                    rating: rating,
                    language: language,
                    time: Date.now(),
                    user: userId, //if user logged in
                    userReview: userReview,
                    school: school
                });
                //console.log(newReview);
                //saves the new review in the database
                newReview.save(function(err, schoolReview) {
                    //if an error occurred, return an error
                    if (err)
                        return res.status(500).json({
                            error: err,
                            msg: 'There was a problem adding the information to the database',
                            data: null
                        });
                    //if no error--> i need to do 2 things, save threview in the array of reviews of the user and in the school reviews

                    School.findById(schoolReview.school, function(err, school) {
                        if (err)
                            return res.status(500).json({
                                error: err,
                                msg: 'Error occured while updating school concerned',
                                data: null
                            });

                        //if no error: updates totalRating of the school & add the review to its reviews
                        if (schoolReview.rating) {
                            if (school.totalRatings) {
                                school.totalRatings = school.totalRatings + parseFloat(schoolReview.rating);
                            } else {
                                school.totalRatings = schoolReview.rating;
                            }

                            school.totalReviews = school.totalReviews + 1;
                            school.average = school.totalRatings / parseFloat(school.totalReviews);
                        }

                        //Adds review to reviews array of corresponding school
                        school.reviews.push(schoolReview._id);

                        // Saves the updated school document in database
                        school.save(function(err) {
                            if (err) {
                                return res.status(400).json({
                                    error: err,
                                    msg: 'Error occured while saving review',
                                    data: null
                                });
                            } else {
                                User.findByIdAndUpdate(schoolReview.user, { $push: { schoolReviews: schoolReview._id } }, {
                                        safe: true,
                                        upsert: true,
                                        new: true
                                    },
                                    function(err, userr) {
                                        if (err) {
                                            return res.status(500).json({
                                                error: err,
                                                msg: 'Error occured while updating User concerned',
                                                data: null
                                            });
                                        }
                                        if (userr) {
                                            res.status(200).json({
                                                error: null,
                                                msg: 'Review submitted Successfully',
                                                data: schoolReview
                                            });

                                        } else {
                                            res.status(404).json({
                                                error: null,
                                                msg: 'User not found.',
                                                data: null
                                            });

                                        }
                                    });
                            }

                        });

                    });

                });
            }

        }
    });

}


/*
    Put function that handles editing an existing review
    It retrieves the review from the database, updates it
    and saves it back in the database
    Takes:
        Body: {
        newComment: "The new comment as specified by the user"
        newRating: "The new rating as specified by the user"
        }
    Returns: {
        error: "Error object if any"
        msg: "Success or failure message"
    }
    Redirects to: Nothing
    Calling route: '/api/school/review/:reviewId/edit'
*/
module.exports.editSchoolReview1 = function(req, res) {
    //gets values of variables that user wants to edit
    var userId = req.userId;

    const newRating = req.body.rating;
    const newComment = req.body.comment;
    var commentAvailable = false;

    //Validating entries
    req.checkBody('rating', 'rating is required.').notEmpty();

    var errors = req.validationErrors();

    if (errors) {
        res.status(500).json({
            errors: errors,
            msg: null,
            data: null
        });
    } else {
        //Finds the review by the ID specified in the URI and updates the comment and the rating
        SchoolReview.findById(req.params.schoolReviewId, function(err, oldReview) {
            //If error occurred return it in response
            if (err) {
                res.status(500).json({
                    error: err,
                    msg: 'Failed to retrieve review',
                    data: null
                });
            } else {
                if (!oldReview) {
                    res.status(404).json({
                        error: null,
                        msg: 'Review not found',
                        data: null
                    });
                } else {
                    School.findById(oldReview.school, function(err, school) {
                        if (err) {
                            res.status(500).json({
                                error: err,
                                msg: 'Failed to retrieve school',
                                data: null
                            });
                        } else {
                            if (!school) {
                                res.status(404).json({
                                    error: null,
                                    msg: 'school not found',
                                    data: null
                                });
                                //if school found: update the ratings and the review content
                            } else {
                                //recalculate total ratigs and average:
                                school.totalRatings = school.totalRatings - parseFLoat(oldReview.rating) + parseFloat(newRating);
                                school.average = school.totalRatings / parseFloat(school.totalReviews);
                                console.log("totalrating = " + school.totalRatings + ",totalreviews: " + school.totalReviews +
                                    ", average: " + school.average);

                                school.save(function(err, updatedSchool) {
                                    if (err) {
                                        res.status(500).json({
                                            error: err,
                                            msg: 'Failed to update school',
                                            data: null
                                        });
                                    } else {

                                        oldReview.rating = parseFloat(newRating);
                                        oldReview.comment = newComment;

                                        oldReview.save(function(err, newReview) {
                                            if (err) {
                                                res.status(500).json({
                                                    error: err,
                                                    msg: 'Failed to update review',
                                                    data: null
                                                });
                                            } else {
                                                //If no error occurs, response with success = true
                                                res.status(200).json({
                                                    error: err,
                                                    msg: 'Review successfully edited',
                                                    data: null
                                                });
                                            }
                                        });
                                    }
                                });
                            }
                        }
                    });
                }
            }
        });
    }
};

/*
    Delete function that finds and deletes a specific review
    Takes:
        params: {
            reviewId
        }
    Returns: {
        error: "Error object if any"
        msg: "success or failure message"
    }
    Redirects to: Nothing
    Calling route: '/api/school/review/:reviewId/delete'
*/
module.exports.deleteSchoolReview = function(req, res) {
    //Finding and deleting review from database
    SchoolReview.findByIdAndRemove(req.params.schoolReviewId, function(err, reviewToDelete) {
        if (err) {
            return res.status(500).json({
                error: err,
                msg: 'There was a problem with deleting the review',
                data: null
            });
        }
        if (reviewToDelete) {
            //Delete review from reviews array in corresponding user
            User.findByIdAndUpdate(
                reviewToDelete.user, {
                    $pull: {
                        schoolReviews: reviewToDelete._id
                    }
                }, {
                    safe: true,
                    upsert: true,
                    new: true
                },
                function(err, user) {
                    if (err)
                        return res.status(500).json({
                            error: err,
                            msg: 'Error occured while updating User concerned',
                            data: null
                        });
                    if (user) {

                        School.findById(reviewToDelete.school, function(err, school) {
                            if (err) {
                                res.status(500).json({
                                    error: err,
                                    msg: 'Review was deleted successfully from user reviews, however, an error occured while deleting it from school reviews.',
                                    data: null
                                });
                            } else {
                                if (!school) {
                                    res.status(404).json({
                                        error: null,
                                        msg: "school not found, review wasn't removed from school.",
                                        data: null
                                    });
                                } else {
                                    school.totalRatings = school.totalRatings - parseFloat(reviewToDelete.rating);
                                    school.totalReviews = school.totalReviews - 1;
                                    school.average = school.totalRatings / parseFloat(school.totalReviews);
                                    console.log("totalrating = " + school.totalRatings + ",totalreviews: " + school.totalReviews +
                                        ", average: " + school.average);

                                    school.save(function(err, updatedSchool) {
                                        if (err) {
                                            res.status(500).json({
                                                error: err,
                                                msg: 'Error occured while updating school concerned',
                                                data: null
                                            });
                                        } else {
                                            res.status(200).json({
                                                error: null,
                                                msg: 'Review successfully deleted',
                                                data: null
                                            });
                                        }
                                    });
                                }
                            }

                        });

                    } else
                        res.status(404).json({
                            error: null,
                            msg: "User not found, couldn't delete review.",
                            data: null
                        });
                }
            );
        } else
            res.status(404).json({
                error: null,
                msg: 'review not found',
                data: null
            });
    });
};





module.exports.getUserSchoolReview = function(req, res) {
    var userId = req.userId;
    var schoolId = req.params.schoolId;

    SchoolReview.findOne({ $and: [{ user: userId }, { school: schoolId }] })
        .exec(function(err, review) {
            //If an error occurred, return an error
            if (err) {
                res.status(500).json({
                    error: err,
                    msg: 'Error retrieving user review',
                    data: null
                });
            } else {
                if (!review) {
                    res.status(404).json({
                        error: null,
                        msg: 'Review not found',
                        data: null
                    });

                } else {
                    res.status(200).json({
                        error: null,
                        msg: 'Review retrieved Successfully',
                        data: review
                    });

                }
            }
        });
};





module.exports.editSchoolReview = function(req, res) {
    //gets values of variables that user wants to edit
    var userId = req.userId;
    var schoolId = req.params.schoolId;

    const newRating = req.body.rating;
    const newComment = req.body.comment;


    //Validating entries
    req.checkBody('rating', 'rating is required.').notEmpty();

    var errors = req.validationErrors();

    if (errors) {
        res.status(500).json({
            errors: errors,
            msg: null,
            data: null
        });
    } else {
        //Finds the review by the ID specified in the URI and updates the comment and the rating
        SchoolReview.findOne({ $and: [{ user: userId }, { school: schoolId }] }, function(err, oldReview) {
            //If error occurred return it in response
            if (err) {
                res.status(500).json({
                    error: err,
                    msg: 'Failed to retrieve review',
                    data: null
                });
            } else {
                if (!oldReview) {
                    res.status(404).json({
                        error: null,
                        msg: 'Review not found',
                        data: null
                    });
                } else {
                    School.findById(oldReview.school, function(err, school) {
                        if (err) {
                            res.status(500).json({
                                error: err,
                                msg: 'Failed to retrieve school',
                                data: null
                            });
                        } else {
                            if (!school) {
                                res.status(404).json({
                                    error: null,
                                    msg: 'school not found',
                                    data: null
                                });
                                //if school found: update the ratings and the review content
                            } else {
                                //recalculate total ratigs and average:
                                school.totalRatings = school.totalRatings - parseFloat(oldReview.rating) + parseFloat(newRating);
                                school.average = school.totalRatings / parseFloat(school.totalReviews);
                                console.log("totalrating = " + school.totalRatings + ",totalreviews: " + school.totalReviews +
                                    ", average: " + school.average);

                                school.save(function(err, updatedSchool) {
                                    if (err) {
                                        res.status(500).json({
                                            error: err,
                                            msg: 'Failed to update school',
                                            data: null
                                        });
                                    } else {

                                        oldReview.rating = parseFloat(newRating);
                                        if (newComment != "") {
                                            oldReview.comment = newComment;
                                        }


                                        oldReview.save(function(err, newReview) {
                                            if (err) {
                                                res.status(500).json({
                                                    error: err,
                                                    msg: 'Failed to update review',
                                                    data: null
                                                });
                                            } else {
                                                //If no error occurs, response with success = true
                                                res.status(200).json({
                                                    error: err,
                                                    msg: 'Review successfully edited',
                                                    data: null
                                                });
                                            }
                                        });
                                    }
                                });
                            }
                        }
                    });
                }
            }
        });
    }
};