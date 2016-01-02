var delay = 1000;

var fromArray = ['P1' , 'P2', 'P3', 'P4', 'P5', 'P6', 'P7', 'P8'];

loadArrayAsync(fromArray, function(error, result){
    if(!error) {
        console.log(result.toArray);
        console.log('Time to load: ' + result.time);
    }
});

/*
 * Functions
 */

function loadAsync(element, delay, callback) {
    setTimeout(function() {
        callback(null, 'Element ' + element + ' loaded.');
    }, delay);
}

function loadArrayAsync(fromArray, callback) {
    var start = new Date().getTime();
    var toArray = [];

    fromArray.forEach(function(element) {
        loadAsync(element, delay, function(error, result) {
            toArray.push(result);

            if(toArray.length === fromArray.length) {
                var end = new Date().getTime();
                var time = end - start;
                callback(null, { toArray : toArray, time : time });
            }
        });
    });
}