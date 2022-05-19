import {ExecutionContext, HttpException, HttpStatus, Injectable} from '@nestjs/common';
import {AuthGuard} from '@nestjs/passport';
import {LoginDto} from '../controller/input-validation';
import {validate} from 'class-validator';

@Injectable()
export class AuthLocalGuard extends AuthGuard('local') {

    async canActivate(context: ExecutionContext) {
        const req = context.switchToHttp().getRequest();
        const validationErrors = await this.validateRequestInput(req.body);
        if (validationErrors.length > 0) {
            throw new HttpException({
                error: 'Bad Request',
                message: validationErrors,
            }, HttpStatus.BAD_REQUEST);
        }
        // if validation be succeeded then AuthLocalGuard will continue the workflow,
        // and it calls LocalStrategy.validate()
        return (await super.canActivate(context)) as boolean;
    }

    /**
     * Validate Login Request input
     * @return {array} - Array of errors
     */
    private async validateRequestInput(input) {
        const loginDto = new LoginDto();
        loginDto.username = input.username;
        loginDto.password = input.password;
        return await validate(loginDto, {
            forbidUnknownValues: true,
            validationError: {
                target: false,
            },
        })
    }

}
