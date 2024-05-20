import { IsArray, IsInt } from 'class-validator';
import { MutateUserDTO } from './mutate-user.dto';

export class ReadUserDTO extends MutateUserDTO {
  @IsInt()
  win: number;

  @IsInt()
  lose: number;

  @IsInt()
  pair: number;

  @IsArray()
  participants: number[];

  @IsArray()
  games: number[];
}
