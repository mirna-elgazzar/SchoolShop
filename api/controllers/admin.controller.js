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

module.exports.addSchool = function(req, res) {};
module.exports.editSchool = function(req, res) {};

/*
    Delete function that deletes a school notifies it.
    Takes:
        params{
            schoolId
        }
    Returns: Success or failure messages along with errors in case of failure.
    Redirects to: Nothing.
    Calling Route: '/api/admin/school/delete/:schoolId'
*/
module.exports.deleteSchool = function(req, res) {
  School.findByIdAndRemove(req.params.schoolId, function(err, school) {
    if (err) {
      res.status(500).json({
        error: err,
        msg: null,
        data: null
      });
    } else {
      if (school) {
        var text =
          'Hello ' +
          school.name +
          ',\n\nUnfortunately, your school was removed from School Shop.\n\nThank you for considering School Shop.';
        var subject = 'School page deleted';

        emailSender.sendEmail(subject, school.email, text, null, function(
          err,
          info
        ) {
          if (err) {
            res.status(500).json({
              error: null,
              msg: 'School was deleted, however the school was not notified.',
              data: null
            });
          } else {
            res.status(200).json({
              error: null,
              msg: 'School was deleted and notified.',
              data: null
            });
          }
        });
      } else
        res.status(404).json({
          error: null,
          msg: 'School not found.',
          data: null
        });
    }
  });
};

module.exports.addTeacher = function(req, res) {
  //get values from post request
  var firstName = req.body.firstName;
  var lastName = req.body.lastName;
  var email = req.body.email;
  var system = req.body.system;
  var birthDate = req.body.birthDate;

  //Validating entries
  req.checkBody('firstName', 'first name is required.').notEmpty();
  req.checkBody('lastName', 'last name is required.').notEmpty();
  req.checkBody('email', 'email is required.').notEmpty();

  var errors = req.validationErrors();

  if (errors) {
    res.status(500).json({
      error: errors,
      msg: null,
      data: null
    });
  } else {
    //creates a new Review object with the values from the post request
    const newTeacher = new Teacher({
      firstName: firstName,
      lastName: lastName,
      email: email,
      system: system,
      birthDate: birthDate
    });
    //saves the new review in the database
    newTeacher.save(function(err, teacher) {
      //if an error occurred, return an error
      if (err)
        return res.status(500).json({
          error: err,
          msg: 'There was a problem adding the information to the database',
          data: null
        });
      else {
        res.status(200).json({
          error: null,
          msg: 'teacher saved Successfully',
          data: null
        });
      }
    });
  }
};
module.exports.editTeacher = function(req, res) {};

/*
    Delete function that deletes a school notifies it.
    Takes:
        params{
            schoolId
        }
    Returns: Success or failure messages along with errors in case of failure.
    Redirects to: Nothing.
    Calling Route: '/api/admin/school/delete/:schoolId'
*/
module.exports.deleteTeacher = function(req, res) {
  Teacher.findByIdAndRemove(req.params.teacherId, function(err, teacher) {
    if (err) {
      res.status(500).json({
        error: err,
        msg: null,
        data: null
      });
    } else {
      if (teacher) {
        var text =
          'Hello ' +
          teacher.name +
          ',\n\nUnfortunately, you were removed from School Shop.\n\nThank you for considering School Shop.';
        var subject = 'teacher page deleted';

        emailSender.sendEmail(subject, teacher.email, text, null, function(
          err,
          info
        ) {
          if (err) {
            res.status(500).json({
              error: null,
              msg: 'teacher was deleted, however he/she was not notified.',
              data: null
            });
          } else {
            res.status(200).json({
              error: null,
              msg: 'teacher was deleted and notified.',
              data: null
            });
          }
        });
      } else
        res.status(404).json({
          error: null,
          msg: 'teacher not found.',
          data: null
        });
    }
  });
};

module.exports.addStationary = function(req, res) {};
module.exports.editStationary = function(req, res) {};
module.exports.deleteStationary = function(req, res) {};
