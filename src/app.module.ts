import {Module} from "@nestjs/common";
import {AppController} from "./app.controller";
import {UserModule} from "./modules/user/user.module";
import {ConfigModule} from "@nestjs/config";
import configuration from './config/configuration.config';
import {mySqlTypeOrmConfig} from "./config/typeorm.config";
import {TypeOrmModule} from "@nestjs/typeorm";


@Module({
    imports: [
        ConfigModule.forRoot({
            isGlobal: true,
            load: [configuration],
            envFilePath: ['.env'],
        }),
        TypeOrmModule.forRootAsync(mySqlTypeOrmConfig),
        UserModule
    ],
    controllers: [AppController],
    providers: []
})
export class AppModule {}
