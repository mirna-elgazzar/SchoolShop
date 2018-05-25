const mongoose = require('mongoose');

const stationeryReviewSchema = new mongoose.Schema({

    stationery_name: { type: String, required: true },

    user_name: { type: String },

    comment: { type: String },

    commentAvailable: { type: Boolean, default: false },

    rating: {
        type: Number,
        default: 0
    },

    language: { type: String },


    time_string: { type: String },

    //if user logged in:
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        //required: true
    },
    stationery: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Stationary',
        //required: true
    }

});

mongoose.model('StationeryReview', stationeryReviewSchema);