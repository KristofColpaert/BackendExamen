var socketHandler = function(io) {
    'use strict';

    //Functions
    io.on('connection', function(socket) {
        socket.on('clientName', function(name) {
            socket.name = name;

            //Send to user
            socket.emit('serverMessage', 'Hello, ' + name);

            //Send to everyone
            socket.broadcast.emit('serverMessage', name + ' has joined the server');
        });

        socket.on('clientMessage', function(data) {
            io.emit('serverMessage', socket.name + ' says: ' + data);
        });
    });
};

module.exports = socketHandler;