import { Role } from '../entity/Role'
import MysqlDB from '../service/MysqlServise/MysqlDB';

export class Fixtures extends MysqlDB {

    constructor() {
        super()
    }

    async upload() {

        await this.connectInit()
    
        const userRole = new Role()
        userRole.name = 'USER'  
        await this.connection.manager.save(userRole)

        const adminRole = new Role()
        adminRole.name = 'ADMIN'
        await this.connection.manager.save(adminRole)
    }
}

const fixtures = new Fixtures()
fixtures.upload()