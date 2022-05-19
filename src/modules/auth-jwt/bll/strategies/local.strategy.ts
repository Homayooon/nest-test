import {Injectable, UnauthorizedException} from '@nestjs/common';
import {PassportStrategy} from '@nestjs/passport';
import {Strategy} from 'passport-local';
import {AuthJwtService} from "../auth-jwt.service"

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {

    constructor(private authJwtService: AuthJwtService) {
        super(); //config passport local strategy based on passport docs
    }

    /**
     * Validate user credential for login
     * @return state: !== 0 → UnauthorizedException | state: 0 → request.user
     */
    async validate(username: string, password: string): Promise<any> {
        const validationResult = await this.authJwtService.validateUser(username, password);
        if (validationResult.state !== 0) {
            throw new UnauthorizedException();
        }
        // ** important: if validate be succeeded then by RETURN, we set ANY_DATA in req.user
        return {
            id: validationResult.data.id,
        };
    }
}
