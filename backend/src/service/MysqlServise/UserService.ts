import MysqlDB from "./MysqlDB"
import { User } from "../../entity/User";
import { Connection } from "typeorm";

export default class UserService extends MysqlDB {

    constructor() {
        super()
    }

    async getAllUsers() {

        //.manager.find(User)
    }

    async addUser(): Promise<User> {
        
        await this.init()
        //console.log('CONN', this.connection)
        
        const user = new User();
        user.firstName = "Serega2";
        user.lastName = "EtoIa";
        user.age = 333;
        //console.log('CONNECT', this.connection)
        await this.connection.manager.save(user);

        const UserRepository = this.connection.getRepository(User);

        let res = await UserRepository.findOne({'firstName': user.firstName });
        console.log("rrr", res)
        return res
    }
}