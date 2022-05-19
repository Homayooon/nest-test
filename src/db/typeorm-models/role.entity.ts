import {Column, CreateDateColumn, DeleteDateColumn, Entity, JoinTable, ManyToMany, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn} from "typeorm";
import {User} from "./user.entity"
import {UserRole} from "./user-role.entity"

@Entity()
export class Role {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({unique: true})
    name: string;

    @CreateDateColumn()
    createdDate: string;

    @UpdateDateColumn()
    updatedDate: string;

    @DeleteDateColumn()
    deletedDate: string;


    /*
    *  //////////////// | Relations | ////////////////
    * */

    @OneToMany(() => UserRole, userRole => userRole.role)
    public users: UserRole[];

    /*
      *  ///////////////////////////////////////////////
    * */

}
