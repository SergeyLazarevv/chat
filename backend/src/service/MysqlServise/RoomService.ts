import { Repository } from "typeorm"
import { Role } from '../../entity/Role'
import { Rooms as Room } from '../../entity/Rooms'
import { User } from '../../entity/User'
import MysqlDB from "./MysqlDB"

export default class RoomService extends MysqlDB {

    constructor() {
        super()
    }

    async getRooms(token: string): Promise<Room[] | undefined> {
        console.log('getting user rooms')
        const connection = await this.getConnection()
        const UserRepository: Repository<User> = connection.getRepository(User)
        const user = await UserRepository.find({token})
        return user['rooms']
    }

    async addRoom(room: Room): Promise<boolean> {

        return true
    }

    async deleteRoom(room: Room): Promise<boolean> {

        return true
    }

    async addToRoom(user: User, room: Room): Promise<boolean> {

        return true
    }

    async removeFromRoom(user: User, room: Room): Promise<boolean> {

        return true
    }
}