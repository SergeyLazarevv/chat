import {Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable} from "typeorm";
import { Role } from './Role'

@Entity()
export class User {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({nullable: true})
    firstName: string = null;

    @Column({nullable: true})
    lastName: string = null;

    @Column({nullable: true})
    age: number = null;

    @Column({nullable: true})
    token: string = null;

    @Column({nullable: true, unique: false})
    phone: number = null;

    @Column({nullable: true})
    avatar: string = null;

    @Column({nullable: true, unique: false})
    email: string;

    @Column({nullable: false})
    password: string;

    @Column({nullable: false})
    login: string;

    @ManyToMany(() => Role, role => role.name)
    @JoinTable()
    role: Array<Role>;
}
