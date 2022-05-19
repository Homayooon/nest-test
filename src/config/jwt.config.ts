import {ConfigModule, ConfigService} from '@nestjs/config';
import {JwtModuleOptions} from '@nestjs/jwt';


export const jwtConfig = {
    imports: [ConfigModule],
    useFactory: async (configService: ConfigService): Promise<JwtModuleOptions> =>
        JwtConfig.getConfig(configService),
    inject: [ConfigService]
}

class JwtConfig {
    static getConfig(configService: ConfigService): JwtModuleOptions {
        return {
            secret: configService.get<string>('jwt.secret'),
            signOptions: {
                expiresIn: configService.get<string>('jwt.expiresIn')
            }
        }
    }
}

