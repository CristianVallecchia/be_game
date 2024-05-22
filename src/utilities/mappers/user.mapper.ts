import { Injectable } from '@nestjs/common';
import { User } from 'src/entities/user.entity';
import { ReadUser } from 'src/models/user/read-user';
// Add to review
@Injectable()
export class UserMapper {
  entityToReadDto(user: User): ReadUser {
    const readUser: ReadUser = {
      id: user.id,
      name: user.name,
      email: user.email,
      username: user.username,
      win: user?.win ?? 0,
      lose: user.lose ?? 0,
      pair: user.pair ?? 0,
      partecipants: [],
      games: [],
    };
    return readUser;
  }
}
