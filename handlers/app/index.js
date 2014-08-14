exports = module.exports = function (services, helpers) {
    return {
        landing: require('./landing')(services, helpers),
        home: require('./home')(services, helpers)
    };
};