import {Controller, HttpException, HttpStatus, Post, Req, UseGuards} from '@nestjs/common';
import {AuthenticatedJwtGuard} from '../guard/authenticated-jwt.guard';
import {AuthJwtService} from "../bll/auth-jwt.service"
import {AuthLocalGuard} from "../guard/auth-local.guard"

@Controller('auth-jwt')
export class AuthJwtController {
    constructor(
        private authJwtService: AuthJwtService
    ) {
    }

    // Route: /auth-jwt/login | Ctrl.login
    @Post('login')
    @UseGuards(AuthLocalGuard)
    async login(@Req() req) {
        throw new HttpException({
            state: 0,
            msg: 'jwt token',
            data: {
                accessToken: await this.authJwtService.jwtLogin(req.user)
            }
        }, HttpStatus.OK);
    }

    @Post('protected')
    @UseGuards(AuthenticatedJwtGuard)
    protected(@Req() req) {
        // req.user is available
        return 'OK'
    }

}
