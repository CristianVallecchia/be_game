import {
  Injectable,
  InternalServerErrorException,
  Logger,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import * as bcrypt from 'bcrypt';
import { CreateUserDTO } from 'src/dtos/user/create-user.dto';
import { MutateUserDTO } from 'src/dtos/user/mutate-user.dto';
import { User } from 'src/entities/user.entity';
import { ReadUser } from 'src/models/user/read-user';
import { UserMapper } from 'src/utilities/mappers/user.mapper';
import { Repository } from 'typeorm';
import { IUserService } from './user.service.interface';
// Add to review
@Injectable()
export class UserService implements IUserService {
  private readonly logger = new Logger(UserService.name);

  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>,
    private readonly userMapper: UserMapper,
  ) {}

  async findById(userId: number): Promise<ReadUser> {
    try {
      const user = await this.userRepository.findOne({ where: { id: userId } });
      if (!user) {
        throw new NotFoundException(`User with id ${userId} not found`);
      }
      return this.userMapper.entityToReadDto(user);
    } catch (error) {
      throw new InternalServerErrorException('boh poi vediamo');
    }
  }

  async findAll(): Promise<ReadUser[]> {
    try {
      const users = await this.userRepository.find();
      return users.map((user) => this.userMapper.entityToReadDto(user));
    } catch (error) {
      throw new InternalServerErrorException('boh poi vediamo');
    }
  }

  async create(createUserDto: CreateUserDTO): Promise<ReadUser> {
    try {
      const newUser = this.userRepository.create({
        ...createUserDto,
        password: (await bcrypt.hash(createUserDto.password, 10)) ?? '',
        win: 0,
        lose: 0,
        pair: 0,
        participant: [],
        games: [],
      });
      const savedUser = await this.userRepository.save(newUser);
      return this.userMapper.entityToReadDto(savedUser);
    } catch (error) {
      throw new InternalServerErrorException('boh poi vediamo');
    }
  }

  // FIXME: BRUTTO. DA SISTEMARE
  async update(id: number, userDto: MutateUserDTO): Promise<ReadUser> {
    try {
      const user = await this.userRepository.findOne({
        where: { id: userDto.id },
      });
      if (!user) {
        throw new NotFoundException(`User with id ${id} not found`);
      }
      await this.userRepository.update(userDto.id, userDto);
      const updatedUser = await this.userRepository.findOne({
        where: { id: userDto.id },
      });
      return this.userMapper.entityToReadDto(updatedUser!);
    } catch (error) {
      throw new InternalServerErrorException('boh poi vediamo');
    }
  }

  //FIXME: da capire se ha senso o meno
  async findOneWithUserName(username: string): Promise<User> {
    try {
      const user = await this.userRepository.findOne({ where: { username } });
      if (!user) {
        this.logger.warn(`User with username ${username} not found`);
        throw new NotFoundException(`User with username ${username} not found`);
      }
      this.logger.log(`User with username ${username} found`);
      return user;
    } catch (error) {
      this.logger.error(
        `Failed to find user with username ${username}`,
        error.stack,
      );
      throw new InternalServerErrorException(
        'An error occurred while finding the user',
      );
    }
  }

  async delete(userId: number): Promise<void> {
    try {
      const user = await this.userRepository.findOne({ where: { id: userId } });
      if (!user) {
        throw new NotFoundException(`User with id ${userId} not found`);
      }
      await this.userRepository.remove(user);
    } catch (error) {
      throw new InternalServerErrorException('boh poi vediamo');
    }
  }
}
