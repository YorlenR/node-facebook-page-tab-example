var controllers = require('./controllers');
var facebookPageTap = require('facebook-page-tab');

var Routes = function(app, config) {

  app.get('/install', controllers.install.install);

  app.use(facebookPageTap.page(app, config.facebook));

  app.use(facebookPageTap.auth(app, config.facebook));

  app.post( '/', function( req, res ){
    console.log(req.body);

  	res.send( JSON.stringify( req.session, null, 2 ) );
  } );

};

module.exports = Routes;
