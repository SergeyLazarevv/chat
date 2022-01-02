import { Request, Response } from 'express';
import UserService from "../service/MysqlServise/UserService"

export async function addUser(request: Request, response: Response) {

}
    
export async function getUsers(request: Request, response: Response) {
    response.send("Список пользователей...")
}