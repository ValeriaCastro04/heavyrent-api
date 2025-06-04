import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Machine } from 'src/machines/machine.entity';
import { RentalRequest } from 'src/rentals/rental-request.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  email: string;

  @Column()
  name: string;

  @Column({ default: 'customer' }) // 'customer' | 'admin'
  role: string;

  @OneToMany(() => Machine, machine => machine.createdBy)
  machines: Machine[];

  @OneToMany(() => RentalRequest, rental => rental.user)
  rentals: RentalRequest[];
}