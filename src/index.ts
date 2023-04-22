import { BroadcastOptions } from './../node_modules/socket.io-adapter/dist/index.d';
import http from 'http';
import { Server as WebSocket } from 'socket.io';
/**
 * My modules
 */
import app from "./app";
import {PORT} from './config';

/**
 * Models
 */
import { msg } from './models/webtokent';

/**
 * Create http server
 */
const server = http.createServer(app);

/**
 * Crate and configuration websocket
 */
const oi = new WebSocket(server, {
    cors: {
        origin: 'http://localhost:3000'
    }
});
oi.on('connection', (socket) => {
    console.log(socket.id);

    socket.on('send_message', (msg:msg) => {
        socket.broadcast.emit('receive_message', msg);
    });
});


/**
 * Init server
 */
server.listen(PORT, () =>  {
    console.log("server listening on port", PORT);
}); 

