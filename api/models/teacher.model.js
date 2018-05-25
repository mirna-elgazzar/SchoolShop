const mongoose = require('mongoose');
var Schema = mongoose.Schema;
//const bcrypt = require('bcryptjs');

const teacherSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    lowercase: true,
    unique: true
  },
  schools: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'School'
    }
  ],
  /*
      0:N/A
      1: national
      2: IGCSE
      3: American
    */
  system: {
    type: Number,
    default: 0
  },
  birthDate: {
    type: Date
  },
  teacherReviews: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'TeacherReview'
    }
  ],
  totalRatings: {
    type: Number,
    default: 0
  },
  //extra info provided by parents:
  teacherInfos: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'TeacherInfo'
    }
  ],
  createdAt: {
    type: Date,
    default: Date.now
  },
  resetPasswordToken: String,
  resetPasswordTokenExpiry: Date
});

teacherSchema.statics.createUser = function(newUser, callback) {
  bcrypt.genSalt(10, function(err, salt) {
    if (err) callback(err, null);
    else {
      if (salt)
        bcrypt.hash(newUser.password, salt, function(err, hash) {
          if (err) callback(err, null);
          else {
            if (hash) {
              newUser.password = hash;
              newUser.save(callback(null, newUser));
            } else {
              callback(null, null);
            }
          }
        });
    }
  });
};

/*userSchema.statics.getUserByUsername = function (username, callback) {
	var query = {
		username: username
	};
	this.findOne(query, callback);
};


userSchema.statics.getUserById = function (id, callback) {
	this.findById(id, callback);
};


userSchema.statics.comparePassword = function (candidatePassword, hash, callback) {
	bcrypt.compare(candidatePassword, hash, function (err, isMatch) {
		callback(err, isMatch);
	});
};
*/
mongoose.model('Teacher', teacherSchema);
