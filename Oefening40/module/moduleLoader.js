var EventEmitter = require('events').EventEmitter;
var util = require('util');

var moduleLoader = function() {
    'use strict';

    //Variables
    var self = this;
    var delay = 1000;
    var emitter = new EventEmitter();
    EventEmitter.call(self);

    //Functions
    var loadArrayAsync = function(fromArray) {
        var start = new Date().getTime();
        var toArray = [];

        fromArray.forEach(function(element) {
            loadAsync(element, delay, function(error, result) {
                if(!error) {
                    toArray.push(result);

                    if(toArray.length === fromArray.length) {
                        var end = new Date().getTime();
                        var time = end - start;
                        emitter.emit('data', { toArray : toArray, time : time });
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
};

util.inherits(moduleLoader, EventEmitter);

module.exports = moduleLoader;