// dependencies
var http = require('http');
var express = require('express');
var session = require('express-session');
var RedisStore = require('connect-redis')(session);
var cookieParser = require('cookie-parser');
var app = express();

// config and setup helpers
var helpers = require('./helpers')();
var setup = require('./setup');

// database connection
setup.db();

// setup session store
var sessionStore = setup.sessions(RedisStore);

// configure express
setup.configureExpress({
    session: session,
    store: sessionStore,
    cookieParser: cookieParser,
    dir: __dirname
}, app);

// http (wrapper in case you plan to use socket.io at some point)
var server = http.createServer(app);

// initialize routes
require('./routes')(app);

// express error handling
setup.handleExpressError(app);

// run application
setup.run(server);
