'use strict';

var config = {
    MONGODBURL : process.env.MONGO_URI || 'mongodb://localhost'
};

module.exports = config;