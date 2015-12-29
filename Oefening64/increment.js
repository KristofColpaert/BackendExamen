process.stdin.on('data', function(data) {
    var number = parseInt(data);
    number++;

    process.stdout.write('' + number);
});