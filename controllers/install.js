var util = require('util');
var config = require('../config');

module.exports.install = function(req, res) {
  var url = 'https://www.facebook.com/dialog/pagetab?app_id=%s&redirect_uri=%s';
  var urlFormat = util.format(url, config.facebook.id, 'http://facebook.com');
  res.redirect(301, urlFormat);
}
