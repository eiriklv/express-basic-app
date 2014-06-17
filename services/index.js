exports = module.exports = function (database, helpers) {
    return {
        resource: require('./resource')(database, helpers)
    };
};