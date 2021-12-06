import * as userController from "../controllers/userController"
import express from 'express'
import { Router } from 'express'

const userRouter : Router = express.Router();

userRouter.use("/create", userController.addUser);
userRouter.use("/", userController.getUsers);

export default userRouter