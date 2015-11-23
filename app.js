var express = require('express');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var session = require('express-session');
var pg = require('pg');
var pgSession = require('connect-pg-simple')(session);
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
	store: new pgSession({
    pg : pg,                                  // Use global pg-module
    conString : process.env.DATABASE_URL, // Connect using something else than default DATABASE_URL env variable
    tableName : 'user_sessions'               // Use another table-name than the default "session" one
  }),
  secret: config.session,
  resave: false,
  saveUninitialized: true,
  cookie: {
		secure: true,
		maxAge: 30 * 24 * 60 * 60 * 1000
	}
}));

// set routes
routes = new Routes(app, config);

// set listen
app.listen(config.port);
