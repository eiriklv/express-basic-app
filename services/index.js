exports = module.exports = function(models) {
    return {
        resource: require('./resource')(models.Resource),
        comments: require('./comment')(models.Comment)
    };
};
