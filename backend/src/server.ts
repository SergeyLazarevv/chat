'use strict';
import  express from 'express'
import { Express } from 'express'
import userRouter from './routes/userRoute'

const port = 8080;
const host = '0.0.0.0';
const app : Express = express();

app.use("/user",userRouter)
app.get('/', (req: any, res: any) => {
   res.send('Hello World ololo2');
});

app.listen(port, host);

console.log(`running on http://${host}:${port}`);
