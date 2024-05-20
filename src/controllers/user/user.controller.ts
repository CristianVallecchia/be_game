import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateUserDTO } from 'src/dtos/user/create-user.dto';
import { UserService } from 'src/services/user/user.service.impl';

@Controller('user')
export class UserController {
  constructor(private readonly service: UserService) {}

  @Post('/create')
  async createUser(@Body() createUserDTO: CreateUserDTO) {
    return await this.service.create(createUserDTO);
  }

  @Get('/getTest')
  browse() {
    return 'test';
  }
}
