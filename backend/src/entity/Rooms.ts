import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable, OneToMany } from "typeorm";
import { User } from "./User"
import { Messages } from "./Messages";

@Entity()
export class Rooms {

    @PrimaryGeneratedColumn()
    id: number;

    @ManyToMany(() => User, user => user.id)
    users: Array<User>;

    @OneToMany(() => Messages, messages => messages.id)
    messages: Array<Messages>;
}