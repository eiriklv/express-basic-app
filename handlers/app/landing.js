var nodejsx = require('node-jsx').install();
var Landing = require('../../client/javascript/landing');

var helpers = require('../../helpers')();
var services = require('../../services');

exports = module.exports = function (req, res, next) {
    var context = {
        title: 'Landing',
        description: 'App landing',
    };

    helpers.react.renderMarkupToString({
        component: Landing,
        clientScripts: ['/javascript/landing.js'],
        context: context,
        staticPage: true,
        callback: function (err, markup) {
            if (err) return next(err);
            res.send(markup);
        }
    });
};