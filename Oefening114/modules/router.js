var router = (function() {
    'use strict';

    //Variables
    var url = require('url');
    var path = require('path');

    //Functions
    var getRoute = function(handlers, req, res){
        var pathName = url.parse(req.url).pathname;
        var handlerFunction = handlers[pathName];

        if(typeof handlerFunction !== 'undefined') {
            handlerFunction(req, res);
        }

        else {
            var baseName = path.basename(req.url) || 'index.html';
            var ext = path.extname(baseName);
            handlerFunction = handlers['/file'];

            handlerFunction(req, res, baseName);
        }
    };

    //Return
    return {
        getRoute : getRoute
    }
})();

module.exports = router;