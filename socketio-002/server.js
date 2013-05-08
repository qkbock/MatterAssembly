var express = require('express');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io').listen(server);
var port = 8080;

server.listen(port);

app.use(express.static(__dirname+'/public'));

io.sockets.on('connection', function(socket){
	
	socket.on('item taken', function(data){
		io.sockets.emit('other took item', data);
	});
	socket.on('mouse moved', function(data){
		io.sockets.emit('other moved', data);
		console.log(data);	
	});
	socket.on('mouse clicked', function(data){
		io.sockets.emit('mouse clicked', data);
	});
	
});