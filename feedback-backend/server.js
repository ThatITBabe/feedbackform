// server.js
const express = require('express');
const mongoose = require('mongoose');
const socketIo = require('socket.io');
const http = require('http');
const feedbackRoutes = require('./routes/feedback');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

mongoose.connect('mongodb+srv://obasanyajanet1:@Janetjanet1@cluster0.tbqxqva.mongodb.net/', { useNewUrlParser: true, useUnifiedTopology: true });

app.use(express.json());
app.use('/feedback', feedbackRoutes);

io.on('connection', (socket) => {
  socket.on('submitFeedback', (data) => {
    // Handle feedback submission
    console.log(data);
  });
});

server.listen(5000, () => {
  console.log('Server is running on port 5000');
});
