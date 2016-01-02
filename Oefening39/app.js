var DataLoader = require('./DataLoader.js');

var dataLoader = new DataLoader();
dataLoader.on('data', function(data) {
    console.log(data);
});

dataLoader.getData(500);