var middleware = require('../../../middleware');
var handlers = require('../../../handlers').app;
var express = require('express');

exports = module.exports = function (path) {
    var router = express();

    router.route(path)
        .all(middleware.isLoggedIn)
        .get(handlers.home);

    return router;
};