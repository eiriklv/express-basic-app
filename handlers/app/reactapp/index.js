var url = require('url');
var ReactAsync = require('react-async');
var nodejsx = require('node-jsx').install();
var App = require('../../../client/javascript/reactapp');

function renderReactMarkupToString (req, callback) {
    var path = url.parse(req.url).pathname;
    
    // application data (this has the same effect as handlebars context, except for react components)
    var app = App({
        title: 'Page Title',
        description: 'Page Description',
        user: {
            name: 'Some user',
            token: '12345678ADSfghjkll'
        },
        products: [
            {category: "Sporting Goods", price: "$49.99", stocked: true, name: "Football"},
            {category: "Sporting Goods", price: "$9.99", stocked: true, name: "Baseball"},
            {category: "Sporting Goods", price: "$29.99", stocked: false, name: "Basketball"},
            {category: "Electronics", price: "$99.99", stocked: true, name: "iPod Touch"},
            {category: "Electronics", price: "$399.99", stocked: false, name: "iPhone 5"},
            {category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7"}
        ]
    });

    // render the react markup to a string
    ReactAsync.renderComponentToStringWithAsyncState(app, function (err, markup, data) {
        callback(err, markup, data);
    });
}

exports = module.exports = function (services, clientScripts) {
    return function (req, res, next) {
        renderReactMarkupToString(req, function (err, markup, data) {
            if (err) return next(err);
            res.send(ReactAsync.injectIntoMarkup(markup, data, clientScripts))
            //res.send(markup); (if you just want a static page displayed)
        });
    };
};