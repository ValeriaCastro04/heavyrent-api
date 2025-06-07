import { Module } from '@nestjs/common';
import { RentalsService } from './rentals.service';
import { RentalsController } from './rentals.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RentalRequest } from './rental-request.entity';
import { UsersModule } from '../users/users.module';
import { MachinesModule } from '../machines/machines.module';
import { Machine } from '../machines/machine.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature( [RentalRequest, Machine] ),
    UsersModule,
    MachinesModule,
  ],
  providers: [RentalsService],
  controllers: [RentalsController]
})
export class RentalsModule {}
