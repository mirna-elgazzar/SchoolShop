const mongoose = require('mongoose');
var Schema = mongoose.Schema;

const userSchema = new mongoose.Schema({
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
  password: {
    type: String,
    required: true
  },
  birthDate: {
    type: Date
  },
  favorites: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'School'
    }
  ],

  schoolReviews: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'SchoolReview'
    }
  ],
  /*
	schoolInfos: [{
		type: mongoose.Schema.Types.ObjectId,
		ref: "SchoolInfo"
	}],
	teacherReviews: [{
		type: mongoose.Schema.Types.ObjectId,
		ref: "TeacherReview"
	}],
	teacherInfos: [{
		type: mongoose.Schema.Types.ObjectId,
		ref: "TeacherInfo"
	}],*/
  admin: {
    type: Boolean,
    default: false
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  resetPasswordToken: String,
  resetPasswordTokenExpiry: Date
});

/*userSchema.statics.createUser = function (newUser, callback) {
	bcrypt.genSalt(10, function (err, salt) {
		if (err)
			callback(err, null);
		else {
			if (salt)
				bcrypt.hash(newUser.password, salt, function (err, hash) {
					if (err)
						callback(err, null);
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
*/

userSchema.statics.getUserByUsername = function(username, callback) {
  var query = {
    username: username
  };
  this.findOne(query, callback);
};

userSchema.statics.getUserById = function(id, callback) {
  this.findById(id, callback);
};

/*userSchema.statics.comparePassword = function (candidatePassword, hash, callback) {
	bcrypt.compare(candidatePassword, hash, function (err, isMatch) {
		callback(err, isMatch);
	});
};
*/
mongoose.model('User', userSchema);
