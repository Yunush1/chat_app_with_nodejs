import {DataSourceOptions} from "typeorm/data-source/DataSourceOptions";
import {TextMessageEntity} from "../domain/entity/text-message-entity";
import {UserEntity} from "../domain/entity/user-entity";

export const dbDatasourceOptions: DataSourceOptions = {
    // TODO: replace with your database configuration in the fields bellow:
    type: "mysql",
    host: "mysql-2a5304ad-livenaturelife01-9d5f.i.aivencloud.com", //localhost mysql-2a5304ad-livenaturelife01-9d5f.i.aivencloud.com
    port: 22775, //22775
    username: "avnadmin", //avnadmin
    password: "AVNS_TZLplBewSr7erq5u_O7", //AVNS_TZLplBewSr7erq5u_O7
    database: "flutter_chat_app_with_nodejs",

    // No need to change this fields bellow
    synchronize: true,
    logging: false,
    charset : 'utf8mb4',
    entities: [TextMessageEntity, UserEntity],
    migrations: [],
    subscribers: [],

    
        // "type": "mongodb",
        // "host": "localhost",
        // "port": 27017,
        // "username": null,
        // "password": null,
        // "database": "flutter_chat_app",
        // "useUnifiedTopology": true,
        // "useNewUrlParser": true,
        // "synchronize": false,
        // "entities": [TextMessageEntity, UserEntity]
      
      
}
