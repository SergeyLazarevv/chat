'use strict';
import  express from 'express'
import { Express } from 'express'
import userRouter from './routes/userRoute'
import socketService from './service/socketService'
import { v4 as uuidv4 } from 'uuid';

const http = require('http');

const port = 8080;
const host = '0.0.0.0';
const app : Express = express();



app.use("/user",userRouter)

// app.use( (req, res, next) => {
//   res.header("Access-Control-Allow-Origin", "http://localhost:3000")
//   //res.header('Access-Control-Allow-Origin', '*')
//   res.header("Access-Control-Allow-Credentials", "true")
//   res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE')
//   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
//   next();
// });


// Массив со всеми подключениями
const connections: any = [];
console.log('init connection arr',connections.length)
 
const server = http.createServer();

const io = require('socket.io')(server, {
  allowEIO3: true,
  cors: {
    credentials: true,
    origin: ['http://localhost:3000','*'],
    methods: ["GET", "POST"]
  }
});

io.on('connection', (client: any) => {
  console.log('client',client)
  client.on('event', (data: any) => { 
    console.log('data')
   });
  client.on('disconnect', (err: any) => { 
    console.log('diss', err)
   });
});

server.listen(8080);

console.log(`running on http://${host}:${port}`);