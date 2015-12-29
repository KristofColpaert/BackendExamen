'use strict';

var loadUserModule = require('./loadUserModule.js');

var inputs1 = ['P1', 'P2', 'P3', 'P4', 'P5', 'P6', 'P7', 'P8'];
var inputs2 = ['P1', 'P2', 'P3', 'P4', 'P5', 'P6', 'P7', 'P8'];

//Ayncloader
var asyncLoad = function(user, callback) {
    loadUserModule.loadUser(user, Math.floor(Math.random() * 1000), function(error, result) {
        if(!error) {
            callback(result);
        }
    });
};

//Serie
var series = function(user) {
    if(user) {
        asyncLoad(user, function(result) {
            console.log(result + ' is loaded - series');
            series(inputs1.shift());
        });
    }
    else {
        parallel();
    }
};

series(inputs1.shift());

//Parallel
var parallel = function() {
    inputs2.forEach(function(user) {
        asyncLoad(user, function(result) {
            console.log(result + ' is loaded - parallel');
        });
    });
};