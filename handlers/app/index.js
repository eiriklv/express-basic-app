exports = module.exports = function (services, helpers) {
    return {
        home: require('./landing')(services, helpers),
        reactapp: require('./reactapp')(services, helpers)
    };
};