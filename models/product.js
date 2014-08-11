var mongoose = require('mongoose');

var schema = mongoose.Schema({
    category: {
        type: String,
        required: true
    },
    price: {
        type: String,
        required: true
    },
    stocked: {
        type: Boolean,
        default: true
    },
    name: {
        type: String,
        required: true
    }
});

var model = mongoose.model('product', schema);

module.exports = model;
