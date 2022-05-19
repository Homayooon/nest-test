import {MysqlConnectionOptions} from 'typeorm/driver/mysql/MysqlConnectionOptions';

const config: MysqlConnectionOptions = {
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: 'root',
    database: 'nest-test',
    synchronize: false,
    entities: ['src/db/typeorm-models/**/*.entity.ts'],
    migrations: ['dist/src/db/typeorm-migrations/*.js'],
    cli: {
        migrationsDir: 'src/db/typeorm-migrations',
    },
};

export default config;
