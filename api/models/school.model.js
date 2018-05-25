const mongoose = require('mongoose');
//const bcrypt = require('bcryptjs');
//var bcrypt = require('bcryptjs');

const schoolSchema = new mongoose.Schema({
    name: { type: String, required: true },

    website: { type: String },

    rating: { type: String },

    email: { type: String, lowercase: true },

    phoneNumbers: [{ type: String }],

    internationalPhoneNumbers: [{ type: String }],

    address: { type: String },

    latitude: { type: String },

    longitude: { type: String },

    administrativeArea1: { type: String },

    administrativeArea2: { type: String },

    route: { type: String },

    country: { type: String },

    googleMapsUrl: { type: String },

    facebook: { type: String },

    youtube: { type: String },

    linkedin: { type: String },

    instagram: { type: String },

    twitter: { type: String },

    admission: { type: String },

    aboutUs: { type: String },

    missionVision: { type: String },

    fascilities: { type: String },

    fees: { type: String },

    supplies: { type: String },

    city: { type: String },


    location: {
        address: String,
        city: String,
        // Always store coordinates longitude (East/West), latitude (North/South) order.
        coordinates: {
            type: [Number],
            index: '2dsphere'
        }
    },
    average: { type: Number },

    totalReviews: { type: Number, default: 0 },

    profilePicture: { type: Boolean, default: false },

    numPhotos: { type: Number },

    accreditation: { type: String },

    activities: { type: String },

    IGCSE: { type: Boolean, default: false },
    IB: { type: Boolean, default: false },
    BAC: { type: Boolean, default: false },
    ABITUR: { type: Boolean, default: false },
    AMERICAN: { type: Boolean, default: false },

    certificates: [{ type: String }],

    fascilities: [{ type: String }],

    reviews: [{ type: mongoose.Schema.Types.ObjectId, ref: 'SchoolReview' }],

    schoolInfo: [{ type: mongoose.Schema.Types.ObjectId, ref: 'SchoolInfo' }], //the extra info that the parents provide:

    totalRatings: { type: Number, default: 0 }, //fatma: string

    photos: [{ type: String }],

    logo: { type: String },

    verified: { type: Boolean, default: false },

    createdAt: { type: Date, default: Date.now },

    resetPasswordToken: String,
    resetPasswordTokenExpiry: Date
});

//Helper function to get a business by its id
schoolSchema.statics.getSchoolById = function(id, callback) {
    this.findById(id, callback);
};

//Helper function to get a business by its email
/*businessSchema.statics.getBusinessByEmail = function (email, callback) {
    var query = {
        email: email
    };
    this.findOne(query, callback);
};
*/

mongoose.model('School', schoolSchema);