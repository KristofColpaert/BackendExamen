'use strict';

var config = {
    MONGODBURL : process.env.MONGO_URI || 'mongodb://localhost/users'
};

module.exports = config;