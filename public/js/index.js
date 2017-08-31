/**
 * http://usejsdoc.org/
 */
var socket = io();

socket.on('connect', function() {
	console.log('connected to server');

	socket.emit('createMessage', {
		from : 'me',
		text : 'Hi.  This is a message from me.'
	});
});

socket.on('disconnect', function() {
	console.log('disconnected from server');
});

socket.on('newMessage', function(message) {
	console.log('newMessage', message);
});
