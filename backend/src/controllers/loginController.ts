import { Request, Response } from 'express';
import UserService from "../service/MysqlServise/UserService"
import Authentification from '../security/Authentication'
import {Fixtures} from '../fixtures/RolesFixture'
//import "reflect-metadata";

export async function login(request: Request, response: Response) {
    response.send("Вход...")
}
    
export async function registration(request: Request, response: Response) {

    const userService = new UserService

    const login: string = request.body.login
    const password: string = request.body.password
    const email: string = request.body.email

    // const fix = new Fixtures()
    // fix.upload()

    const checkUserExist = await userService.getUser(email)
    console.log('check user in controller', checkUserExist)
    if (checkUserExist) return response.json('this email already used, please log in')

    const hashPassword: string = await Authentification.generateHashPassword(password)
    console.log('hashPassword', hashPassword)

    //const newUser = await userService.addUser(login, password, email)
    
    response.send(hashPassword)
}