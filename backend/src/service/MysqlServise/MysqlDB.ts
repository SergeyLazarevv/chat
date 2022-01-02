import "reflect-metadata";
import {createConnection, Connection} from "typeorm";

export default abstract class MysqlDB {

    protected connection: Connection

    async init(): Promise<void> {

        await createConnection().then(async (connection: Connection) => {
        
            this.connection = connection
        }).catch(error => console.log('ORM ERROR', error));
    }
}