exports = module.exports = function(models, helpers) {
    return {
        resource: require('./resource')(models.Resource, helpers),
        comments: require('./comment')(models.Comment, helpers)
    };
};
