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

    async addUser(login: string, password: string, email: string, name: string): Promise<string> {
      
        const connection = await this.getConnection()
        const RoleServise = new RoleService()
    
        const user = new User();
        user.email = email  
        user.password = password
        user.login = login      
        user.firstName = name
    
        const baseRole = await RoleServise.getRole('USER')
        user.role = baseRole

        //console.log('use before save', user)
        
        await connection.manager.save(user)

        const UserRepository: Repository<User> = connection.getRepository(User)
        const newUser: User = await UserRepository.findOne({relations: ['role'], where: {'email': email}})

        const payload = {
            id: newUser.id, 
            role: newUser.role.map(roles => roles.name)
        }
        
        const accessToken = Authentification.generateAccessToken(payload)
        //console.log("newUser token=> ", accessToken)
        return accessToken
    }

    async getUserByMail(email: string): Promise<User | undefined> {

        const connection = await this.getConnection()
        const UserRepository: Repository<User> = connection.getRepository(User)
        return await UserRepository.findOne({'email': email })
    }

    async getUsersBy(): Promise<Array<User> | undefined> {

        const connection = await this.getConnection()
        const UserRepository: Repository<User> = connection.getRepository(User)
        const users = await UserRepository
            .createQueryBuilder("user")
            .select("user.id")
            .addSelect("user.firstName")
            .addSelect("user.lastName")
            .addSelect("user.avatar")
            .addSelect("user.email")
            .groupBy("user.id")
            .getMany();
        return users
    }

    setToken(token: string): void {


    }
}