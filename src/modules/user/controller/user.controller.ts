import {Controller, Get, HttpException, HttpStatus, Req, UseGuards} from "@nestjs/common";
import {UserService} from "../bll/user.service";
import {AuthenticatedJwtGuard} from "../../auth-jwt/guard/authenticated-jwt.guard"

@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) {
    }

    @UseGuards(AuthenticatedJwtGuard)
    @Get('getProfile')
    async getProfile(@Req() req) {
        const result = await this.userService.getProfile(req.user.id)

        throw new HttpException({
            state: 0,
            msg: 'user info',
            data: result.data
        }, HttpStatus.OK);
    }


    @UseGuards(AuthenticatedJwtGuard)
    @Get('getAll')
    async getAll(@Req() req) {

        const roles: string[] = (await this.userService.getRoles(req.user.id)).data
        if (!roles.includes("Manager")) {
            throw new HttpException({
                state: -99,
                msg: 'you have no access for this action!',
            }, HttpStatus.FORBIDDEN);

        }
        const result = await this.userService.getAllUser()

        throw new HttpException({
            state: 0,
            msg: 'users info',
            data: result.data
        }, HttpStatus.OK);
    }


}
