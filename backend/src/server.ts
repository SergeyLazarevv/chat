'use strict';
import  express from 'express'
import { Express } from 'express'
import userRouter from './routes/userRoute'
const WebSocket = require('ws')
const http = require('http');

const port = 8080;
const host = '0.0.0.0';
const app : Express = express();
const wss = new WebSocket.Server({ noServer: true })


app.use("/user",userRouter)

app.use( (req, res, next) => {
  // res.header("Access-Control-Allow-Origin", "http://localhost:3000")
  res.header('Access-Control-Allow-Origin', '*')
  res.header("Access-Control-Allow-Credentials", "true")
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE')
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
  next();
});


// Массив со всеми подключениями

const connections: any = [];
console.log('init connection arr',connections.length)

function accept(req: any, res: any) {
   // все входящие запросы должны использовать websockets
   if (!req.headers.upgrade || req.headers.upgrade.toLowerCase() != 'websocket') {
     res.end();
     return;
   }
 
   // может быть заголовок Connection: keep-alive, Upgrade
   if (!req.headers.connection.match(/\bupgrade\b/i)) {
     res.end();
     return;
   }
   //console.log('wss',wss)
   wss.handleUpgrade(req, req.socket, Buffer.alloc(0), onConnect);
   console.log('clients',wss.clients)
}
 
 function onConnect(ws: any) {
  connections.push('user')
  console.log(connections)
   //console.log('ws',ws)
   ws.on('message', function (message: any) {
     let name = message.match(/([\p{Alpha}\p{M}\p{Nd}\p{Pc}\p{Join_C}]+)$/gu) || "Гость";
     ws.send(`Привет с сервера, ${name}!`);
 
     //setTimeout(() => ws.send("2021 hello!"), 35000);
   });
 }
 //console.log(module)
 if (!module.parent) {
   http.createServer(accept).listen(port);
 } else {
   exports.accept = accept;
}

console.log(`running on http://${host}:${port}`);




// 'use strict';
// import  express from 'express'
// import { Express } from 'express'
// import userRouter from './routes/userRoute'
// //const WebSocket = require('ws')
// import socketService from './service/socketService'
// const http = require('http');

// const port = 8080;
// const host = '0.0.0.0';
// const app : Express = express();
// //const wss = new WebSocket.Server({ noServer: true })

// app.use("/user",userRouter)

// // Массив со всеми подключениями
// //const connections: any = [];


// function accept(req: any, res: any) {
//    // все входящие запросы должны использовать websockets
//    if (!req.headers.upgrade || req.headers.upgrade.toLowerCase() != 'websocket') {
//      res.end();
//      return;
//    }
 
//    // может быть заголовок Connection: keep-alive, Upgrade
//    if (!req.headers.connection.match(/\bupgrade\b/i)) {
//      res.end();
//      return;
//    }
 
//    const socket = new socketService(req, req.socket, Buffer.alloc(0));
//    setTimeout(() => socket.send(), 35000);
// }
 
//  if (!module.parent) {
//    http.createServer(accept).listen(port);
//  } else {
//    exports.accept = accept;
// }

// console.log(`running on http://${host}:${port}`);
