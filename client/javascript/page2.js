// register handlebars helpers and partials
require('./modules/handlebars')();

// config (envify)
var config = require('./config');

// modules
var api = require('./modules/api')(config);
var templates = require('./templates')();

// main application
var app = require('./modules/page2/main')(templates, api);

// debug
console.log('page 2 client application started');