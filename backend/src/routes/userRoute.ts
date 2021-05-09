import * as userController from "../controllers/userController"
import express from 'express'

const userRouter = express.Router();

userRouter.use("/create", userController.addUser);
userRouter.use("/", userController.getUsers);

export default userRouter