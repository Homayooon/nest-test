import {Module} from '@nestjs/common';
import {JwtStrategy} from './bll/strategies/jwt.strategy';
import {PassportModule} from '@nestjs/passport';
import {AuthJwtService} from "./bll/auth-jwt.service"
import {AuthJwtController} from "./controller/auth-jwt.controller"
import {JwtModule} from "@nestjs/jwt"
import {jwtConfig} from "../../config/jwt.config"
import {LocalStrategy} from "./bll/strategies/local.strategy"
import {TypeOrmModule} from "@nestjs/typeorm"
import {User} from "../../db/typeorm-models/user.entity"


@Module({
    imports: [
        PassportModule,
        JwtModule.registerAsync(jwtConfig),
        TypeOrmModule.forFeature([
            User
        ])
    ],
    controllers: [AuthJwtController],
    providers: [AuthJwtService, LocalStrategy, JwtStrategy],
    exports: [AuthJwtService]
})
export class AuthJwtModule {
}


