const mongoose = require('mongoose');

//MOVIE SCHEMA
const movieSchema = new mongoose.Schema({
    name: {
        type: String,
        required: 'This is required',
    },
    description: {
        type: String,
        required: true,
    },
    category: {
        type: Array,
        required: true,
    },
    thumbnail: {
        type: String,
        required: true,
    }
});

module.exports = mongoose.model('Movie', movieSchema);