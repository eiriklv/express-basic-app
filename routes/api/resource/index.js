var middleware = require('../../../middleware');
var handlers = require('../../../handlers').api;
var express = require('express');

exports = module.exports = function (path) {
    var router = express();

    router.route(path)
        .all(middleware.isLoggedInAPI)
        .get(handlers.resource.get)
        .put(handlers.resource.edit)
        .post(handlers.resource.create)
        .delete(handlers.resource.remove);

    return router;
};