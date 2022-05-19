import {Module} from "@nestjs/common";
import {UserService} from './bll/user.service';
import {UserController} from './controller/user.controller';
import {TypeOrmModule} from "@nestjs/typeorm"
import {User} from "../../db/typeorm-models/user.entity"
import {Role} from "../../db/typeorm-models/role.entity"
import {UserRole} from "../../db/typeorm-models/user-role.entity"

@Module({
    imports: [
        TypeOrmModule.forFeature([
            User,
            Role,
            UserRole
        ])
    ],
    providers: [UserService],
    controllers: [UserController]
})
export class UserModule {
}
