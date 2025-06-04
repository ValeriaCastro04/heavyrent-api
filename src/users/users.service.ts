import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { User } from "./user.entity/user.entity";

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly usersRepository: Repository<User>,
  ) {}

  async findOrCreate(data: {email:string; name:string}): Promise<User> {
    let user = await this.usersRepository.findOne({ where: { email: data.email } });
    if (!user) {
      user = this.usersRepository.create(data);
      await this.usersRepository.save(user);
    }
    return user;
  }

  //Buscar por ID para otros modulos como rentals
  async findById(id: number): Promise<User | null> {
    return this.usersRepository.findOne({ where: { id } });
  }

  //opcional obtener todos los usuarios - solo si lo habilitas en controller
  async findAll(): Promise<User[]> {
    return this.usersRepository.find();
  }
}