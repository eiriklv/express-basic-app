var _ = require('highland');
var nodejsx = require('node-jsx').install();
var App = require('client/home');
var helpers = require('helpers');

exports = module.exports = function(services) {
    var context = require('./context');

    return function(req, res, next) {
        var data = _([{
            component: App,
            clientScripts: ['/javascript/home.js'],
            context: context,
            staticPage: false
        }]);

        data
            .flatMap(_.wrapCallback(helpers.react.renderMarkupToString))
            .errors(next.bind(next))
            .each(res.send.bind(res));
    };
};
