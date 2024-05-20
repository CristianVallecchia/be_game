import {
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  Unique,
} from 'typeorm';
import { Character } from './character.entity';
import { Power } from './power.entity';

@Entity()
@Unique(['character', 'power'])
export class CharacterToPower {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Character, (character) => character.characterToPower)
  @JoinColumn([{ name: 'character_id', referencedColumnName: 'id' }])
  character: Character;

  @ManyToOne(() => Power, (power) => power.characterToPower)
  @JoinColumn([{ name: 'power_id', referencedColumnName: 'id' }])
  power: Power;
}
