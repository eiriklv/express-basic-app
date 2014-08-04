exports = module.exports = function (collection, mongoose) {
    var schema = mongoose.Schema({
        author: {
            type: String, // this is the verified email used to contact the user (must be verified for local signup)
        },
        text: {
            type: String, // need validator for this (password strength - do this on frontend)
            required: true
        }
    });

    return mongoose.model(collection, schema);
};