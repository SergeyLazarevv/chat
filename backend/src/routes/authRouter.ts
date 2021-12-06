import * as loginController from "../controllers/loginController"
import express from 'express'
import { Router } from 'express'

const authRouter : Router = express.Router();

authRouter.use("/login", loginController.login);
authRouter.use("/registration", loginController.registration);

export default authRouter