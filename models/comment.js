var mongoose = require('mongoose');

var schema = mongoose.Schema({
    author: {
        type: String,
    },
    text: {
        type: String,
        required: true
    }
});

var model = mongoose.model('comment', schema);

module.exports = model;