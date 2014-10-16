exports = module.exports = function(mongoose) {
    return {
        Resource: require('./resource')('resource', mongoose),
        Comment: require('./comment')('comment', mongoose),
        Product: require('./product')('product', mongoose)
    };
};
