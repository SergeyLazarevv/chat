import * as loginController from "../controllers/loginController"
import * as express from 'express'
import { Router } from 'express'

const authRouter : Router = express.Router();

authRouter.use("/login", loginController.login);
authRouter.post("/registration", loginController.registration);

export default authRouter