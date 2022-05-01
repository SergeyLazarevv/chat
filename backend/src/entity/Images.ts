import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, OneToOne, ManyToOne, ManyToMany } from "typeorm";
import { User } from "./User"
import { Rooms as Room } from "./Rooms"

@Entity()
export class Images {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({nullable: false})
    link: string;

    @CreateDateColumn({ name: 'created_at', nullable: false })
    createdAt: Date;

    @ManyToOne(() => User, user => user.id, {nullable: false})
    user: User;

    @ManyToOne(() => Room, room => room.id, {nullable: true})
    room: Room;
}