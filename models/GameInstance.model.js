const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const GameInstanceSchema = new Schema({
    game: { type: Schema.Types.ObjectId, ref: "Game", required: true },
    status: {
        type: String,
        required: true,
        enum: ["Available", "Loaned", "Reserved", "Coming Soon"],
        default: "Available"
    },
    due_back: { type: Date, default: Date.now }
})

GameInstanceSchema.virtual('url').get(function() {
    return `/catalog/gameinstance/${this._id}`
})

module.exports = mongoose.model('GameInstance', GameInstanceSchema)