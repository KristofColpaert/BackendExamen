var moduleLoader = require('./module/moduleLoader.js')();
var ConstructorLoader = require('./constructor/ConstructorLoader.js');

var fromArray = ['P1' , 'P2', 'P3', 'P4', 'P5', 'P6', 'P7', 'P8'];

moduleLoader.on('data', function(data) {
    console.log(data.toArray);
    console.log('Time to load: ' + data.time);
})

moduleLoader.loadArrayAsync(fromArray);

var constructorLoader = new ConstructorLoader();
constructorLoader.emitter.on('data', function(data) {
    console.log(data.toArray);
    console.log('Time to load: ' + data.time);
});

constructorLoader.loadArrayAsync(fromArray);