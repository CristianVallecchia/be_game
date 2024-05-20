import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
  Unique,
} from 'typeorm';
import { Character } from './character.entity';
import { Daytime } from './daytime.entity';
import { Game } from './game.entity';
import { SecretRoomToParticipant } from './secret_room_to_participant.entity';
import { User } from './user.entity';

@Entity()
@Unique(['game'])
export class Participant {
  @PrimaryGeneratedColumn({
    type: 'bigint',
    name: 'id',
  })
  id: number;

  @Column()
  data_iscrizione: string;

  @Column()
  confermato: boolean;

  @Column()
  infested: boolean;

  @ManyToOne(() => Game, (game) => game.participants)
  game: Game;

  @ManyToOne(() => User, (user) => user.participant)
  user: User;

  @ManyToOne(() => Character, (character) => character.participants)
  character: Character;

  @OneToOne(() => Participant, { nullable: true })
  @JoinColumn()
  father: Participant;

  @OneToOne(() => Participant, { nullable: true })
  @JoinColumn()
  children: Participant;

  @OneToMany(() => Daytime, (daytime) => daytime.participant)
  daytimes: Daytime[];

  @OneToMany(
    () => SecretRoomToParticipant,
    (secretRoomToParticipant) => secretRoomToParticipant.participant,
  )
  secretRoomToParticipant: SecretRoomToParticipant[];
}
