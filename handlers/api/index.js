exports = module.exports = function (services) {
    return {
        resource: require('./resource')(services.resource)
    };
};