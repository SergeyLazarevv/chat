import MysqlDB from "./MysqlDB"
import { Repository, getConnection } from "typeorm";
import { Role } from '../../entity/Role'

export default class RoleService extends MysqlDB {

    constructor() {
        super()
    }

    async getRole(name: string): Promise<Role[] | undefined> {
        console.log('before init in getRole', !!this.connection)
        //await this.connectInit()
        const connection = getConnection()
        console.log('after init in getRole', !!connection)
        const RoleRepository: Repository<Role> = connection.getRepository(Role)
        return await RoleRepository.find({'name': name })
    }
}