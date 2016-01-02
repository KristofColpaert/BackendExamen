var echoText = function(){
    return function(req, res, next) {
        res.end('<p>test</p>');
        next();
    };
};

module.exports = echoText;