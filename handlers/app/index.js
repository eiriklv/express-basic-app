exports = module.exports = function (services, helpers) {
    return {
        home: require('./landing')(services, helpers),
        home: require('./home')(services, helpers)
    };
};