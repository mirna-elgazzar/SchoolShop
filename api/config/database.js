var mongoose = require('mongoose'),
    config = require('../config/Config'),
    dburl = config.MONGO_URI;

//mongoose.connect(dburl);

// CAPTURE APP TERMINATION / RESTART EVENTS
// To be called when process is restarted or terminated
var gracefulShutdown = function(callback) {
    mongoose.connection.close(function(err) {
        callback(err);
    });
};

// For nodemon restarts
process.once('SIGUSR2', function() {
    gracefulShutdown(function(err) {
        if (err) {
            return console.error(err);
        }
        console.log('nodemon restart');
        process.kill(process.pid, 'SIGUSR2');
    });
});

// For app termination
process.on('SIGINT', function() {
    gracefulShutdown(function(err) {
        if (err) {
            return console.error(err);
        }
        console.log('App termination (SIGINT)');
        process.exit(0);
    });
});

// For Heroku app termination
process.on('SIGTERM', function() {
    gracefulShutdown(function(err) {
        if (err) {
            return console.error(err);
        }
        console.log('App termination (SIGTERM)');
        process.exit(0);
    });
});

mongoose.connect(dburl, function(err) {
    if (!err) {
        return console.log('Successfully connected to the database');
    }
    console.error(err);
    gracefulShutdown(function(err) {
        if (err) {
            return console.error(err);
        }
        console.log('Could not connect to database');
        process.exit(0);
    });
});

/*mongoose.Promise = require('bluebird');
mongoose.connect(config.database, { promiseLibrary: require('bluebird') })
  .then(() =>  console.log('connection succesful'))
  .catch((err) => console.error(err));
*/

require('../models/user.model');
require('../models/school.model');
require('../models/schoolInfo.model');
require('../models/schoolReview.model');
require('../models/stationary.model');
require('../models/teacher.model');
require('../models/teacherInfo.model');
require('../models/teacherReview.model');
require('../models/stationeryReview.model');