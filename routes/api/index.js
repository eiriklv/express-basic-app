exports = module.exports = function (app, path) {
    app.use(path, require('./resource')('/resource'));
    app.use(path, require('./comments')('/comments'));
};