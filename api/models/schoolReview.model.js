const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({

    school_name: { type: String, required: true },

    user_name: { type: String },

    comment: { type: String },

    commentAvailable: { type: Boolean, default: false },

    userReview: { type: Boolean, default: false },

    rating: {
        type: String
            //required: true
    },

    language: { type: String },


    time_string: { type: String },

    time: {
        type: Date
    },


    //if user logged in:
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        //required: true
    },
    school: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'School',
        //required: true
    }

    //yyyy-MM-ddTHH:mm:ssZ

});

mongoose.model('SchoolReview', reviewSchema);