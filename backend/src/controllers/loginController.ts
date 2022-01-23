import { Request, Response } from 'express';
import UserService from "../service/MysqlServise/UserService"
import Authentification from '../security/Authentication'
import {Fixtures} from '../fixtures/RolesFixture'
//import "reflect-metadata";

export async function login(request: Request, response: Response) {
    response.send("Вход...")
}
    
export async function registration(request: Request, response: Response) {
    console.log('init user servise in controller')
    const userService = new UserService
    console.log('after init user service in contriller')
    const login: string = JSON.parse(request.body.login)
    const password: string = JSON.parse(request.body.password)
    const email: string = JSON.parse(request.body.email)

    const checkUserExist = await userService.getUser(email)
    if (checkUserExist) return response.json('this email already used, please log in')

    const hashPassword: string = await Authentification.generateHashPassword(password)
    const accessToken: string = await userService.addUser(login, hashPassword, email)
    
    response.send(accessToken)
}