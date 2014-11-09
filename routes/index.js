var express = require('express');

exports = module.exports = function(app, middleware, handlers, config) {
    require('./app')(app, express, middleware, handlers.app, '/');
    require('./api')(app, express, middleware, handlers.api, config.get('client.api.path'));
};
