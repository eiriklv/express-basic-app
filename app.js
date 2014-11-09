// dependencies
var http = require('http');
var express = require('express');
var mongoose = require('mongoose');
var session = require('express-session');
var RedisStore = require('connect-redis')(session);
var cookieParser = require('cookie-parser');
var socketio = require('socket.io')();
var socketHandshake = require('socket.io-handshake');
var app = express();

// config and setup helpers
var helpers = require('./helpers')();
var config = require('./config');
var setup = require('./setup');

// setup session store
var sessionStore = setup.sessions(RedisStore, session, config);

// configure express
setup.configureExpress({
    express: express,
    session: session,
    store: sessionStore,
    cookieParser: cookieParser,
    dir: __dirname
}, app, config);

// http and socket.io server(s)
var server = http.createServer(app);
var io = socketio.attach(server);

// configure socket.io
setup.configureSockets(io, config, {
    cookieParser: cookieParser,
    sessionStore: sessionStore
});

// app modules
var ipc = require('./modules/ipc')(0);
var models = require('./models')(mongoose);
var services = require('./services')(models, helpers);
var middleware = require('./middleware')();
var handlers = require('./handlers')(services, helpers);

// initialize sockets
require('./modules/sockets')(io, ipc);

// initialize routes
require('./routes')(app, express, middleware, handlers, config);

// express error handling
setup.handleExpressError(app, helpers);

// database connection
setup.connectToDatabase(mongoose, config.get('database.mongo.url'));

// run application
setup.run(server, config);
