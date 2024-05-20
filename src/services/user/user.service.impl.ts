import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateUserDTO } from 'src/dtos/user/create-user.dto';
import { MutateUserDTO } from 'src/dtos/user/mutate-user.dto';
import { User } from 'src/entities/user.entity';
import { ReadUser } from 'src/models/user/read-user';
import { UserMapper } from 'src/utilities/mappers/user.mapper';
import { Repository } from 'typeorm';
import { IUserService } from './user.service.interface';

@Injectable()
export class UserService implements IUserService {
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>,
    private readonly userMapper: UserMapper,
  ) {}

  async finById(userId: number): Promise<ReadUser> {
    console.log(userId);
    throw new Error('Method not implemented.');
  }
  async findAll(): Promise<ReadUser[]> {
    throw new Error('Method not implemented.');
  }
  async create(createUserDto: CreateUserDTO): Promise<ReadUser> {
    const newUser = this.userRepository.create({
      ...createUserDto,
      win: 0,
      lose: 0,
      pair: 0,
      participant: [],
      games: [],
    });
    const saveUser = await this.userRepository.save(newUser);
    return this.userMapper.entityToReadDto(saveUser);
  }
  async update(user: MutateUserDTO): Promise<ReadUser> {
    console.log(user);
    throw new Error('Method not implemented.');
  }
  async delete(userId: number): Promise<void> {
    console.log(userId);
    throw new Error('Method not implemented.');
  }
}
