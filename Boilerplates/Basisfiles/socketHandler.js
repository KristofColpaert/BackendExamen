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

    /*
    ** Socket io options
     */

    //// sending to sender-client only
    //socket.emit('message', "this is a test");
    //
    //// sending to all clients, include sender
    //io.emit('message', "this is a test");
    //
    //// sending to all clients except sender
    //socket.broadcast.emit('message', "this is a test");
    //
    //// sending to all clients in 'game' room(channel) except sender
    //socket.broadcast.to('game').emit('message', 'nice game');
    //
    //// sending to all clients in 'game' room(channel), include sender
    //io.in('game').emit('message', 'cool game');
    //
    //// sending to sender client, only if they are in 'game' room(channel)
    //socket.to('game').emit('message', 'enjoy the game');
    //
    //// sending to all clients in namespace 'myNamespace', include sender
    //io.of('myNamespace').emit('message', 'gg');
    //
    //// sending to individual socketid
    //socket.broadcast.to(socketid).emit('message', 'for your eyes only');
};

module.exports = socketHandler;