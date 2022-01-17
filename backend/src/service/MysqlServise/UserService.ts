import MysqlDB from "./MysqlDB"
import { User } from "../../entity/User";
import { Connection, getConnection, Repository } from "typeorm";
import { Role } from '../../entity/Role'
import Authentification from '../../security/Authentication'
import RoleService from './RoleService'
import { request } from "express";
var jwt = require('jsonwebtoken');
let fs = require('fs')

export default class UserService extends MysqlDB {

    //private readonly userEntity: User

    constructor() {
        super()
    }

    async getAllUsers() {

        //.manager.find(User)
    }

    async addUser(login: string, password: string, email: string): Promise<User> {
        console.log('init connect in userAdd', !!this.connection)
        //await this.connectInit()
        const connection = getConnection()
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

        let payload = {
            id: newUser.id, 
            role: newUser.role.map(roles => roles.name)
        }
        
        const key = fs.readFileSync(__dirname+'/../../../jwtRS256.key')

        //const payloadJSON = JSON.stringify(payload)

        //console.log('PAYLOAD ', payload)

        //let accessToken = await Authentification.generateAccessToken(payload)
        ////TODO: check token
        let accessToken = jwt.sign(payload, key);

        console.log("newUser token=> ", accessToken)
        return accessToken
    }

    async getUser(email: string): Promise<User | undefined> {

        await this.connectInit()

        const connection = getConnection()
        const UserRepository: Repository<User> = connection.getRepository(User)
        return await UserRepository.findOne({'email': email })
    }
}