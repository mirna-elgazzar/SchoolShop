const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');


const stationarySchema = new mongoose.Schema({
    name: { type: String },

    website: { type: String },

    rating: { type: Number },

    email: [{ type: String }],

    phone_number: [{ type: String }],

    international_phone_number: [{ type: String }],

    address: { type: String },

    latitude: { type: String },

    longitude: { type: String },

    administrative_area_level_1: { type: String },

    administrative_area_level_3: { type: String },

    location: {
        address: String,
        city: String,
        // Always store coordinates longitude (East/West), latitude (North/South) order.
        coordinates: {
            type: [Number],
            index: '2dsphere'
        }
    },

    route: { type: String },

    country: { type: String },

    google_maps_url: { type: String },

    facebook_link: { type: String },

    instagram_link: { type: String },

    twitter_link: { type: String },

    pinterest_link: { type: String },

    about_us: { type: String },

    opening_hours: { type: String },

    stores: { type: String },

    contact_us: { type: String }

});



mongoose.model('Stationary', stationarySchema);