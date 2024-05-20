import { IsInt, IsNotEmpty } from 'class-validator';
import { BaseUserDTO } from './base-user.dto';

export class MutateUserDTO extends BaseUserDTO {
  @IsNotEmpty()
  @IsInt()
  id: number;
}
