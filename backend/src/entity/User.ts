import {Entity, PrimaryGeneratedColumn, Column, ManyToMany, OneToMany, JoinTable} from "typeorm";
import { Role } from './Role'
import { Rooms } from "./Rooms"
import { Images } from "./Images"

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

    @ManyToMany(() => Rooms, rooms => rooms.id)
    @JoinTable()
    rooms: Array<Rooms>

    @OneToMany(() => Images, images => images.id)
    @JoinTable()
    images: Array<Images>
}
