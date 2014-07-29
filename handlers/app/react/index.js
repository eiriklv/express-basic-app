var url = require('url');
var ReactAsync = require('react-async');
var nodejsx = require('node-jsx').install();
var App = require('../../../client/javascript/app');

function renderReactMarkupToString(req, callback) {
    var path = url.parse(req.url).pathname;
    
    // application data (this has the same effect as handlebars context, except for react components)
    var app = App({
        path: path
    });

    // render the react markup to a string
    ReactAsync.renderComponentToStringWithAsyncState(app, function (err, markup) {
        callback(err, markup)
    });
}

exports = module.exports = function (services) {
    return function (req, res, next) {
        renderReactMarkupToString(req, function (err, markup) {
            if (err) return next(err);

            res.render('react', {
                reactOutput: markup
            });
        });
    };
};