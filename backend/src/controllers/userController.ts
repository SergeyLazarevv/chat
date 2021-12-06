import { Request, Response } from 'express';

export function addUser(request: Request, response: Response): void {
    response.send("Добавление пользователя...")
}
    
export function getUsers(request: Request, response: Response): void {
    response.send("Список пользователей...")
}