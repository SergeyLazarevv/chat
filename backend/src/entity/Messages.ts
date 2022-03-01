import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, OneToMany, ManyToOne } from "typeorm";
import { User } from "./User"
import { Rooms as Room } from "./Rooms"

@Entity()
export class Messages {

    @PrimaryGeneratedColumn()
    id: number;

    @Column('text', {nullable: true})
    text: string

    @Column({nullable: true})
    image: Array<string>;

    @CreateDateColumn({ name: 'created_at', nullable: false })
    createdAt: Date;

    @OneToMany(() => User, user => user.id, {nullable: false})
    user: User;

    @ManyToOne(() => Room, room => room.id, {nullable: false})
    room: Room;
}