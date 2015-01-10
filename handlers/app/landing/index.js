var nodejsx = require('node-jsx').install();
var Landing = require('client/landing');
var helpers = require('helpers');
var _ = require('highland');

exports = module.exports = function(services) {
    var context = {
        title: 'Landing',
        description: 'App landing',
    };

    return function(req, res, next) {
        var data = _([{
            component: Landing,
            clientScripts: ['/javascript/landing.js'],
            context: context,
            staticPage: true
        }]);

        data
            .flatMap(_.wrapCallback(helpers.react.renderMarkupToString))
            .errors(next.bind(next))
            .each(res.send.bind(res));
    };
};
