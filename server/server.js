const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');

const {generateMessage, generateLocationMessage} = require('./utils/message');

const port = process.env.PORT || 3000;

var app = express();
var server = http.createServer(app);
var io = socketIO(server);

app.use(express.static(path.join(__dirname, '../public')));

io.on('connection', (socket) => {
  console.log('New user connected');

  // Welcome message
  socket.emit('newMessage', generateMessage('Admin', 'Welcome to the chat app'));

  // New user joined message
  socket.broadcast.emit('newMessage', generateMessage('Admin', 'New user joined'));

  // Create message listener
  socket.on('createMessage', (message, callback) => {
    console.log('createMessage', message);
    io.emit('newMessage', generateMessage(message.from, message.text));
    callback();
  });

  // Create location message listener
  socket.on('createLocationMessage', (locationMessage) => {
    io.emit('newLocationMessage', generateLocationMessage(locationMessage.from, locationMessage.latitude, locationMessage.longitude));
  });

  socket.on('disconnect', () => {
    console.log('User was disconnected');
  });
});

server.listen(port, () => {
  console.log(`Started up at port ${port}`);
});
