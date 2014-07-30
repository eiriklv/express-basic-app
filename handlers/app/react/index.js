var url = require('url');
var ReactAsync = require('react-async');
var nodejsx = require('node-jsx').install();
var App = require('../../../client/javascript/app');

function renderReactMarkupToString(req, callback) {
    var path = url.parse(req.url).pathname;
    
    // application data (this has the same effect as handlebars context, except for react components)
    var app = App({
        message: '- this is sent in statically from the server -',
        title: 'Page Title',
        description: 'Page Description',
        user: {
            name: 'Some user',
            token: '12345678ADSfghjkll'
        }
    });

    // render the react markup to a string
    ReactAsync.renderComponentToStringWithAsyncState(app, function (err, markup, data) {
        callback(err, markup, data);
    });
}

exports = module.exports = function (services) {
    return function (req, res, next) {
        renderReactMarkupToString(req, function (err, markup, data) {
            if (err) return next(err);

            /*
            console.log(markup);
            console.log(data);
            console.log(ReactAsync.injectIntoMarkup(markup, data, ['/javascript/app.js']))
            */

            res.send(ReactAsync.injectIntoMarkup(markup, data, ['/javascript/app.js']))
            
            /*
            res.render('react', {
                reactMarkup: markup,
                reactData: data
            });
            */
            
        });
    };
};