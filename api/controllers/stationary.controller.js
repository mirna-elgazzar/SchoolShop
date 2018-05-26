const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const Stationary = mongoose.model('Stationary');
const StationaryReview = mongoose.model('StationeryReview');
const Validations = require('../utils/Validation');
const Encryption = require('../utils/Encryption');
const EMAIL_REGEX = require('../config/Config').EMAIL_REGEX;
const Fuse = require('fuse.js');
const geoip = require('geoip-lite');
const ReqIp = require('req-ip');
var reqIp = ReqIp();
var where = require('node-where');
const publicIp = require('public-ip');

module.exports.getStationary = function(req, res) {
    var sort = { name: 1 };
    if (req.query && req.query.sort === 'rating') {
        sort = {
            rating: 'desc'
        };
    }
    if (req.query && req.query.sort === 'alphabet') {
        sort = {
            name: 1
        };
    }
    Stationary.find({})
        .sort(sort)
        .exec(function(err, stationary) {

            if (err) {
                res.status(500).json({
                    error: err,
                    msg: null,
                    data: null
                });
            } else {

                res.status(200).json({
                    error: null,
                    msg: 'Got stationary successfully',
                    data: stationary
                });
            }
        });
};

module.exports.getStationaryLocation = function(req, res) {
    console.log("i'm here");
    var sort = { name: 1 };
    if (req.query && req.query.sort === 'rating') {
        sort = {
            rating: 'desc'
        };
    }
    if (req.query && req.query.sort === 'alphabet') {
        sort = {
            name: 1
        };
    }

    var location;

    if (req.query && req.query.location) {
        location = req.query.location;
    }

    var query;
    msg = "";

    if (location == "nearby") {
        var lat = 0;
        var lng = 0;

        //get ip address of the client that made the request

        publicIp.v4().then(ip => {
            where.is(ip, function(err, result) {
                if (result) {
                    console.log('City: ' + result.get('city'));
                    console.log('Country: ' + result.get('country'));
                    lat = result.get('lat');
                    lng = result.get('lng');

                    Stationary.find({
                            'location.coordinates': {
                                $near: {
                                    $geometry: {
                                        type: 'Point',
                                        coordinates: [lng, lat]
                                    },
                                    //max distance in metres, so this is 50 km
                                    $maxDistance: 10 * 1000
                                }
                            }
                        })
                        .sort(sort)
                        .exec(function(err, stationary) {
                            //if an error occurred, return the error
                            if (err)
                                res.status(500).json({
                                    error: err,
                                    msg: null,
                                    data: null
                                });
                            //return the found schools or an empty array
                            else {
                                res.status(200).json({
                                    error: null,
                                    msg: "Stationery stores within 30 Km from your location",
                                    data: stationary
                                });
                            }
                        });
                }
            });
        });

    } else {

        if (location == "all") {
            query = {};
            msg = "All Stationery Stores";
        } else {
            query = { 'location.city': location };
            msg = "Stationery stores in " + location;

        }

        Stationary.find(query)
            .sort(sort)
            .exec(function(err, stationary) {

                if (err) {
                    res.status(500).json({
                        error: err,
                        msg: "error getting stationary",
                        data: null
                    });
                } else {

                    res.status(200).json({
                        error: null,
                        msg: msg,
                        data: stationary
                    });
                }
            });

    }



};




/*
    Get function, that gets the current data of the stationary
    and pass stationary object to the frontend to display it.
    Takes:
        params{
            stationaryId
        }
    Returns: Success or failure messages along with errors in case of failure.
    Redirects to: Nothing.
    Calling Route: '/api/stationary/:stationaryId/getInfo'
*/
module.exports.getCurrentInfo = function(req, res) {
    //select all fields except password
    Stationary.findById(req.params.stationaryId).exec(function(err, stationary) {
        //if error occured
        if (err) {
            res.status(500).json({
                error: err,
                msg: "error finding the desired stationary info",
                data: null

            });
        } else {
            if (stationary) {

                res.status(200).json({
                    error: null,
                    msg: null,
                    data: stationary
                });
            } else
                res.status(404).json({
                    error: null,
                    msg: 'stationary not found.',
                    data: null
                });
        }
    });
};

/*
    Get function that retreives reviews of a stationery
    Takes:
        params: {
            stationeryName
        }
    Returns: {
        error: "Error object if any",
        msg: "Success or failure message",
        data: "reviews of stationery"
    }
    Redirects to: Nothing.
    Calling route: '/api/stationary/review/:schoolName'
*/
module.exports.getStationeryReviews = function(req, res) {

    var encodedStationeryName = req.params.stationeryName;
    var decodedStationeryName = encodedStationeryName.replace(/_/g, ' ');


    StationaryReview.find({
            stationery_name: decodedStationeryName
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
                console.log(reviews);
                res.status(200).json({
                    error: null,
                    msg: 'Reviews stationery retrieved Successfully',
                    data: reviews
                });

            } else {
                res.status(404).json({
                    error: err,
                    msg: 'no reviews found about this stationery',
                    data: null
                });
            }
        });
};

/*
    Get function that calculates, save and returns the average rating of a stationery
    Takes:
        params: {
            stationeryName
        }
    Returns: {
        error: "Error object if any",
        msg: "Success or failure message",
        data: "average rating of stationery"
    }
    Redirects to: Nothing.
    Calling route: '/api/stationary/review/averageRating/:stationeryName'
*/

module.exports.stationaryAverage = function(req, res) {


    var encodedStationeryName = req.params.stationeryName;
    var decodedStationeryName = encodedStationeryName.replace(/_/g, ' ');
    var totalRate = 0;

    //get all reviews of a certain school:
    StationaryReview.find({ stationery_name: decodedStationeryName }, function(err, reviews) {
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
            getTotal(reviews.length);
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
        console.log(average); //correct

        Stationary.findOne({
            name: decodedStationeryName
        }, function(err, stationary) {
            if (err) {
                res.status(404).json({
                    error: err,
                    msg: 'stationery not found',
                    data: null
                });
            } else {

                stationary.average = average; //correct
                stationary.totalReviews = total; //correct

                stationary.save(function(err, sc) {
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
                            msg: 'average rating retrieved Successfully',
                            data: {
                                average: stationary.average,
                                total: stationary.totalReviews
                            }
                        });
                    }


                });
            }

            average = 0;
            totalRate = 0;
            total = 0;
            rateFloat = 0;
        })
    }

}