const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const path = require('path');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

// Step 8: Serve static files

// Step 9: Handle Socket.io events


  // Step 10: Broadcast to all clients when a user joins
  

  // Step 11: Listen for chat messages and broadcast them to all clients
 

  // Step 12: Handle disconnection and broadcast when a user leaves
 

// Step 13: Set up the server to listen on a specific port

