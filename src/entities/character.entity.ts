import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  Unique,
} from 'typeorm';
import { CharacterToPower } from './character_to_power.entity';
import { Faction } from './faction.entity';
import { Participant } from './participant.entity';

@Entity()
@Unique(['faction'])
export class Character {
  @PrimaryGeneratedColumn({
    type: 'bigint',
    name: 'id',
  })
  id: number;

  @Column()
  name: string;

  @OneToMany(
    () => CharacterToPower,
    (characterToPower) => characterToPower.character,
  )
  characterToPower: CharacterToPower[];

  @OneToMany(() => Participant, (participant) => participant.character)
  participants: Participant[];

  @ManyToOne(() => Faction, (faction) => faction.character)
  faction: Faction;
}
