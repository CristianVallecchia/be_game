import { CreateUserDTO } from 'src/dtos/user/create-user.dto';
import { MutateUserDTO } from 'src/dtos/user/mutate-user.dto';
import { User } from 'src/entities/user.entity';
import { ReadUser } from 'src/models/user/read-user';
// Add to review
export abstract class IUserService {
  abstract findById(userId: number): Promise<ReadUser>;
  abstract findAll(): Promise<ReadUser[]>;
  abstract findOneWithUserName(username: string): Promise<User>;
  abstract create(user: CreateUserDTO): Promise<ReadUser>;
  abstract update(id: number, user: MutateUserDTO): Promise<ReadUser>;
  abstract delete(userId: number): Promise<void>;
}
