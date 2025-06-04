import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { User } from "src/users/user.entity/user.entity";
import { Machine } from "src/machines/machine.entity";

@Entity()
export class RentalRequest {
    @PrimaryGeneratedColumn()
    id:number;

    @ManyToOne(() => Machine)
    machine: Machine;

    @ManyToOne(()=> User, user => user.rentals)
    user:User;

    @Column()
    startDate:string;

    @Column()
    endDate: string;

    @Column({default:'pendind'})
    status:string;
}
