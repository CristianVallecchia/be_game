import {
  Column,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  Unique,
} from 'typeorm';
import { StatusToDaytime } from './status_to_daytime.entity';

@Entity()
@Unique(['name'])
export class Status {
  @PrimaryGeneratedColumn({
    type: 'bigint',
    name: 'id',
  })
  id: number;

  @Column()
  name: string;

  @OneToMany(() => StatusToDaytime, (statusToDaytime) => statusToDaytime.status)
  statusToDaytime: StatusToDaytime[];
}
