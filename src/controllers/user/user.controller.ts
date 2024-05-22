import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Put,
  UseGuards,
} from '@nestjs/common';
import { MutateUserDTO } from 'src/dtos/user/mutate-user.dto';
import { JwtGuard } from 'src/guards/authentication/jwt-auth.guard';
import { ReadUser } from 'src/models/user/read-user';
import { UserService } from 'src/services/user/user.service.impl';
// Add to review
@UseGuards(JwtGuard)
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('/:id')
  async getUser(@Param('id') id: number): Promise<ReadUser> {
    return await this.userService.findById(id);
  }

  @Get()
  async getAllUsers(): Promise<ReadUser[]> {
    return await this.userService.findAll();
  }

  @Put('/:id')
  async updateUser(
    @Param() id: number,
    @Body() mutateUserDTO: MutateUserDTO,
  ): Promise<ReadUser> {
    return await this.userService.update(id, mutateUserDTO);
  }

  @Delete('/delete/:id')
  async deleteUser(@Param('id') id: number): Promise<void> {
    await this.userService.delete(id);
  }
}
