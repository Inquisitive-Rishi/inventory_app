const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const GameSchema = new Schema({
    title: { type: String, minLength: 1, maxLength: 100, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    genre: { type: Schema.Types.ObjectId, ref: "Genre", required: true },
    publisher: { type: Schema.Types.ObjectId, ref: "Publisher", required: true },
    release_date: { type: Date, default: Date.now }
})  

GameSchema.virtual('url').get(function() {
    return `/catalog/game/${this._id}`
})

module.exports = mongoose.model('Game', GameSchema)