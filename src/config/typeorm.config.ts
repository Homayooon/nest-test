import {TypeOrmModuleAsyncOptions, TypeOrmModuleOptions} from '@nestjs/typeorm';
import {ConfigModule, ConfigService} from '@nestjs/config';

export const mySqlTypeOrmConfig: TypeOrmModuleAsyncOptions = {
    imports: [ConfigModule],
    useFactory: async (configService: ConfigService): Promise<TypeOrmModuleOptions> =>
        MySqlTypeOrmConfig.getConfig(configService),
    inject: [ConfigService]
}

class MySqlTypeOrmConfig {

    static getConfig(configService: ConfigService): TypeOrmModuleOptions {
        return {
            type: 'mysql',
            host: configService.get<string>('mySqlTypeOrm.host'),
            port: configService.get<number>('mySqlTypeOrm.port'),
            username: configService.get<string>('mySqlTypeOrm.username'),
            password: configService.get<string>('mySqlTypeOrm.password'),
            database: configService.get<string>('mySqlTypeOrm.database'),
            synchronize: configService.get<boolean>('mySqlTypeOrm.synchronize'),
            entities: [

            ],
        }
    }
}

