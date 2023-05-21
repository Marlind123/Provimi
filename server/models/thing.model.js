const mongoose = require('mongoose');


const Thing = new mongoose.Schema({
    thing: { type: String },
    likes: { type: Number },
}, { timestamps: true });

const Things= mongoose.model('Things', Thing);
module.exports = Things

