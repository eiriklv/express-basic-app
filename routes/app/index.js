exports = module.exports = function (app, express, middleware, handlers, path) {
    app.use(path, require('./landing')(express, middleware, handlers, '/'));
    app.use(path, require('./page1')(express, middleware, handlers, '/page1'));
    app.use(path, require('./page2')(express, middleware, handlers, '/page2'));
    app.use(path, require('./reactapp')(express, middleware, handlers, '/reactapp'));
};