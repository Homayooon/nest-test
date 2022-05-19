import {Module} from "@nestjs/common";
import {AppController} from "./app.controller";
import {ConfigModule} from "@nestjs/config";
import configuration from './config/configuration.config';

@Module({
    imports: [
        ConfigModule.forRoot({
            isGlobal: true,
            load: [configuration],
            envFilePath: ['.env'],
        }),

    ],
    controllers: [AppController],
    providers: []
})
export class AppModule {}
