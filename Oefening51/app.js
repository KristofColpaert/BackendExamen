var textReader = require('./textReader.js');

textReader.read('./data/lipsum.txt', function(error, result) {
    if(!error) {
        console.log(result);
    }
});