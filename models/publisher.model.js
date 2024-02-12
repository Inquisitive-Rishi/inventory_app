
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const PublisherSchema = new Schema({
    name: { type: String, required: true },
    estd_date: { type: Date, default: Date.now }
})

module.exports = mongoose.model('Publisher', PublisherSchema)