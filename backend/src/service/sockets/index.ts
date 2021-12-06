//import { v4 as uuidv4 } from 'uuid';

const http = require('http');

const server = http.createServer();

const io = require('socket.io')(server, {
  allowEIO3: true,
  cors: {
    credentials: true,
    origin: ['http://localhost:3000','*'],
    methods: ["GET", "POST"]
  }
});

io.on('connection', (socket: any) => {
  console.log('socket in', socket.id)//socket)
  //console.log('users count ', socket.sockets())

  socket.on('event', (data: any) => { 
    console.log('data event', data)
   });

   socket.on('message', (text: string) => { 
    console.log('message event', text)
    if(text == 'hello') {
      //io.emit('message', 'Привет юзер')
      console.log('hello from user id = ' + socket.id)
      socket.broadcast.emit('message', 'Only for you '+ socket.id);
      socket.broadcast.emit('message', 'only 2 ' + socket.id);
    } else {
      io.sockets.emit('message', "Всем привет от пользователя");
    }
   });

   socket.on('login', (data: any) => { 
    console.log('login data ', data)
    io.emit('login', 'wellcome')
   });

  socket.on('disconnect', (err: any) => { 
    console.log('diss', err)
   });
   socket.broadcast.emit('message', 'Only for you');
   io.emit("message", 'response from message emit');
  
});
console.log('all ', io.sockets.connected)
//console.log('skoka', io.sockets().server.engine.socketsCount)
// io.sockets.emit('message', "Это для всех");
server.listen(8080);
console.log('sockerts server start')
