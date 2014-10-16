exports = module.exports = function(express, middleware, handlers, path) {
    var router = express();

    router.use(middleware.isLoggedInAPI);

    router.route(path)
        .get(handlers.comments.get)
        .put(handlers.comments.edit)
        .post(handlers.comments.create)
        .delete(handlers.comments.remove);

    return router;
};
