var middleware = require('../../../middleware');
var handlers = require('../../../handlers').api;
var express = require('express');

exports = module.exports = function (path) {
    var router = express();

    router.route(path)
        .all(middleware.isLoggedInAPI)
        .get(handlers.comments.get)
        .put(handlers.comments.edit)
        .post(handlers.comments.create)
        .delete(handlers.comments.remove);

    return router;
};