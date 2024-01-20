const mongoose = require('mongoose')
const Schema = mongoose.Schema;

let clubSchema = new Schema({
    clubName: {
        type: String,
        required: true
    },
    country: {
        type: String,
        required: true
    },
    founded: Number,
    cupsWon: Number,
    players: String,
    coach: String
});

module.exports = mongoose.model('Club', clubSchema);