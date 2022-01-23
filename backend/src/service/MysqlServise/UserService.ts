//import MysqlDB from "./MysqlDB.ts.old"
import { User } from "../../entity/User";
import { Connection, Repository } from "typeorm";
import { Role } from '../../entity/Role'
import Authentification from '../../security/Authentication'
import RoleService from './RoleService'
import { request } from "express";
import MysqlDB from "./MysqlDB";

export default class UserService extends MysqlDB {

    //private readonly userEntity: User

    constructor() {
        super()
    }

    async getAllUsers() {

        //.manager.find(User)
    }

    async addUser(login: string, password: string, email: string): Promise<string> {
        //console.log('init connect in userAdd', !!this.connection)
        //await this.connectInit()
        const connection = await this.getConnection()
        console.log('after init connect in userAdd', !!connection)
        const RoleServise = new RoleService()
        console.log('after create role class', !!connection)
        const user = new User();
        user.email = email  
        user.password = password
        user.login = login      
    
        const baseRole = await RoleServise.getRole('USER')
        console.log('base ROLE', baseRole)
        user.role = baseRole

        console.log('use before save', user)
        
        await connection.manager.save(user)

        const UserRepository: Repository<User> = connection.getRepository(User)
        const newUser: User = await UserRepository.findOne({relations: ['role'], where: {'email': email}});
        //console.log('NEW USERR', newUser)
        //newUser.role.forEach(role => console.log('role name',role.name))

        const payload = {
            id: newUser.id, 
            role: newUser.role.map(roles => roles.name)
        }
        
        const accessToken = Authentification.generateAccessToken(payload)

        console.log("newUser token=> ", accessToken)
        return accessToken
    }

    async getUser(email: string): Promise<User | undefined> {

        //await this.connectInit()

        const connection = await this.getConnection()
        console.log('CONN get user', !!connection)
        const UserRepository: Repository<User> = connection.getRepository(User)
        console.log('1111')
        return await UserRepository.findOne({'email': email })
    }
}