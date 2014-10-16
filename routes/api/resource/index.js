exports = module.exports = function(express, middleware, handlers, path) {
    var router = express();

    router.use(middleware.isLoggedInAPI);

    router.route(path)
        .get(handlers.resource.get)
        .put(handlers.resource.edit)
        .post(handlers.resource.create)
        .delete(handlers.resource.remove);

    return router;
};
