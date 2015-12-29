var tcpServer = (function() {
    'use strict';

    var net = require('net');
    var sockets = [];

    var server = net.createServer(function(socket) {
        sockets.push(socket);
        socket.write('Welkom, nieuwe gebruiker');

        socket.on('data', function(data) {
            sockets.forEach(function(loopSocket) {
                if(loopSocket !== socket) {
                    loopSocket.write(data);
                }
            });
        });

        socket.on('end', function() {
            var counter = 0;
            sockets.forEach(function(loopSocket) {
                if(loopSocket === socket) {
                    sockets.splice(counter, 1);
                }
                counter++;
            });
        });
    });

    server.on('error', function(error) {
        console.log('Error: ' + error);
    });

    server.listen(1337, function() {
       console.log('Server is actief op poort 1337.');
    });
})();

module.exports = tcpServer;