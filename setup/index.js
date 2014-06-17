// common dependencies
var fs = require('fs');
var url = require('url');
var colors = require('colors');
var debug = require('debug')('express-basic-app:setup');

// express dependencies
var morgan = require('morgan');
var bodyParser = require('body-parser');
var favicon = require('serve-favicon');
var methodOverride = require('method-override');
var errorHandler = require('errorhandler');
var session = require('express-session');

// configure express
module.exports.configureExpress = function (options, app, config) {
    // set view engine and parsers
    app.set('views', options.dir + '/views');
    app.set('view engine', 'html');
    app.engine('.html', options.handlebars.__express);

    // json pretty response
    app.set('json spaces', 2);

    // express common config
    app.use(options.express.static(options.dir + '/client/public'));
    app.use(morgan('dev'));
    app.use(options.cookieParser());
    app.use(bodyParser());
    app.use(methodOverride());
    app.use(session({ secret: config.get('server.secret'), key: config.get('session.key') }));
    app.use(favicon(options.dir + '/client/public/favicon.ico'));

    // express dev config
    if ('development' == config.get('env')) {
       app.use(errorHandler());
    }
};

// register handlebars partials
module.exports.registerPartials = function (path, handlebars) {
    var partials = path;
    fs.readdirSync(partials).forEach(function (folder) {
        var extension = folder.split('.')[1];
        if (extension != undefined) return;
        fs.readdirSync(partials + folder).forEach(function (file) {
            var extension = file.split('.')[1];
            if(extension != 'html') return;
            var source = fs.readFileSync(partials + folder + '/' + file, "utf8");
            var partial = folder+'-'+file.split('.')[0];
            handlebars.registerPartial(partial, source);
        });
    });
};

// register handlebars block helpers
module.exports.registerHelpers = function (helpers, handlebars) {
    for (var helper in helpers) {
        if (helpers.hasOwnProperty(helper)) {
            handlebars.registerHelper(helper, helpers.helper);
        }
    }
    return;
};

// create a connection to backend store (mysql)
module.exports.db = function (database, config)  {
    var connection = database.createConnection(config.get('database.mysql.url'));
    connection.connect();
    return connection;
};

// bind server to port
module.exports.run = function (server, config) {
    server.listen(config.get('server.port'), function () {
        debug('listening on port %d'.green, server.address().port);
    });
};