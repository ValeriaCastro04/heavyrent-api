import { Module } from '@nestjs/common';
import { MachinesService } from './machines.service';
import { MachinesController } from './machines.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Machine } from './machine.entity';
import { UsersModule } from 'src/users/users.module'; 


@Module({
  imports: [TypeOrmModule.forFeature([Machine]), UsersModule],
  providers: [MachinesService],
  controllers: [MachinesController]
})
export class MachinesModule {}
