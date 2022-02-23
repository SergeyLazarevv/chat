import { Request, Response } from 'express';
import UserService from "../service/MysqlServise/UserService"

export async function addUser(request: Request, response: Response) {

}

export async function getAllUsers(request: Request, response: Response) {
    response.send('all users list...')
}
    
export async function getUsersBy(request: Request, response: Response) {
    
    const userService = new UserService
    const users = await userService.getUsersBy()
    response.send(users)
}