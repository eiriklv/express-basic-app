exports = module.exports = function(services) {
    return {
        landing: require('./landing')(services),
        home: require('./home')(services)
    };
};
