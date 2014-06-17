exports = module.exports = function (mongoose) {
    return {
        Resource: require('./resource')('resource', mongoose)
    };
};
