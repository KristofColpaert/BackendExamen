var mongoose = require('mongoose');
var regex = require('../../constants/regex.js');

var UserSchema = new mongoose.Schema({
    username : {
        type : String,
        required : true,
        unique : true,
    },
    email : {
        type : String,
        required : true,
        match : regex.EMAIL_REGEX
    },
    profession : {
        type : String,
        required : true
    },
    firstname : {
        type : String,
        required : true
    },
    lastname : {
        type : String,
        required : true
    },
    gender : {
        type : String,
        required : true,
        trim : true,
        uppercase : true,
        enum : ['M', 'F']
    }
});

module.exports = UserSchema;