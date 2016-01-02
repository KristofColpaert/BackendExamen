var writeHead = require('./modules/writeHead.js')();
var saveRequest = require('./modules/saveRequest.js')();
var echoText = require('./modules/echoText.js')();
var http = require('http');
var connect = require('connect');
var app = connect();

app.use('/', writeHead);
app.use('/', saveRequest);
app.use('/', echoText);

var server = http.createServer(app).listen(3002);