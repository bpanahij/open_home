var express = require('express')
  , http = require('http')
  , app = express()
  , mongoose = require('mongoose');

var config = require('config');
config.rootDirectory = __dirname + "/media";
/**
 *
 */
mongoose.connect(config.mongodb.host);
// mongodb://localhost/connected_open_home
/**
 * Creating Express Server
 */
var server = http.createServer(app);
/**
 * Creating Hypermedia Server
 */
var apiServer = require('hypermedia_server');
apiServer(config, app);
/**
 * Static resources
 */
app.use(function (req, res, next) {
  res.setHeader('Cache-Control', 'public,max-age=592200,s-maxage=592200');
  next();
});
var coreAssets = __dirname + '/assets';
app.use(express.static(coreAssets));
/**
 * Start HTTP Server
 */
server.listen(config.host.port, function () {
  console.log('HATEOAS Server listening on port ' + config.host.port);
});
