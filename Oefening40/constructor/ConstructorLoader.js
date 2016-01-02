var EventEmitter = require('events').EventEmitter;

var ConstructorLoader = function() {
    'use strict';

    //Private
    var self = this;

    //Public
    this.delay = 1000;
    this.emitter = new EventEmitter();

    this.loadAsync = function(element, delay, callback) {
        setTimeout(function(){
            callback(null, 'Element: ' + element + ' loaded.');
        }, delay);
    }
};

ConstructorLoader.prototype = {
    loadArrayAsync : function(fromArray) {
        var start = new Date().getTime();
        var toArray = [];
        var self = this;

        fromArray.forEach(function(element) {
            self.loadAsync(element, self.delay, function(error, result) {
                if(!error) {
                    toArray.push(result);

                    if(toArray.length === fromArray.length) {
                        var end = new Date().getTime();
                        var time = end - start;
                        self.emitter.emit('data', { toArray : toArray, time : time });
                    }
                }
            });
        });
    }
};

module.exports = ConstructorLoader;