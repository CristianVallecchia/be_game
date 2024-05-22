import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { User } from 'src/entities/user.entity';
import { ReadUser } from 'src/models/user/read-user';
import { UserMapper } from 'src/utilities/mappers/user.mapper';
import { UserService } from '../user/user.service.impl';

export interface DaRefattorizzareTokenJwt extends ReadUser {
  access_token: string;
  refreshToken: string;
}

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService,
    private readonly userMapper: UserMapper,
  ) {}

  async validateUser(
    username: string,
    password: string,
  ): Promise<Omit<User, 'password'> | null> {
    const user = await this.userService.findOneWithUserName(username);

    if (user && (await bcrypt.compare(password, user.password))) {
      return user;
    }
    return null;
  }

  async login(user: User): Promise<DaRefattorizzareTokenJwt> {
    const payload = {
      username: user.username,
      sub: {
        name: user.name,
      },
    };
    const lll: DaRefattorizzareTokenJwt = {
      ...this.userMapper.entityToReadDto(user),
      access_token: this.jwtService.sign(payload),
      refreshToken: this.jwtService.sign(payload, { expiresIn: '1d' }),
    };
    return lll;
  }

  async refreshToken(user: User): Promise<{ access_token: string }> {
    const payload = {
      username: user.username,
      sub: {
        name: user.name,
      },
    };

    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
