var ReactAsync = require('react-async');

exports = module.exports = function () {
    return function (options) {
        var context = options.context || {};
        var callback = options.callback || function (err) { console.log(err) };
        var clientScripts = options.clientScripts || [];
        var component = options.component || function () { console.log('no component passed!') };

        // application data (this has the same effect as handlebars context, except for react components)
        var renderedComponent = component(context);

        // render the react markup to a string
        ReactAsync.renderComponentToStringWithAsyncState(renderedComponent, function (err, markup, data) {
            if (!markup) return callback('could not render markup');

            // add doctype to markup (not possible in jsx - so it needs to be done dirty)
            markup = '<!DOCTYPE html>' + markup;
            callback(err, options.staticPage ? markup : ReactAsync.injectIntoMarkup(markup, data, clientScripts))
        });
    };
};
