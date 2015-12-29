var spawn = require('child_process').spawn;
var child = spawn('node', ['./increment.js']);

//Set encoding for buffer.
child.stdin.setEncoding('utf-8');

//Set interval to 1 second.
var interval = setInterval(function() {
    child.stdin.write('' + Math.floor(Math.random() * 1000));
}, 1000);

//Clear interval at 10 seconds.
setTimeout(function() {
    clearInterval(interval);
}, 11000)

//Receive data from child process.
child.stdout.on('data', function(data) {
    console.log(data.toString());
});