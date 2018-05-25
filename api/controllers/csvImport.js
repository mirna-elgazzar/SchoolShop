var express = require('express');
var csv = require("fast-csv");
var router = express.Router();
var fs = require('fs');
//var csvfile = require('../public/files/General_Reviews.csv');
var mongoose = require('mongoose');


const School = mongoose.model('School');
const SchoolReview = mongoose.model('SchoolReview');
const Stationary = mongoose.model('Stationary');
const StationeryReview = mongoose.model('StationeryReview');

var csvfile = __dirname + '/../../public/files/Dokki.csv';
var stream = fs.createReadStream(csvfile);

var schoolRes = "";
var id = "";
var total = 0;
var totalRating = 0;
var averageRating = 0;

var csvImport = {

    importCSVSchools: function(req, res) {
        var schools = []
        var csvStream = csv()
            .on("data", function(data) {


                var item = new School({

                    name: data[0],

                    website: data[1],

                    average: parseFloat(data[2]),

                    rating: data[2],

                    email: data[3],

                    phoneNumbers: data[4],

                    internationalPhoneNumbers: data[5],

                    address: data[6],

                    latitude: data[7],

                    longitude: data[8],

                    administrativeArea1: data[9],

                    administrativeArea2: data[10],

                    route: data[11],

                    country: data[12],

                    googleMapsUrl: data[13],

                    facebook: data[14],

                    youtube: data[15],

                    linkedin: data[16],

                    instagram: data[17],

                    twitter: data[18],

                    admission: data[19],

                    aboutUs: data[20],

                    accreditation: data[21],

                    activities: data[22],

                    missionVision: data[23],

                    facilities: data[24],

                    fees: data[25],

                    city: "Dokki",

                    IGCSE: data[26],
                    IB: data[27],
                    BAC: data[28],
                    AMERICAN: data[29],
                    ABITUR: data[30],

                    location: {
                        address: data[6],
                        city: "Dokki",
                        coordinates: [parseFloat(data[8]), parseFloat(data[7])]
                    },

                    supplies: data[31]


                });

                item.save(function(error, item) {
                    if (error) {
                        /*return res.status(500).json({
                            error: error,
                            msg: 'There was a problem adding the information to the database',
                            data: null
                        });*/
                        console.log(error);
                    } else
                        console.log(item);
                    //   if(error){
                    //        throw error;
                    //   }
                });

            }).on("end", function() {

            });

        stream.pipe(csvStream);
        res.json({ success: "Data imported successfully.", status: 200 });


    },
    importCSVReviews: function(req, res) {
        var reviews = []
        var csvStream = csv()
            .on("data", function(data) {



                var item = new SchoolReview({

                    school_name: data[0],

                    user_name: data[1],

                    comment: data[2],

                    userReview: false,

                    commentAvailable: true,

                    rating: data[3],

                    language: data[4],

                    time_string: data[5],

                });
                //saves the new review in the database
                item.save(function(err, item) {
                    //if an error occurred, return an error
                    if (err)
                        return res.status(500).json({
                            error: err,
                            msg: 'There was a problem adding the review to the database',
                            data: null
                        });
                    console.log(item);

                });


            }).on("end", function() {

            });

        stream.pipe(csvStream);
        res.json({ success: "Data imported successfully.", status: 200 });

    },
    importCSVStationary: function(req, res) {
        var stationary = []
        var csvStream = csv()
            .on("data", function(data) {


                var item = new Stationary({
                    name: data[0],

                    website: data[1],

                    rating: parseFloat(data[2]),

                    email: data[3],

                    phone_number: data[4],

                    international_phone_number: data[5],

                    address: data[6],

                    latitude: data[7],

                    longitude: data[8],

                    location: {
                        address: data[6],
                        city: "Newcairo",
                        coordinates: [parseFloat(data[8]), parseFloat(data[7])]
                    },

                    administrative_area_level_1: data[9],

                    administrative_area_level_3: data[10],

                    route: data[11],

                    country: data[12],

                    google_maps_url: data[13],

                    opening_hours: data[14],

                    about_us: data[15],

                    stores: data[16],

                    facebook_link: data[17],

                    twitter_link: data[18],

                    instagram_link: data[19],

                    pinterest_link: data[20],

                    contact_us: data[21]
                });

                item.save(function(error) {
                    console.log(item);
                });

            }).on("end", function() {

            });

        stream.pipe(csvStream);
        res.json({ success: "Data imported successfully.", status: 200 });


    },
    importCSVStationeryReviews: function(req, res) {
        var stationeryReviews = []
        var csvStream = csv()
            .on("data", function(data) {

                var item = new StationeryReview({

                    stationery_name: data[0],

                    user_name: data[1],

                    comment: data[2],

                    commentAvailable: true,

                    rating: parseFloat(data[3]),

                    language: data[4],

                    time_string: data[5],

                });

                item.save(function(err, item) {
                    if (err) {
                        return res.status(500).json({
                            error: err,
                            msg: 'There was a problem adding the stationery review to the database',
                            data: null
                        });
                    } else
                        console.log(item);
                });

            }).on("end", function() {

            });

        stream.pipe(csvStream);
        //res.json({ success: "Data imported successfully.", status: 200 });

    },
    addCertificates: function(req, res) {
        School.find({}, function(err, schools) {
            for (var i = 0; i < schools.length; i++) {
                if (schools[i].IB == true) {
                    schools[i].certificates = schools[i].certificates.concat(['IB']);
                }
                if (schools[i].IGCSE == true) {
                    schools[i].certificates = schools[i].certificates.concat(['IGCSE']);
                }
                if (schools[i].ABITUR == true) {
                    schools[i].certificates = schools[i].certificates.concat(['ABITUR']);
                }
                if (schools[i].AMERICAN == true) {
                    schools[i].certificates = schools[i].certificates.concat(['AMERICAN']);
                }
                if (schools[i].BAC == true) {
                    schools[i].certificates = schools[i].certificates.concat(['BAC']);
                }
                schools[i].save(function(err, sc) {
                    if (err)
                        cb(err, "ERROR", "ERROR");

                });

            }
        })
        res.json({ success: "Data imported successfully.", status: 200 });
    },
    setProfilePic: function(req, res) {
        var schools = []
        var csvStream = csv()
            .on("data", function(data) {

                School.findOne({ name: data[0] }, function(err, school) {
                    if (school != null) {
                        school.profilePicture = data[1]
                        school.save(function(err, sc) {
                            if (err)
                                cb(err, "ERROR", "ERROR");

                        });
                    } else {
                        console.log('no school found');
                    }


                });

            }).on("end", function() {

            });
        stream.pipe(csvStream);
        res.json({ success: "Data imported successfully.", status: 200 });


    },
    test: function(req, res) {
        const dir = __dirname + '/../../src/assets/img/gallery';

        School.find({}, function(err, schools) {
            fs.readdir(dir, (err, files) => {
                setBoolean(schools, files);
            })

        });

        function setBoolean(schools, files) {
            for (var i = 0; i < schools.length; i++) {
                if (files.includes(schools[i].name)) {

                    schools[i].profilePicture = true;
                    schools[i].save(function(err, sc) {
                        if (err)
                            cb(err, "ERROR", "ERROR");

                    });
                    getPhotos(schools[i], files);


                } else {
                    schools[i].profilePicture = false;
                    schools[i].numPhotos = 0;
                    schools[i].save(function(err, sc) {
                        if (err)
                            cb(err, "ERROR", "ERROR");

                    });
                }
            }
        }

        function getPhotos(school, files) {
            fs.readdir(dir + '/' + school.name, (err, photos) => {
                setNumber(school, photos);
            })
        }

        function setNumber(school, photos) {
            school.numPhotos = photos.length - 1;
            school.save(function(err, sc) {
                if (err)
                    cb(err, "ERROR", "ERROR");

            });
        }

        res.json({ success: "success", status: 200 });
    }

}
module.exports = csvImport;