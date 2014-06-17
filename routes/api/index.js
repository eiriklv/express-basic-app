exports = module.exports = function (app, express, middleware, handlers, path) {
    app.use(path, require('./resource')(express, middleware, handlers, '/resource'));
};