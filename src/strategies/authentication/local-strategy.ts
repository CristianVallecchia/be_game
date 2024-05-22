import { Injectable, UnauthorizedException } from '@nestjs/common';
import { User } from 'src/entities/user.entity';
import { AuthService } from 'src/services/authentication/authentication.service';

import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-local';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly authService: AuthService) {
    super();
  }

  async validate(
    username: string,
    password: string,
  ): Promise<Omit<User, 'password'> | null> {
    const user = await this.authService.validateUser(username, password);

    if (!user) throw new UnauthorizedException();

    return user;
  }
}
