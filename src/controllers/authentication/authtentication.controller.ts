import { Body, Controller, Post, Request, UseGuards } from '@nestjs/common';
import { CreateUserDTO } from 'src/dtos/user/create-user.dto';
import { LocalAuthGuard } from 'src/guards/authentication/local-auth.guard';
import { RefreshJwtGuard } from 'src/guards/authentication/refresh-jwt.guard';

import { ReadUser } from 'src/models/user/read-user';
import {
  AuthService,
  DaRefattorizzareTokenJwt,
} from 'src/services/authentication/authentication.service';
import { UserService } from 'src/services/user/user.service.impl';

// Add to review
@Controller('authentication')
export class AuthenticationController {
  constructor(
    private readonly authService: AuthService,
    private readonly userService: UserService,
  ) {}

  @UseGuards(LocalAuthGuard)
  @Post('login')
  async login(@Request() req: any): Promise<DaRefattorizzareTokenJwt> {
    return this.authService.login(req.user);
  }

  @Post('/register')
  async createUser(@Body() createUserDTO: CreateUserDTO): Promise<ReadUser> {
    return await this.userService.create(createUserDTO);
  }
  @UseGuards(RefreshJwtGuard)
  @Post('refresh')
  async refreshToken(@Request() req: any): Promise<{ access_token: string }> {
    return this.authService.refreshToken(req.user);
  }
}
