import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity()
export class Role {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({nullable: false})
    name: string;

    @Column({nullable: true})
    description: string;
}