const mongoose = require('mongoose');

const teacherReviewSchema = new mongoose.Schema({
  comment: {
    type: String
  },
  rating: {
    type: Number,
    required: true
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  teacher: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Teacher',
    required: true
  },
  //yyyy-MM-ddTHH:mm:ssZ
  time: {
    type: Date,
    default: Date.now
  }
});

mongoose.model('TeacherReview', teacherReviewSchema);
