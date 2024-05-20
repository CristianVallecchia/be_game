import { CreateUserDTO } from 'src/dtos/user/create-user.dto';
import { MutateUserDTO } from 'src/dtos/user/mutate-user.dto';
import { ReadUser } from 'src/models/user/read-user';

export abstract class IUserService {
  abstract finById(userId: number): Promise<ReadUser>;
  abstract findAll(): Promise<ReadUser[]>;
  abstract create(user: CreateUserDTO): Promise<ReadUser>;
  abstract update(user: MutateUserDTO): Promise<ReadUser>;
  abstract delete(userId: number): Promise<void>;
}
