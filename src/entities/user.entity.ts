import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  OneToMany,
  PrimaryGeneratedColumn,
  Unique,
} from 'typeorm';
import { Game } from './game.entity';
import { Participant } from './participant.entity';

@Entity()
@Unique(['email'])
export class User {
  @PrimaryGeneratedColumn({
    type: 'bigint',
    name: 'id',
  })
  id: number;

  @Column()
  name: string;

  @Column({ unique: true })
  email: string;

  @Column({ unique: true })
  username: string;

  @Column()
  password: string;

  @Column()
  win?: number;

  @Column()
  lose?: number;

  @Column()
  pair?: number;

  @OneToMany(() => Participant, (participant) => participant.user)
  participant?: Participant[];

  @ManyToMany(() => Game, (game) => game.users)
  @JoinTable()
  games?: Game[];
}
