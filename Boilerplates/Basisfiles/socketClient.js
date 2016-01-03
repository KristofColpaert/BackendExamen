$(document).ready(function() {
    //Init sockets
    var socket = io('http://localhost:3000');

    //Socket handlers
    socket.on('serverMessage', function(data) {
        var newMessage = '<p>' + data + '</p>';

        if(state !== 'init') {
            content.append(newMessage);
        }
    });

    //Socket send message
    socket.emit('clientMessage', 'data');
});