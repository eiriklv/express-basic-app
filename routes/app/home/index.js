exports = module.exports = function(express, middleware, handlers, path) {
    var router = express();

    router.use(middleware.isLoggedIn);

    router.route(path)
        .get(handlers.home);

    return router;
};
