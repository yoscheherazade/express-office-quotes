const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const model = mongoose.model.bind(mongoose);
const ObjectId = mongoose.Schema.Types.ObjectId;

const quoteSchema = new Schema({
    _id: ObjectId,
    quote: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    season: Number,
    episode: Number,
    author_image: String,
    
});

const Quote = model('Quote', quoteSchema);

module.exports = { Quote };