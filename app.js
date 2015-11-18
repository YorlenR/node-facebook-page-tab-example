var express = require('express');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var session = require('express-session');
var facebookPageTap = require('facebook-page-tab');
var config = require('./config');
var routes = require('./routes');

// Set in app express module
var app = express();

// Express configuration
app.use( bodyParser() );
app.use( cookieParser( config.session.secret ) );
app.use( session( config.session ) );

app.use( facebookPageTap( app, config.facebook ) );

// set routes
routes = new Routes(app);

// set listen
app.listen(config.port);
