var tcpClient = (function() {
    'use strict';

    var net = require('net');

    var client = net.connect(1337, function() {
        console.log('Connectie met TCP server');

        client.on('data', function(data) {
            console.log(data.toString());
        });

        process.stdin.on('data', function(data) {
            client.write(data);
        });
    });
})();

module.exports = tcpClient;