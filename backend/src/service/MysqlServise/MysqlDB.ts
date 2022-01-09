import "reflect-metadata";
import {createConnection, Connection} from "typeorm";

export default abstract class MysqlDB {

    protected connection: Connection

    // constructor() {
    //     this.connection = 
    // }

    async connectInit(): Promise<void> {
        console.log('CONNECT', !!this.connection)
        if(!this.connection) {
            console.log('INN')
            await createConnection().then(async (connection: Connection) => {
            
                this.connection = connection
            }).catch(error => {
                console.log('ORM ERROR', error)
                console.log('is commect', !!this.connection)
            })
        }
    }
}