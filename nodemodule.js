var express = require('express');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var session = require('express-session');
var facebookPageTap = require('facebook-page-tab');
var config = require('./config');

// Set in app express module
var app = express();

// Express configuration

app.use( bodyParser() );
app.use( cookieParser( config.session.secret ) );
app.use( session( config.session ) );

app.use( facebookPageTap( app, config.facebook ) );

app.get( '/', function( req, res ){
	res.send( JSON.stringify( req.params, null, 2 ) );
} );

app.listen(config.port);