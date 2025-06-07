import { User } from "src/users/user.entity/user.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn, OneToMany } from "typeorm";
import { RentalRequest } from "src/rentals/rental-request.entity";

@Entity()
export class Machine {
    @PrimaryGeneratedColumn()
    id: number;
    
    @Column()
    name: string;

    @Column()
    description: string;

    @Column({ default: true })
    available: boolean;

    @ManyToOne( () => User, user => user.machines)
    createdBy: User;

    @OneToMany(() => RentalRequest, rental => rental.machine)
    rentals: RentalRequest[];
}
