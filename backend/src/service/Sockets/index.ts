export default function init(server) {
const io = require('socket.io')(server, {
  allowEIO3: true,
  cors: {
    credentials: true,
    origin: ['http://localhost:3000','*'],
    methods: ["GET", "POST"]
  }
});

const users = {};

io.on('connection', (socket: any) => {

  socket.on('setOnline', (token: any) => { 
    console.log('sets online ', token)
    users[socket.id] = token
    console.log(users)
    console.log(Object.keys(users).length)
    io.sockets.emit('getOnline', Object.keys(users).length)
   });

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
    console.log('disconnetc', socket.id)
    delete users[socket.id];
    io.sockets.emit('getOnline', Object.keys(users).length)
    console.log('diss', err)
   });
   socket.broadcast.emit('message', 'Only for you');
   io.emit("message", 'response from message emit');
  
});
console.log('all ', io.sockets.connected)

console.log('sockerts server start')
}