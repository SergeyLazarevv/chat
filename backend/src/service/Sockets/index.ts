import RoomService from "../MysqlServise/RoomService";
import _UserServise from "../MysqlServise/UserService";
import Auth from "../../security/Authentication"

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
const RoomServise = new RoomService();
const UserServise = new _UserServise();

io.on('connection', (socket: any) => {

  socket.on('setOnline', async (token: any) => { 
    console.log('sets online ', token)
    // let rooms = RoomServise.getRooms(token)
    // console.log("ROOMS ", rooms)
    
    const user = await Auth.verifyToken(token)
    users[socket.id] = user

    console.log(users)
    console.log('emit new online, current online', Object.keys(users).length)
    io.sockets.emit('updateOnline', user)
   });

  //socket.on('logO')

  /////////////////////////////////////////////

  socket.on('addUser', (data: any) => { 
    console.log('data event', data)
   });

  /////////////////////////////

  socket.on('logOut', () => {
    console.log('logOut ', users[socket.id].email)
    console.log(users[socket.id].email)
    console.log(users[socket.id]['email'])
    console.log(users[socket.id])
    io.sockets.emit('removeOnline', users[socket.id])
    delete users[socket.id];
    console.log('current online ', Object.keys(users).length)
  })

  ///////////////////////////////////////

  socket.on('getUsers', async () => { 
    console.log('getting users')
    let dbUsers = await UserServise.getUsersBy();
    if(Object.keys(users).length) {

     let newUsers = dbUsers.map(dbUser => {
       dbUser['online'] = !!Object.values(users).find((user) => {
         //console.log('user ', user['email'])
         //console.log('dbUser ', dbUser['email'])
         return user['email'] === dbUser['email']}
         )
       return dbUser
      })
    //  dbUsers.map(user => {
    //    console.log(user)
    //    console.log(Object.values(users).find((user) => user['email'] === dbUsers['user_email']))
    //   })

    //   console.log( Object.values(users))
    //   console.log()
      //console.log('new Users ', newUsers)
      io.emit('setUsers', newUsers);
    } else {
      io.emit('setUsers', users);
    }
   });

  //////////////////////////////////

  socket.on('event', (data: any) => { 
    console.log('data event', data)
   });

   ////////////////////////////////////////////

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

   ////////////////////////

   socket.on('login', (data: any) => { 
    console.log('login data ', data)
    io.emit('login', 'wellcome')
   });

   //////////////////////////

  socket.on('disconnect', (mess: any) => { 
    console.log('disconnect socket id', socket.id)
    io.sockets.emit('removeOnline', users[socket.id])
    delete users[socket.id];
    console.log('users ', users)
    console.log('disconnect message', mess)
    console.log('current online ', Object.keys(users).length)
   });

   //////////////////////////////////

   //socket.broadcast.emit('message', 'Only for you');
   //io.emit("message", 'response from message emit');
  
});
console.log('all ', io.sockets.connected)

console.log('sockerts server start')
}