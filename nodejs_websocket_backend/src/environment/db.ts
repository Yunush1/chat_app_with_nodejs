import {DataSourceOptions} from "typeorm/data-source/DataSourceOptions";
import {TextMessageEntity} from "../domain/entity/text-message-entity";
import {UserEntity} from "../domain/entity/user-entity";

export const dbDatasourceOptions: DataSourceOptions = {
    // TODO: replace with your database configuration in the fields bellow:
    type: "mysql",
    host: "127.0.0.1", //localhost
    port: 3306,
    username: "root",
    password: "",
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
