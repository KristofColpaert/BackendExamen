var textReader = (function() {
    'use strict';

    //Variables
    var fs = require('fs');

    //Functions
    var read = function(fileName, callback) {
        fs.readFile(fileName, function(error, data) {
            data = data.toString();

            var lines = data.split('\n');
            var newLines = [];
            var counter = 1;

            lines.forEach(function(line) {
                line = counter + ' ' + line;
                newLines.push(line);
                counter++;
            });

            callback(null, newLines);
        });
    };

    //Return
    return {
        read : read
    };
})();

module.exports = textReader;