var express = require('express');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var session = require('express-session');
var config = require('./config');
var Routes = require('./routes');

// Set in app express module
var app = express();

// Express configuration
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({
	extended: false
}));
// parse application/json
app.use(bodyParser.json());
app.use(cookieParser(config.session.secret));

app.use(session({
  secret: config.session,
  resave: false,
  saveUninitialized: true,
  cookie: { secure: true }
}));

// set routes
routes = new Routes(app, config);

// set listen
app.listen(config.port);
