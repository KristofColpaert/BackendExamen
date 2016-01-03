var userRepository = (function() {
    'use strict';

    //Variables
    var User = require('../../models/models/User.js');

    //Functions
    var all = function(callback) {
        User.find({}).exec(function(error, users) {
            if(!error) {
                callback(null, users);
            }

            else {
                callback(error, null);
            }
        });
    };

    var singleById = function(id, callback) {
        User.findOne({ _id : id}).exec(function(error, user) {
            if(!error) {
                callback(null, user);
            }

            else {
                callback(error, null);
            }
        });
    }

    var singleByUsername = function(username, callback) {
        User.findOne({ username : username }).exec(function(error, user) {
            if(!error) {
                callback(null, user);
            }

            else {
                callback(error, null);
            }
        });
    };

    var add = function(userData, callback) {
        var newUser = new User({
            username : userData.username,
            firstname : userData.firstname,
            lastname : userData.lastname,
            email : userData.email,
            profession : userData.profession,
            gender : userData.gender
        });

        newUser.save(function(error, addedUser) {
            if(!error) {
                callback(null, addedUser);
            }

            else {
                callback(error, null);
            }
        });
    };

    var remove = function(username, callback) {
        User.remove({ username : username }).exec(function(error, result) {
            callback(error, result);
        });
    };

    var update = function(updatedUser, callback) {
        singleById(updatedUser._id, function(error, user) {
            if(error) {
                callback(error, null);
            }

            else {
                user.update(updatedUser, { runValidators : true }, function(error, result) {
                    if(error) {
                        callback(error, null);
                    }

                    else {
                        callback(null, result);
                    }
                });
            }
        });
    }

    //Return
    return {
        all : all,
        singleByUsername : singleByUsername,
        singleById : singleById,
        add : add,
        remove : remove,
        update : update
    };
})();

module.exports = userRepository;