import * as userController from "../controllers/userController"
import * as express from 'express'
import { Router } from 'express'

const userRouter : Router = express.Router();

userRouter.use("/user/create", userController.addUser);
userRouter.post("/get-users-by", userController.getUsersBy);
userRouter.post("/get-all-users", userController.getAllUsers);

export default userRouter