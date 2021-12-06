'use strict';
import  express from 'express'
import { Express } from 'express'
import userRouter from './routes/userRouter'
import authRouter from './routes/authRouter'
//const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');


require("./service/sockets/index");

const port = 8000;
const app : Express = express();



app.use("/user", userRouter)
app.use("/auth", authRouter)

app.use(bodyParser.urlencoded({ extended: true }));
//app.use(cookieParser());

// app.engine('hbs', exphbs({
//     extname: '.hbs'
// }));

app.set('view engine', 'hbs');
 

app.listen(port, () => {
  console.log(`server start at http://localhost:${port}`)
})