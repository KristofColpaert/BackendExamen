var EventEmitter = require('events').EventEmitter;
var util = require('util');

var DataLoader = function() {
    'use strict';

    //Private
    var self = this;

    //Public
    this.emitter = new EventEmitter();

    //Functions
    EventEmitter.call(self);
};

util.inherits(DataLoader, EventEmitter);

DataLoader.prototype.getData = function(delay) {
    var self = this;

    setTimeout(function() {
        self.emit('data', 'Data is loaded after ' + delay + ' ms');
    }, delay);
};

module.exports = DataLoader;