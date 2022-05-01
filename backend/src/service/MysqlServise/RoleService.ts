import { Repository } from "typeorm"
import { Role } from '../../entity/Role'
import MysqlDB from "./MysqlDB"

export default class RoleService extends MysqlDB {

    constructor() {
        super()
    }

    async getRole(name: string): Promise<Role[] | undefined> {
        
        const connection = await this.getConnection()
        //console.log('after init in getRole', !!connection)
        const RoleRepository: Repository<Role> = connection.getRepository(Role)
        return await RoleRepository.find({'name': name })
    }
}