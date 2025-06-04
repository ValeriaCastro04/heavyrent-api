import { User } from "src/users/user.entity/user.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Machine {
    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    name:string;

    @Column()
    description:string;

    @Column({default: true})
    available:boolean;

    @ManyToOne(() => User, user => user.machines)
    createdBy: User; // Relación con el usuario que creó la máquina
}
