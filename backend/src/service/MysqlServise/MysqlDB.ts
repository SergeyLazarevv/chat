import "reflect-metadata";
import {createConnection, getConnection, Connection, getConnectionManager} from "typeorm";

export default abstract class MysqlDB {

    async getConnection(): Promise<Connection> {
    
        const manager = getConnectionManager()
        let newConnection: Connection | undefined
        
        if(!manager.has('default')) {
            console.log('cteate new connection')
            await createConnection().then(async (connection: Connection) => {
                newConnection = connection
            }).catch(error => {
                console.log('ORM ERROR', error)
            })
        } else {
            console.log('connection exist')
            return getConnection()
        }

        return newConnection
    }
}