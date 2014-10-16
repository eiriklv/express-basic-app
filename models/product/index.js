exports = module.exports = function(collection, mongoose) {
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

    return mongoose.model(collection, schema);
};
