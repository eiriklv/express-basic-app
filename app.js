// dependencies
var http = require('http');
var express = require('express');
var mysql = require('mysql');
var cookieParser = require('cookie-parser');
var hbs = require('hbs');
var app = express();

// config and setup helpers
var helpers = require('./helpers')();
var config = require('./config');
var setup = require('./setup');

// database connection
var database = setup.db(mysql, config);

// handlebars setup
setup.registerPartials('./views/partials/', hbs);
setup.registerHelpers(helpers.handlebars, hbs);

// configure express
setup.configureExpress({
    express: express,
    handlebars: hbs,
    cookieParser: cookieParser,
    dir: __dirname
}, app, config);

// http (wrapper in case you plan to use socket.io at some point)
var server = http.createServer(app);

// app modules
var ipc = require('./modules/ipc')(0);
var services = require('./services')(database, helpers);
var middleware = require('./middleware')();
var handlers = require('./handlers')(services);

// initialize routes
require('./routes')(app, express, middleware, handlers, config);

// run application
setup.run(server, config);
