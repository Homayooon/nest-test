import {Controller, Get, HttpException, HttpStatus} from "@nestjs/common";
import {UserService} from "../bll/user.service";

@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) {
    }

    @Get('getProfile')
    async getProfile() {
        const result = await this.userService.getProfile(2)

        throw new HttpException({
            state: 0,
            msg: 'user info',
            data: result.data
        }, HttpStatus.OK);
    }


    @Get('getAll')
    async getAll() {
        const result = await this.userService.getAllUser()

        throw new HttpException({
            state: 0,
            msg: 'users info',
            data: result.data
        }, HttpStatus.OK);
    }


}
