var server = (function() {
    'use strict';

    //Variables
    var http = require('http');
    var url = require('url');
    var fs = require('fs');
    var querystring = require('querystring');
    var mimeTypes = require('../helpers/mimeTypes.js');
    var getData = require('./getData.js');

    //Functions
    var init = function(port) {
        httpListen(port);
    };

    var httpListen = function(port) {
        var httpServer = http.createServer(function(req, res) {
            var pathName = url.parse(req.url).pathname;

            switch(pathName) {
                case '/':
                    var path = process.cwd() + '/public/index.html';
                    getData.getStaticFile(path, function(error, data) {
                        if(!error) {
                            res.writeHead(200, { 'Content-Type' : mimeTypes.html });
                            res.end(data.toString());
                        }
                    });
                    break;

                case '/search':
                    var query = querystring.parse(url.parse(req.url).query);
                    var search = query.search;

                    getData.getApiData(search, function(error, data) {
                        if(!error) {
                            res.writeHead(200, { 'Content-Type' : mimeTypes.json });
                            res.end(data);
                        }
                    });
                    break;

                default:
                    var path = process.cwd() + '/public/' + pathName;
                    getData.getStaticFile(path, function(error, data) {
                        if(!error) {
                            res.writeHead(200, { 'Content-Type' : mimeTypes.html });
                            res.end(data.toString());
                        }
                    });
                    break;
            }
        }).listen(port);
    };

    //Return
    return {
        init : init
    };
})();

module.exports = server;