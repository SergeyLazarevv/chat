'use strict';
import express from 'express'
import userRouter from './routes/userRoute'

const port = 8080;
const host = '0.0.0.0';
const app = express();

app.use("/user",userRouter)
app.get('/', (req: any, res: any) => {
   res.send('Hello World ololo2');
});

console.log('create app')

app.listen(port, host);

console.log(`running on http://${host}:${port}`);
