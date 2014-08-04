var express = require('express')
  , http = require('http')
  , app = express()
  , mongoose = require('mongoose');

var config = require('config');
config.rootDirectory = __dirname + "/media";
/**
 *
 */
var error = {};
mongoose.connection.on('error', function(err) {
  error = err;
});
mongoose.connect(config.mongodb.host);
/**
 * Creating Express Server
 */
var server = http.createServer(app);

app.get('/mongo', function(req, res) {
  res.json(error);
});
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
