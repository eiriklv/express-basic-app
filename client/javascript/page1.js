// register handlebars helpers and partials
require('./modules/handlebars')();

// config (envify)
var config = require('./config');

// modules
var api = require('./modules/api')(config);
var templates = require('./templates')();

// main application
var app = require('./modules/page1/main')(templates, api);

// debug
console.log('page 1 client application started');