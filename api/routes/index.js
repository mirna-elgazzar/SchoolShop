var express = require('express');
var router = express.Router();
var jwt = require('jsonwebtoken');
var fs = require('fs');
var csv = require("fast-csv");
var csvImport = require('../controllers/csvImport');
var userCtrl = require('../controllers/user.controller');
var userCtrl = require('../controllers/user.controller');
var schoolCtrl = require('../controllers/school.controller');
var searchCtrl = require('../controllers/search.controller');
const reviewCtrl = require('../controllers/review.controller');
const adminCtrl = require('../controllers/admin.controller');
const passwordCtrl = require('../controllers/password.controller');
var stationaryCtrl = require('../controllers/stationary.controller');
const expressJwt = require('express-jwt');
const secret = require('../config/Config').SECRET;


//MIDDLEWARE functions are functions that have access to the request object (req), the response object (res),
//and the next function in the application’s request-response cycle.

/*
We’re going to use this function as a middleware to check if a token exists and whether it is valid. 
After validating it, we add the decoded.id value to the request (req) variable. 
We now have access to it in the NEXT function in line in the request-response cycle.*/

var isAuthenticated = function(req, res, next) {
    // Check that the request has the JWT in the authorization header
    var token = req.headers['authorization']; //['x-access-token']
    //if no token is found--> not signed in
    if (!token) {
        return res.status(401).json({
            error: null,
            msg: 'You have to login first.',
            data: null
        });
    }
    //if token found:
    // Verify that the JWT is created using our server secret and that it hasn't expired yet
    console.log(token);
    jwt.verify(token, secret, function(err, decodedToken) {
        if (err) {
            return res.status(401).json({
                error: err,
                msg: 'Login timed out, please login again.',
                data: null
            });
        }
        req.decodedToken = decodedToken;
        req.userId = decodedToken.user._id; //we add the decoded.id value to the request (req) variable.
        next();
    });

};

var isNotAuthenticated = function(req, res, next) {
    // Check that the request doesn't have the JWT in the authorization header
    var token = req.headers['authorization'];
    if (token) {
        return res.status(403).json({
            error: null,
            msg: 'You are already logged in.',
            data: null
        });
    }
    next();
};

// add the middleware function
router.use(function(user, req, res, next) {
    res.status(200).send(user);
});


router.get('/importSchools', csvImport.importCSVSchools);
router.get('/importReviews', csvImport.importCSVReviews);
router.get('/importStationary', csvImport.importCSVStationary);
router.get('/importStationaryReviews', csvImport.importCSVStationeryReviews);
router.get('/addCertificates', csvImport.addCertificates);
router.get('/profilePictures', csvImport.test);



//test authentication:
router.route('/authenticate').get(isAuthenticated, userCtrl.authenticate);

//---------------------------------------------------------------------------------------------------------------//
//router.route('/me').get(userCtrl.currentUser);

// (1) NOT LOGGED IN ONLY ROUTES:
router.route('/user/login').post(isNotAuthenticated, userCtrl.login); //TESTED
router.route('/user/register').post(isNotAuthenticated, userCtrl.register); //TESTED
//router.route('/user/verifyAccount/:token').get(isNotAuthenticated, userCtrl.checkVerificationToken);
//router.route('/user/verifyAccount/:userId').post(isNotAuthenticated, userCtrl.confirmVerification);
//router.route('/user/resendVerification').post(isNotAuthenticated, userCtrl.resendVerification);
//router.route('/resetPassword/:token').get(isNotAuthenticated, passwordCtrl.checkResetPasswordToken);
//router.route('/resetPassword/:id').put(isNotAuthenticated, passwordCtrl.resetPassword);
//router.route('/forgotPassword').post(isNotAuthenticated, passwordCtrl.forgotPassword);

// (2) AVAILABLE TO ALL ROUTES: 
router.route('/users').get(userCtrl.getUsers); //TESTED
router.route('/school/system/:system').get(schoolCtrl.getSchoolsBySystem);

router.route('/schools/sort/:sort').get(schoolCtrl.getSchools);
router.route('/school/:schoolId').get(schoolCtrl.getSchool); //TESTED
router.route('/search').get(searchCtrl.searchByName, searchCtrl.searchByLocation);
router.route('/searchLocation').get(searchCtrl.searchByLocation);
router.route('/school/:schoolId/getInfo').get(schoolCtrl.getCurrentInfo);


router.route('/user/profile/:userId').get(userCtrl.getOneUser);
router.route('/school/review/user/:userId').get(reviewCtrl.getUserSchoolReviews); //TESTED
router.route('/school/review/averageRating/:schoolName').get(reviewCtrl.schoolAverage); // to be tested
router.route('/school/review/:schoolName').get(reviewCtrl.getSchoolReviews);
router.route('/school/review/analyzeRating/:schoolName').get(reviewCtrl.analyzeRating);
router.route('/currentUser').get(isAuthenticated, userCtrl.currentUser);

router.route('/stationary/:stationaryId/getInfo').get(stationaryCtrl.getCurrentInfo);
router.route('/stationary/review/:stationeryName').get(stationaryCtrl.getStationeryReviews);
router.route('/stationary/review/averageRating/:stationeryName').get(stationaryCtrl.stationaryAverage);
router.route('/stationary/location/search').get(stationaryCtrl.getStationaryLocation);
router.route('/stationary').get(stationaryCtrl.getStationary); //TESTED


// (3) AVAILABLE TO LOGGED IN ONLY ROUTES:
//Every time you need to authorize a user you can add the middleware (isAuthenticated) function to the chain:
//User routes
router.route('/user/logout').get(isAuthenticated, userCtrl.logout);
router.route('/user/me').get(isAuthenticated, userCtrl.currentUser); //TESTED
//router.route('/user/changePassword').put(isAuthenticated, userCtrl.changePassword);
//router.route('/user/deleteAccount').delete(isAuthenticated, userCtrl.deleteAccount);

router.route('/user/isFavorite/:schoolId').put(isAuthenticated, userCtrl.isFavorite); //TESTED
router.route('/user/addFavorite/:schoolId').put(isAuthenticated, userCtrl.addFavorite); //TESTED
router.route('/user/deleteFavorite/:schoolId').delete(isAuthenticated, userCtrl.deleteFavorite); //TESTED
router.route('/user/sendEmail').put(userCtrl.sendEmail); //TESTED

//User review routes:
//school:
router.route('/school/review/:schoolId/add').post(reviewCtrl.addSchoolReview); //TESTED
router.route('/school/userReview/:schoolId/add').post(isAuthenticated, reviewCtrl.addUserSchoolReview); //TESTED
router.route('/school/review/:schoolId/edit').put(isAuthenticated, reviewCtrl.editSchoolReview); //TESTED
router.route('/school/review/:schoolReviewId/delete').delete(isAuthenticated, reviewCtrl.deleteSchoolReview); //problem deleting review from school
router.route('/school/review/isReviewed/:schoolId').get(isAuthenticated, userCtrl.isReviewed); //TESTED
router.route('/school/review/userReview/:schoolId').get(isAuthenticated, reviewCtrl.getUserSchoolReview); //TESTED 

// (4) ADMIN ROUTES
//router.route('/admin/school/verify/:schoolId').put(passportConfig.isAdminLoggedIn, adminCtrl.verifySchool);
//router.route('/admin/school/add/:schoolId').delete(passportConfig.isAdminLoggedIn, adminCtrl.addSchool);
//router.route('/admin/school/edit/:schoolId').delete(passportConfig.isAdminLoggedIn, adminCtrl.editSchool);
//router.route('/admin/school/delete/:schoolId').delete(passportConfig.isAdminLoggedIn, adminCtrl.deleteSchool);  //to be tested

//router.route('/admin/business/recoverAccount/:businessId').put(passportConfig.isAdminLoggedIn, adminCtrl.recoverBusiness);
//router.route('/admin/business/unVerifiedBusinesses').get(passportConfig.isAdminLoggedIn, adminCtrl.unVerifiedBusinesses);
//router.route('/admin/makeAdmin/:userId').put(passportConfig.isAdminLoggedIn, adminCtrl.makeAdmin);
//router.route('/admin/removeAdmin/:userId').put(passportConfig.isAdminLoggedIn, adminCtrl.removeAdmin);
//router.route('/admin/user/delete/:userId').delete(passportConfig.isAdminLoggedIn, adminCtrl.deleteUser);
//router.route('/admin/support/user/recoverAccount/:requestId').put(passportConfig.isAdminLoggedIn, adminCtrl.recoverUser);
//router.route('/admin/support/business/recoverAccount/:requestId').put(passportConfig.isAdminLoggedIn, adminCtrl.recoverBusiness);
//router.route('/admin/support/deleteRequest/:requestId').delete(passportConfig.isAdminLoggedIn, adminCtrl.deleteSupportRequest);

//const userCtrl = require('../controllers/user.controller');
//const schoolReviewCtrl = require('../controllers/schoolReview.controller');
//const schoolCtrl = require('../controllers/school.controller');
//const profileCtrl = require('../controllers/profile.controller.js');

//const supportCtrl = require('../controllers/support.controller');
//const imagesCtrl = require("../controllers/images.controller");*/

module.exports = router;