require('./api/config/database');
//The requires import an object (module.exports) from another file or module:

const express = require('express'); //It imports the framework into your app.
const expressValidator = require('express-validator');
const cors = require('cors');
const morgan = require('morgan');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
const hbs = require('express-handlebars');
const moment = require('moment');
var cons = require('consolidate');
var bodyParser = require('body-parser'); //It will add a body object to your request so that you can access POST parameters.
var mongoose = require('mongoose');
var passport = require('passport');
var config = require('./api/config/Config');
var app = express();

//Enable IP Address Getting
app.enable('trust proxy');

//VIEW ENGINE SETUP:
app.engine('html', cons.swig)
app.set('views', path.join(__dirname, 'src'));
app.set('view engine', 'html');

app.use(bodyParser.json()); //makes the app parse json when you're sending data in JSON format
app.use(bodyParser.urlencoded({ extended: false })); //allows your app to read data from URLs (GET requests).

// Express Validator
app.use(
    expressValidator({
        errorFormatter: function(param, msg, value) {
            var namespace = param.split('.'),
                root = namespace.shift(),
                formParam = root;

            while (namespace.length) {
                formParam += '[' + namespace.shift() + ']';
            }
            return {
                param: formParam,
                msg: msg,
                value: value
            };
        }
    })
);

//Set the secret of the app that will be used in authentication
app.set('secret', config.SECRET);


//app.use() tells the app to use the parameters (unction or a path and a function) you're giving it:

app.use(logger('dev')); //logs info about requests (method, status code, response time) to the console

app.use(express.static(path.join(__dirname, 'public'))); //tells your app to use the /public directory where you store images, stylesheets and scripts.
app.use(express.static(path.join(__dirname, '/src')));
app.use(express.static(path.join(__dirname, '/src')));
//app.use('/', express.static(path.join(__dirname, 'public')));
app.use(cors());

//ROUTING:
var routes = require('./api/routes/index');
app.use('/api', routes);

// Middleware to handle any (500 Internal server error) that may occur while doing database related functions
app.use(function(err, req, res, next) {
    if (err.statusCode === 404) return next();

    res.status(500).json({
        // Never leak the stack trace of the err if running in production mode
        err: process.env.NODE_ENV === 'production' ? null : err,
        msg: '500 Internal Server Error',
        data: null
    });
});

app.use(function(req, res, next) {
    //to always give back the angular application
    res.render('index');
});

/* 
  Middleware to handle any (404 Not Found) error that may occur if the request didn't find
  a matching route on our server, or the requested data could not be found in the database
*/
/*app.use(function(req, res) {
    res.status(404).json({
        err: null,
        msg: '404 Not Found mizo',
        data: null
    });
});*/

app.route('/*', function(req, res) {
    res.redirect(__dirname + '/src/index.html')
})


/*app.use(function(req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});*/
//ERRORS:
/*
// catch 404 and forward to error handler
//Once the request doesn't match any of the routes, it will reach the following function.
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
//If we're in development mode (app.get('env') ) we do want to print the stack trace. 
//In any other case we just want to show the user the error.
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});


if (app.get('env') === 'development') {  
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

app.use(function(err, req, res, next) {  
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});*/

/*Require function makes use of the module.exports! 
When you want to use some variables or functions from another file, you attach them to the module.exports.*/
module.exports = app;