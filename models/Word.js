const mongoose = require('mongoose');

const wordSchema = new mongoose.Schema({
    id: { type: Number, required: true },
    ruName: { type: String, required: true },
    faName: { type: String, required: true },
    enDate: { type: String, required: true },
    faDate: { type: String, required: true },
    description: { type: String, required: true },
    imgSrc: { type: [String], required: false },
    videoSrc: { type: String, required: false },
});

module.exports = mongoose.model('Word', wordSchema);