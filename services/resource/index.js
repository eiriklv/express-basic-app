exports = module.exports = function (database, helpers) {
    return {
        get: require('./get')(database, helpers),
        remove: require('./remove')(database, helpers),
        create: require('./create')(database, helpers),
        edit: require('./edit')(database, helpers)
    };
};