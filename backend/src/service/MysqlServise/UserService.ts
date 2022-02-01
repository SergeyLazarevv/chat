//import MysqlDB from "./MysqlDB.ts.old"
import { User } from "../../entity/User";
import { Connection, Repository } from "typeorm";
import { Role } from '../../entity/Role'
import Authentification from '../../security/Authentication'
import RoleService from './RoleService'
import { request } from "express";
import MysqlDB from "./MysqlDB";

export default class UserService extends MysqlDB {

    constructor() {
        super()
    }

    async getAllUsers() {

        //.manager.find(User)
    }

    async addUser(login: string, password: string, email: string): Promise<string> {
      
        const connection = await this.getConnection()
        const RoleServise = new RoleService()
    
        const user = new User();
        user.email = email  
        user.password = password
        user.login = login      
    
        const baseRole = await RoleServise.getRole('USER')
        user.role = baseRole

        console.log('use before save', user)
        
        await connection.manager.save(user)

        const UserRepository: Repository<User> = connection.getRepository(User)
        const newUser: User = await UserRepository.findOne({relations: ['role'], where: {'email': email}})

        const payload = {
            id: newUser.id, 
            role: newUser.role.map(roles => roles.name)
        }
        
        const accessToken = Authentification.generateAccessToken(payload)
        console.log("newUser token=> ", accessToken)
        return accessToken
    }

    async getUserByMail(email: string): Promise<User | undefined> {

        const connection = await this.getConnection()
        const UserRepository: Repository<User> = connection.getRepository(User)
        return await UserRepository.findOne({'email': email })
    }
}