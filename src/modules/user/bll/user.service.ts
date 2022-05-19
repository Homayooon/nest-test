import {Injectable} from "@nestjs/common";
import {InjectRepository} from "@nestjs/typeorm"
import {User} from "../../../db/typeorm-models/user.entity"
import {Repository} from "typeorm"
import * as bcrypt from "bcrypt"
import {BllResult} from "../../../global-dto/global-dto"
import {Role} from "../../../db/typeorm-models/role.entity"
import {UserRole} from "../../../db/typeorm-models/user-role.entity"

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(User) private userRepo: Repository<User>,
        @InjectRepository(Role) private roleRepo: Repository<Role>,
        @InjectRepository(UserRole) private userRoleRepo: Repository<UserRole>,
    ) {
    }

    async getProfile(userId: number): Promise<BllResult> {
        try {
            const user = await this.userRepo.findOne({
                where: {
                    id: userId
                },
                relations: ['roles', 'roles.role']
            })
            const roles = user.roles.map((r) => {
                return {
                    id: r.role.id,
                    role: r.role.name
                }
            })
            const result = {
                ...user,
                roles
            }
            return {
                state: 0,
                msg: 'user info',
                data: result
            }
        } catch (error) {
            throw error
        }
    }

    async getAllUser(): Promise<BllResult> {
        try {
            const users = await this.userRepo.find({
                where: {},
                relations: ['roles', 'roles.role']
            })
            const result = users.map((user) => {
                const roles = user.roles.map((r) => {
                    return {
                        id: r.role.id,
                        role: r.role.name
                    }
                })
                return {
                    ...user,
                    roles
                }
            })

            return {
                state: 0,
                msg: 'users info',
                data: result
            }
        } catch (error) {
            throw error
        }
    }

    async getRoles(userId): Promise<BllResult>{
        try {
            const user = await this.userRepo.findOne({
                where: {
                    id: userId
                },
                relations: ['roles', 'roles.role']
            })
            const roles = user.roles.map((r) => {
                return r.role.name
            })
            return {
                state: 0,
                msg: 'user roles info',
                data: roles
            }
        } catch (error) {
            throw error
        }
    }

    async hashPassword(password: string) {
        const saltOrRounds = 10;
        const salt = await bcrypt.genSalt(saltOrRounds);
        return await bcrypt.hash(password, salt);

    }

}

