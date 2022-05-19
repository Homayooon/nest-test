import {Column, CreateDateColumn, DeleteDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn} from "typeorm";
import {UserRole} from "./user-role.entity"

@Entity()
export class User {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({unique: true})
    username: string;

    @Column({select: false})
    password: string;

    @CreateDateColumn()
    createdDate: string;

    @UpdateDateColumn()
    updatedDate: string;

    @DeleteDateColumn()
    deletedDate: string;

    /*
    *  //////////////// | Relations | ////////////////
    * */
    @OneToMany(() => UserRole, userRole => userRole.user)
    public roles: UserRole[];

    /*
      *  ///////////////////////////////////////////////
    * */
}
