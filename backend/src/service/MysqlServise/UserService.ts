import MysqlDB from "./MysqlDB"
import { User } from "../../entity/User";
import { Connection, getRepository, Repository } from "typeorm";

export default class UserService extends MysqlDB {

    //private readonly userEntity: User

    constructor() {
        super()
    }

    async getAllUsers() {

        //.manager.find(User)
    }

    async addUser(login: string, password: string, email: string): Promise<User> {
        
        await this.connectInit()
        
        const user = new User();
        user.email = email  
        user.password = password
        user.login = login      
        //console.log('CONNECT', this.connection)
        await this.connection.manager.save(user)

        const UserRepository: Repository<User> = this.connection.getRepository(User)

        let newUser = await UserRepository.findOne({'email': user.email });
        console.log("newUser => ", newUser)
        return newUser
    }

    async getUser(email: string): Promise<User | undefined> {

        await this.connectInit()

        const UserRepository: Repository<User> = this.connection.getRepository(User)
        return await UserRepository.findOne({'email': email })
    }
}