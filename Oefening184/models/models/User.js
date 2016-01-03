var mongoose = require('mongoose');
var UserSchema = require('../schemas/UserSchema.js');

var User = mongoose.model('User', UserSchema, 'users');

module.exports = User;