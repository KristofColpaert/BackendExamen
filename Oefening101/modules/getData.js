var getData = (function() {
    'use strict';

    //Variables
    var fs = require('fs');
    var http = require('http');

    //Functions
    var getStaticFile = function(path, callback) {
        fs.readFile(path, function(error, data) {
            if(!error) {
                callback(null, data);
            }
            else {
                callback(error, null);
            }
        })
    };

    var getApiData = function(search, callback) {
        var options = {
            method : 'GET',
            port : 80,
            host : 'api.flickr.com',
            path : '/services/feeds/photos_public.gne?format=json&tags=' + search + '&jsoncallback'
        };

        var request = http.request(options, function(response) {
            var json = '';

            response.on('data', function(data) {
                json += data;
            });

            response.on('end', function() {
                callback(null, json);
            });

            response.on('error', function(error) {
                callback(error, null);
            });
        });
        request.end();
    };

    //Return
    return {
        getStaticFile : getStaticFile,
        getApiData : getApiData
    };
})();

module.exports = getData;