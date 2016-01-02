var writeHead = function(){
    return function(req, res, next) {
        var headers = {
            'Content-Type' : 'text/html',
            'Set-Cookie' : 'date=' + new Date().getTime()
        };

        res.writeHead(200, headers);

        next();
    };
};

module.exports = writeHead;