exports = module.exports = function (models, helpers) {
    return {
        resource: require('./resource')(models.Resource, helpers)
    };
};