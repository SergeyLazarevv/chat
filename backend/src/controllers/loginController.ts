import { Request, Response } from 'express';

export function login(request: Request, response: Response): void {
    response.send("Вход...")
}
    
export function registration(request: Request, response: Response): void {
    response.send("Регистрация...")
}