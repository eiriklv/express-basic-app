var nodejsx = require('node-jsx').install();
var Landing = require('client/landing');
var helpers = require('helpers');

exports = module.exports = function(services) {
    return function(req, res, next) {
        var context = {
            title: 'Landing',
            description: 'App landing',
        };

        helpers.react.renderMarkupToString({
            component: Landing,
            clientScripts: ['/javascript/landing.js'],
            context: context,
            staticPage: true,
            callback: function(err, markup) {
                if (err) return next(err);
                res.send(markup);
            }
        });
    };
};
