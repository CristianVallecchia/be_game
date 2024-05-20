import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class BaseUserDTO {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @IsString()
  username: string;
}
