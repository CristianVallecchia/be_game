import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserController } from 'src/controllers/user/user.controller';
import { User } from 'src/entities/user.entity';
import { UserService } from 'src/services/user/user.service.impl';
import { UserMapper } from 'src/utilities/mappers/user.mapper';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  controllers: [UserController],
  providers: [UserMapper, UserService],
})
export class UserModule {}
