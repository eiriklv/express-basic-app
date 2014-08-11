exports = module.exports = function (app, path) {
    app.use(path, require('./landing')('/'));
    app.use(path, require('./reactapp')('/reactapp'));
};