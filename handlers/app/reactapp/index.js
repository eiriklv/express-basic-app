var nodejsx = require('node-jsx').install();
var App = require('../../../client/javascript/reactapp');

exports = module.exports = function (services, helpers) {
    return function (req, res, next) {
        var context = {
            title: 'Page Title',
            description: 'Page Description',
            user: {
                name: 'Some user',
                token: '12345678ADSfghjkll'
            },
            products: [
                {category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football'},
                {category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball'},
                {category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball'},
                {category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch'},
                {category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5'},
                {category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7'}
            ],
            comments: [
                {author: 'Pete Hunt', text: 'This is one comment'},
                {author: 'Jordan Walke', text: 'This is *another* comment'}
            ],
            startTime: new Date()
        }

        helpers.react.renderMarkupToString({
            component: App,
            clientScripts: ['/javascript/reactapp.js'],
            context: context,
            staticPage: false,
            callback: function (err, markup) {
                if (err) return next(err);
                res.send(markup);
            }
        });
    };
};