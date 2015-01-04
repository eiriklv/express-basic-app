var express = require('express');
var config = require('config');

exports = module.exports = function(app, middleware, handlers) {
    require('./app')(app, express, middleware, handlers.app, '/');
    require('./api')(app, express, middleware, handlers.api, config.get('client.api.path'));
};
