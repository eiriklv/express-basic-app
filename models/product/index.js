exports = module.exports = function (collection, mongoose) {
    var schema = mongoose.Schema({
        category: {
            type: String, // this is the verified email used to contact the user (must be verified for local signup)
            required: true
        },
        price: {
            type: String, // this is the verified email used to contact the user (must be verified for local signup)
            required: true
        },
        stocked: {
            type: Boolean,
            default: true
        },
        name: {
            type: String, // need validator for this (password strength - do this on frontend)
            required: true
        }
    });

    return mongoose.model(collection, schema);
};
