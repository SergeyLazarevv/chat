import { Request, Response } from 'express';
import UserService from "../service/MysqlServise/UserService"
import Authentification from '../security/Authentication'
import {Fixtures} from '../fixtures/RolesFixture'

export async function login(request: Request, response: Response) {
    
    const login: string = JSON.parse(request.body.login)
    const password: string = JSON.parse(request.body.password)

    const userService = new UserService
    const user = await userService.getUserByMail(login)

    if(user) {
        //console.log('user pass', user.password)
        const checkPassword: string = await Authentification.verifyHashPassword(password, user.password)
        if(checkPassword) {
            const verifyToken: string = await Authentification.generateAccessToken(JSON.stringify(user))
            response.send(verifyToken)
        } else {
            response.send('USER_NOT_FOUND')    
        }
    } else {
        response.send('USER_NOT_FOUND')
    }
}
    
export async function registration(request: Request, response: Response) {
    //console.log('init user servise in controller')
    const userService = new UserService
    //console.log('after init user service in contriller', request.body)
    const login: string = JSON.parse(request.body.login)
    const password: string = JSON.parse(request.body.password)
    const email: string = JSON.parse(request.body.email)
    const name: string = JSON.parse(request.body.name)

    const checkUserExist = await userService.getUserByMail(email)
    if (checkUserExist) return response.json('USER_LOGIN_EXIST')

    const hashPassword: string = await Authentification.generateHashPassword(password)
    const accessToken: string = await userService.addUser(login, hashPassword, email, name)
    
    response.send(accessToken)
}