// dependencies
var http = require('http');
var express = require('express');
var mongoose = require('mongoose');
var session = require('express-session');
var RedisStore = require('connect-redis')(session);
var cookieParser = require('cookie-parser');
var hbs = require('hbs');
var app = express();

// config and setup helpers
var helpers = require('./helpers')();
var config = require('./config');
var setup = require('./setup');

// database connection
setup.db(mongoose, config);

// handlebars setup
setup.registerPartials('./views/partials/', hbs);
setup.registerHelpers(helpers.handlebars, hbs);

// setup session store
var sessionStore = setup.sessions(RedisStore, config);

// configure express
setup.configureExpress({
    express: express,
    handlebars: hbs,
    session: session,
    store: sessionStore,
    cookieParser: cookieParser,
    dir: __dirname
}, app, config);

// http (wrapper in case you plan to use socket.io at some point)
var server = http.createServer(app);

// app modules
var ipc = require('./modules/ipc')(0);
var models = require('./models')(mongoose);
var services = require('./services')(models, helpers);
var middleware = require('./middleware')();
var handlers = require('./handlers')(services);

// initialize routes
require('./routes')(app, express, middleware, handlers, config);

// run application
setup.run(server, config);
