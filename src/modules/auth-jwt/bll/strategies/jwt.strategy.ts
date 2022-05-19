import {Injectable} from '@nestjs/common';
import {PassportStrategy} from '@nestjs/passport';
import {ExtractJwt, Strategy} from 'passport-jwt';
import {ConfigService} from '@nestjs/config';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
    constructor(private configService: ConfigService) {
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpiration: configService.get<string>('jwt.ignoreExpiration') !== 'NO',
            secretOrKey: configService.get<string>('jwt.secret'),
        });
    }

    /**
     * Set Custom data on request.user
     * @return request.user
     */
    async validate(payload: any) {
        // by return, we set ANY_DATA in req.user
        return {
            id: payload.sub,
            name: payload.name,
        }
    }
}
