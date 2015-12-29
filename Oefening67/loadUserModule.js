var loadUserModule = (function() {
    'use strict';

    var loadUser = function(user, delay, callback) {
        setTimeout(function() {
            callback(null, user);
        }, delay);
    };

    return {
        loadUser : loadUser
    };
})();

module.exports = loadUserModule;