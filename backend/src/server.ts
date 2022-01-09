'use strict';
import * as express from 'express'
import { Express } from 'express'
import userRouter from './routes/userRouter'
import authRouter from './routes/authRouter'
//const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const cors = require('cors');
var multer  = require('multer');


//require("./service/sockets/index");

const port = 8000;
const app : Express = express();
const upload = multer();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json())
app.use(cors({
  origin: '*'
}));
app.use("/user", upload.array(), userRouter)
app.use("/auth", upload.array(), authRouter)

//app.use(cookieParser());

// app.engine('hbs', exphbs({
//     extname: '.hbs'
// }));

//app.set('view engine', 'hbs');
 

app.listen(port, () => {
  console.log(`server start at http://localhost:${port}`)
})