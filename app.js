// dependencies
var http = require('http');
var express = require('express');
var mongoose = require('mongoose');
var session = require('express-session');
var RedisStore = require('connect-redis')(session);
var cookieParser = require('cookie-parser');
var socketio = require('socket.io')();
var socketHandshake = require('socket.io-handshake');

// config and setup helpers
var helpers = require('./helpers')();
var config = require('./config');
var setup = require('./setup');

// setup session store
var sessionStore = setup.sessions({
    env: config.get('env'),
    Store: RedisStore,
    session: session,
    url: config.get('database.redis.url'),
    prefix: config.get('database.redis.session.prefix'),
    db: config.get('database.redis.db'),
    secret: config.get('server.secret')
});

// create express app
var app = setup.createExpressApp({
    session: session,
    store: sessionStore,
    sessionKey: config.get('session.key'),
    sessionSecret: config.get('server.secret'),
    dir: __dirname,
    static: '/client/public',
    favicon: '/client/public/images/favicon.ico',
    env: config.get('env')
});

// http and socket.io server(s)
var server = http.createServer(app);
var io = socketio.attach(server);

// configure socket.io
setup.configureSockets(io, {
    sessionStore: sessionStore,
    sessionKey: config.get('session.key'),
    sessionSecret: config.get('server.secret'),
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
require('./routes')(app, middleware, handlers, config);

// express error handling
setup.handleExpressError(app, helpers);

// database connection
setup.connectToDatabase(mongoose, config.get('database.mongo.url'));

// run application
setup.startServer(server, config.get('server.port'));
