var controllers = require('./controllers');

var Routes = function(app) {

  app.get('install', controllers.install.install);

  app.post( '/', function( req, res ){
  	res.send( JSON.stringify( req.session, null, 2 ) );
  } );

}

module.exports = Routes;
