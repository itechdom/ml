const http = require('http');
const io = require('socket.io');
const express = require('express');

// ---------------------------------------------------------
// get an instance of the router for api routes
// ---------------------------------------------------------
var apiRoutes = express.Router();

export default function auth({
    app
}) {

    var server = http.Server(app);
    var ioServer = io(server);

    apiRoutes.get('/', function(req, res) {
        res.send('Hello! Hello service is working');
    });

    ioServer.on('connection', function(socket){
      socket.on('chat message', function(msg){
        ioServer.emit('chat message', msg);
      });
    });

    server.listen(3000);

    return apiRoutes;
}
