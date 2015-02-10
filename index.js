var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var Queue = require('./Queue.js');

var queue = new Queue(100);

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket){
    console.log('a user connected');
    for (var i = 0; i < queue.elements.length; i++) {
        socket.emit('chat message', queue.elements[i]);
    }
    socket.on('chat message', function(msg){
        console.log('message: ', msg);
        queue.push(msg);
        io.emit('chat message', msg);
    });
    socket.on('disconnect', function(){
        console.log('user disconnected');
    });
});

http.listen(3000, function () {
    console.log('listening on *:3000');
});
