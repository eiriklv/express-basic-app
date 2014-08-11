var config = require('../config');

exports = module.exports = function (app) {
    require('./app')(app, '/');
    require('./api')(app, config.get('client.api.path'));
};