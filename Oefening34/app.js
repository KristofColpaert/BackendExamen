var moduleLoader = require('./module/moduleLoader.js');
var ConstructorLoader = require('./constructor/ConstructorLoader.js');

var fromArray = ['P1' , 'P2', 'P3', 'P4', 'P5', 'P6', 'P7', 'P8'];

moduleLoader.loadArrayAsync(fromArray, function(error, result) {
    if(!error) {
        console.log(result.toArray);
        console.log('Time to load: ' + result.time);
    }
});

var constructorLoader = new ConstructorLoader();
constructorLoader.loadArrayAsync(fromArray, function(error, result) {
    if(!error) {
        console.log(result.toArray);
        console.log('Time to load: ' + result.time);
    }
});