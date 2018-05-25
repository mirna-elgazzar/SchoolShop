const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const User = mongoose.model('User');
const School = mongoose.model('School');
const Validations = require('../utils/Validation');
const Encryption = require('../utils/Encryption');
const EMAIL_REGEX = require('../config/Config').EMAIL_REGEX;

module.exports.getSchools = function(req, res) {
    var sort = { name: 1 };
    var sortRequest = req.params.sort;
    if (sortRequest === 'rating') {
        sort = {
            average: 'desc'
        };
    }
    if (sortRequest === 'alphabet') {
        sort = {
            name: 1
        };
    }

    School.find({})
        .sort(sort)
        .exec(function(err, schools) {
            //If an error occured return it to the frontend
            if (err) {
                res.status(500).json({
                    error: err,
                    msg: null,
                    data: null
                });
            } else {
                //return an array of schools or an empty array
                res.status(200).json({
                    error: null,
                    msg: 'Got schools successfully',
                    data: schools
                });
            }
        });
};

//for testing:
module.exports.getSchool = function(req, res, next) {
    var schoolId = req.params.schoolId;
    //res.send('mizo');
    School.findById(schoolId, function(err, school) {
        if (err)
            return res.status(500).send('There was a problem finding the school.');
        if (!school) return res.status(404).send('No school found.');

        res.status(200).send(school);
    });
};

/*
    Get function that retrieves the schools belonging to a certain system (IGCSE - american - british - canadian- catholic - 
    french - german - islamic - IB - abitur - CGC - GCSE - APID - special needs - boys - girls)
    and displays them in an alphabetical order
    Takes:
        params: {
            system
        }
    Returns: {
        error: "Error object if any"
        msg: "Success or failure message"
        data:schools
    }
    Redirects to: Nothing
    Calling route: '/api/school/system/:sys'
*/

module.exports.getSchoolsBySystem = function(req, res) {
    //Finds all schools according to the system
    var system = req.params.system;
    //res.send(system);
    School.find({
        systems: system
    }).exec(function(err, schools) {
        //If an error occurred, return an error
        if (err) {
            res.status(500).json({
                error: err,
                msg: 'Error retrieving desired schools',
                data: null
            });
        } else {
            //returns an array of reviews or empty array
            res.status(200).json({
                error: null,
                msg: 'schools retrieved Successfully',
                data: schools
            });
        }
    });
};


/*
    Get function, that gets the current data of the school
    and pass school object to the frontend to display it.
    Takes:
        params{
            schoolId
        }
    Returns: Success or failure messages along with errors in case of failure.
    Redirects to: Nothing.
    Calling Route: '/api/school/:schoolId/getInfo'
*/
module.exports.getCurrentInfo = function(req, res) {
    //select all fields except password
    School.findById(req.params.schoolId).exec(function(err, school) {
        //if error occured
        if (err) {
            res.status(500).json({
                error: err,
                msg: null,
                data: null
            });
        } else {
            if (!school) {
                res.status(404).json({
                    error: null,
                    msg: 'school not found.',
                    data: null
                });
            } else {
                console.log("found school");
                res.status(200).json({
                    error: null,
                    msg: null,
                    data: school
                });
            }

        }
    });
};