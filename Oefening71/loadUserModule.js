var loadUserModule = (function() {
    'use strict';
    var Promise = require('es6-promise').Promise;

    var loadUser = function(user, delay, callback) {
        setTimeout(function() {
            callback(null, user);
        }, delay);
    };

    var loadUsersPromise = function(users) {
        return new Promise(function(resolve, reject) {
            if(Math.random() < 0.5) {
                resolve(users);
            }

            else {
                reject('Not smaller dan 0.5');
            }
        });
    };

    return {
        loadUser : loadUser,
        loadUsersPromise : loadUsersPromise
    };
})();

module.exports =loadUserModule;