import {Injectable} from '@nestjs/common';
import {BllResult} from "../../../global-dto/global-dto";
import * as bcrypt from "bcrypt"
import {JwtService} from "@nestjs/jwt"
import {InjectRepository} from "@nestjs/typeorm"
import {User} from "../../../db/typeorm-models/user.entity"
import {Repository} from "typeorm"

@Injectable()
export class AuthJwtService {
    constructor(
        private jwtService: JwtService,
        @InjectRepository(User) private userRepo: Repository<User>,
    ) {
    }

    /**
     * Validate a user
     * @return state: 0 → user credential is valid | state: 1 → username is Not valid | state: 2 → password is Not valid
     */
    async validateUser(username: string, password: string): Promise<BllResult> {
        try {
            const user = await this.userRepo.createQueryBuilder('user')
                .where('user.username = :username', { username: username })
                .addSelect('user.password')
                .getOne();
            if (!user) {
                return {
                    state: 1,
                    msg: 'username is not valid',
                };
            }
            const isMatch = await bcrypt.compare(password, user.password);
            if (!isMatch) {
                return {
                    state: 2,
                    msg: 'password is not valid',
                };
            }
            // we should not expose the password field
            delete user.password;
            return {
                state: 0,
                msg: 'user information',
                data: user,
            };
        } catch (error) {
            throw error
        }
    }

    /**
     * JWT Login for a user (generate jwt token for user)
     * @return {string} - jwt token
     */
    async jwtLogin(user: any): Promise<string> {
        const payload = {name: user.createdDate, sub: user.id};
        return await this.jwtService.signAsync(payload);
    }

    async verifyJwt(token) {
        return await this.jwtService.verifyAsync(token)
    }
}
