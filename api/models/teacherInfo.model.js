const mongoose = require('mongoose');

const teacherInfoSchema = new mongoose.Schema({
  gradesInfo: {
    type: String
  },
  schoolsInfo: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'School'
      //required: true
    }
  ],
  generalInfo: {
    type: String
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

mongoose.model('TeacherInfo', teacherInfoSchema);
