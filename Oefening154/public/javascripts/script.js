$(document).ready(function() {
    //Globals
    var state = 'init';

    //Init sockets
    var socket = io('http://localhost:3000');

    //Init controls
    var content = $('#content');
    var form = $('#form');
    var input = $('#input');

    form.submit(function(event) {
        console.log('hier');
        event.preventDefault();

        if(state === 'init') {
            if(input.val() !== '') {
                socket.emit('clientName', input.val());
                input.val('');
                state = 'connected';
            }
        }

        else {
            if(input.val() !== '') {
                socket.emit('clientMessage', input.val());
                input.val('');
            }
        }
    });

    //Socket handlers
    socket.on('serverMessage', function(data) {
        var newMessage = '<p>' + data + '</p>';

        if(state !== 'init') {
            content.append(newMessage);
        }
    });
});