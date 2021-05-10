import { Request, Response } from 'express';

function addUser(request: Request, response: Response): void {
    response.send("Добавление пользователя...")
}

function getUsers(request: Request, response: Response): void {
    response.send("Список пользователей...")
}

export { addUser , getUsers }