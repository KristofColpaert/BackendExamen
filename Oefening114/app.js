var http = require('http');
var handlers = require('./constants/handlers.js');
var router = require('./modules/router.js');

http.createServer(function(req, res) {
    router.getRoute(handlers, req, res);
}).listen(8080);