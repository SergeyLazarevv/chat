import { Role } from '../entity/Role'
import { Repository, getConnection } from "typeorm"
//import MysqlDB from '../service/MysqlServise/MysqlDB.ts.old';

export class Fixtures {

    constructor() {
        //super()
    }

    async upload() {

        //if (!this.connection) await this.connectInit()
        const connection = getConnection()
        const userRole = new Role()
        userRole.name = 'USER'  
        await connection.manager.save(userRole)

        const adminRole = new Role()
        adminRole.name = 'ADMIN'
        await connection.manager.save(adminRole)
    }
}

const fixtures = new Fixtures()
fixtures.upload()