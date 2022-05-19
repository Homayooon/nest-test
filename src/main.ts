import {NestFactory} from '@nestjs/core';
import {AppModule} from './app.module';
import {ConfigService} from '@nestjs/config';
import {BadRequestException, ValidationPipe} from "@nestjs/common"

async function bootstrap() {

    const app = await NestFactory.create(AppModule);
    const configService = app.get(ConfigService);

    //region CORS config

    // If you do not want to block REST tools or server-to-server requests, add a !origin check in the origin function
    const whitelist = [
        'http://anotherhost.example',
    ];
    app.enableCors({
        origin: function (origin, callback) {
            if (whitelist.indexOf(origin) !== -1 || !origin) {
                callback(null, true)
            } else {
                callback(new Error('Not allowed by CORS'))
            }
        },
        credentials: true,
    });

    //endregion


    //region Route input validator
    app.useGlobalPipes(new ValidationPipe({
        exceptionFactory: (errors) => new BadRequestException(errors),
        validationError: {target: false}, transform: true
    }))
    //endregion


    await app.listen(configService.get<number>('httpPort'));

}

bootstrap();
