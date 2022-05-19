import {Column, CreateDateColumn, DeleteDateColumn, Entity, JoinTable, ManyToMany, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn} from "typeorm";
import {User} from "./user.entity"
import {Role} from "./role.entity"

@Entity()
export class UserRole {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    userId: string;

    @Column()
    roleId: string;

    /*
    *  //////////////// | Relations | ////////////////
    * */

    @ManyToOne(() => User, (user) => user.roles)
    public user: User

    @ManyToOne(() => Role, (role) => role.users)
    public role: Role

    /*
      *  ///////////////////////////////////////////////
    * */

}
