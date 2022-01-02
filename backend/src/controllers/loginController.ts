import { Request, Response } from 'express';
import UserService from "../service/MysqlServise/UserService"

export async function login(request: Request, response: Response) {
    response.send("Вход...")
}
    
export async function registration(request: Request, response: Response) {

    const userService = new UserService
    console.log('11111')
    const newUser = await userService.addUser()
    console.log('2222')
    console.log('new res', newUser)
    response.send(newUser)
}