import { IsNotEmpty, IsString } from 'class-validator';
import { BaseUserDTO } from './base-user.dto';

export class CreateUserDTO extends BaseUserDTO {
  @IsNotEmpty()
  @IsString()
  password: string;
}
