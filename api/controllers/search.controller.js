const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const User = mongoose.model('User');
const School = mongoose.model('School');
const Teacher = mongoose.model('Teacher');
const Validations = require('../utils/Validation');
const Encryption = require('../utils/Encryption');
const EMAIL_REGEX = require('../config/Config').EMAIL_REGEX;
const Fuse = require('fuse.js');

const ReqIp = require('req-ip'); //didn't work
var reqIp = ReqIp();

var where = require('node-where');

var ip = require('ip'); //didn't wrok

const publicIp = require('public-ip');

//const randtoken = require('rand-token');
//const emailSender = require('../config/emailSender');
//const bcrypt = require('bcryptjs');

/*
    Get function, to Search the School model by name entered by the user, it gets all schools with matching names
    
    Takes:
        query{
            result: "used for name search value"
        }
    Returns: Array of matching businesses to the search query.
    Redirects to: Nothing.
    Calling route: '/api/search'
*/
module.exports.searchByName = function(req, res, next) {

    var sort = { name: 1 };

    if (req.query && req.query.sort === 'rating') {
        sort = {
            average: 'desc'
        };
    }
    if (req.query && req.query.sort === 'alphabet') {
        sort = {
            name: 1
        };
    }
    //fuse cinfiguration:
    var options = {
        shouldSort: false,
        findAllMatches: true,
        //includeScore: true,
        threshold: 0.35,
        //location: 0,
        //distance: 100,
        maxPatternLength: 32,
        minMatchCharLength: 1,
        keys: [
            "name"
        ]
    };
    if (req.query && req.query.result) {
        var nameOrTag = req.query.result;
        School.find({}).sort(sort) //getting all schools & sorting alphabetically
            .exec(function(err, schools) {
                //If an error occured return it to the frontend
                var fuse = new Fuse(schools, options); // schools is the item array
                var result = fuse.search(nameOrTag);
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
                        msg: "Search Results",
                        data: result
                    });
                }
            });
    }
    //if he didn't search by name or tag call searchByLocation
    else next();


}


/*
    Get function, Search the School model for schools with location entered by the user.
    Takes:
        query{
            location: "used for location search value",
            
        }
    Returns: Array of matching businesses to the search query.
    Redirects to: nothing.
    Calling route: '/api/searchLocation'
*/

module.exports.searchByLocation = function(req, res) {



    var location = 'All';
    var sort = { name: 1 };
    if (req.query && req.query.sort === 'rating') {
        sort = {
            average: 'desc'
        };
    }
    if (req.query && req.query.sort === 'alphabet') {
        sort = {
            name: 1
        };
    }

    //Check for query string Ex: "/api/search?location=Cairo"

    if (req.query && req.query.location) {
        location = req.query.location;
    }

    var findQuery;

    //if location by geocordinates should be used
    if (location === 'nearby') {
        var lat = 0;
        var lng = 0;

        //get ip address of the client that made the request
        //var ip = req.ip;
        //var demo = ip.address();


        publicIp.v4().then(ip => {
            where.is(ip, function(err, result) {
                console.log("ip: " + ip);
                if (result) {
                    console.log('City: ' + result.get('city'));
                    console.log('State / Region: ' + result.get('region'));
                    console.log('State / Region Code: ' + result.get('regionCode'));
                    console.log('Zip: ' + result.get('postalCode'));
                    console.log('Country: ' + result.get('country'));
                    console.log('Country Code: ' + result.get('countryCode'));
                    lat = result.get('lat');
                    console.log('Lat: ' + lat);
                    lng = result.get('lng');
                    console.log('Lng: ' + lng);
                    School.find({
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
                        .select('-password')
                        .exec(function(err, schools) {
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
                                    msg: "Schools within 30 Km from your location",
                                    data: schools
                                });
                            }
                        });
                }
            });

        });



    } else {
        //if location was a regular city
        findQuery = { 'location.city': location };
        School.find(findQuery)
            .sort(sort)
            .select('-password')
            .exec(function(err, schools) {
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
                        msg: "Schools in " + location,
                        data: schools
                    });
                }
            });

    }
    //if nothing was chosen return all
    //execute the query


};