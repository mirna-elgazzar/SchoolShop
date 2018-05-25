const mongoose = require('mongoose');

const schoolInfoSchema = new mongoose.Schema({
  feesInfo: {
    type: String
  },
  servicesInfo: {
    type: String
  },
  generalInfo: {
    type: String
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  school: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'School',
    required: true
  },
  //yyyy-MM-ddTHH:mm:ssZ
  time: {
    type: Date,
    default: Date.now
  }
});

mongoose.model('SchoolInfo', schoolInfoSchema);
