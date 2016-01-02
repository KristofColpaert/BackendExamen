var fs = require('fs');
var multiparty = require('multiparty');

var rootHandler = function(req, res) {
    fs.readFile(process.cwd() + '/public/index.html', function(error, data) {
        if(!error) {
            res.writeHead(200, { 'Content-Type' : 'text/html' });
            res.end(data.toString());
        }

        else {
            res.writeHead(500);
            res.end();
        }
    })
};

var apiHandler = function(req, res) {

};

var fileHandler = function(req, res, baseName) {
    fs.readFile(process.cwd() + '/public/' + baseName, function(error, data) {
        if(!error) {
            res.writeHead(200, { 'Content-Type' : 'text/html' });
            res.end(data.toString());
        }

        else {
            res.writeHead(500);
            res.end();
        }
    });
};

var uploadHandler = function(req, res) {
    var form = new multiparty.Form();
    form.parse(req, function(err, fields, files) {
        var fileName = files.upload[0].originalFilename;

        var instream = fs.createReadStream(files.upload[0].path);
        var outStream = fs.createWriteStream("./public/images/uploads/" + fileName);
        instream.pipe(outStream);

        res.writeHead(200, { 'Content-Type' : 'text/html' });
        res.end('<h1>File upload succeeded</h1>');
    });
}

module.exports.rootHandler = rootHandler;
module.exports.apiHandler = apiHandler;
module.exports.fileHandler = fileHandler;
module.exports.uploadHandler = uploadHandler;