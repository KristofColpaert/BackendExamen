var saveRequest = function() {
    return function(req, res, next) {
        var fs = require('fs');

        var data = req.headers.host + ';' + req.headers['user-agent'] + ';' + req.headers.cookie + '; \n';

        fs.appendFile(process.cwd() + '/data/requests.txt', data, function(error, result) {
            if(!error) {
                res.write('<p>Saving succeeded</p>');
            }

            else {
                console.log(error);
            }
            next();
        });
    };
};

module.exports = saveRequest;