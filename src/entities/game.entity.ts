import {
  Column,
  Entity,
  ManyToMany,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Participant } from './participant.entity';
import { User } from './user.entity';

@Entity()
export class Game {
  @PrimaryGeneratedColumn({
    type: 'bigint',
    name: 'id',
  })
  id: number;

  @Column({
    nullable: false,
    default: '',
  })
  name: string;

  @Column({ default: 0 })
  day: number;

  @OneToMany(() => Participant, (participant) => participant.game)
  participants: Participant[];

  @ManyToMany(() => User, (user) => user.games)
  users: User[];
}
