exports = module.exports = function (services) {
    return {
        home: require('./landing')(services),
        page1: require('./page1')(services),
        page2: require('./page2')(services)
    };
};