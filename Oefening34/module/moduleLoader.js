var moduleLoader = (function() {
    'use strict';

    //Variables
    var delay = 1000;

    //Functions
    var loadArrayAsync = function(fromArray, callback) {
        var start = new Date().getTime();
        var toArray = [];

        fromArray.forEach(function(element) {
            loadAsync(element, delay, function(error, result) {
                if(!error) {
                    toArray.push(result);

                    if(toArray.length === fromArray.length) {
                        var end = new Date().getTime();
                        var time = end - start;
                        callback(null, { toArray : toArray, time : time });
                    }
                }
            });
        });
    };

    var loadAsync = function(element, delay, callback) {
        setTimeout(function() {
            callback(null, 'Element ' + element + ' loaded');
        }, delay);
    }

    //Return
    return {
        loadArrayAsync : loadArrayAsync
    }
})();

module.exports = moduleLoader;