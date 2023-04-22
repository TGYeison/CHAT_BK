import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import http from 'http';
import { Server as WebSocket } from 'socket.io';
import mongoose from 'mongoose';

//My modules
import {PORT} from './config';
import websocket from './websocket';


//connect database
mongoose.connect('mongodb://localhost/chatdb')
    .then((db)=> console.log('connect database'))
    .catch((error)=> console.error(error))

// Create http server
const app = express();

app.use(cors());
app.use(morgan('dev'));  

const server = http.createServer(app);


// Crate and configuration websocket
const oi = new WebSocket(server, {
    cors: {
        origin: 'http://localhost:3000'
    }
});

websocket(oi);



// Init server
server.listen(PORT, () =>  {
    console.log("server listening on port", PORT);
}); 

