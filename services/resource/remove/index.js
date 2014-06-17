exports = module.exports = function (database, helpers) {
    return function (body, callback) {
        // do some db operation before calling back with results
        // (see https://github.com/felixge/node-mysql)
        callback(null, body);
    };
};