import {
  Column,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  Unique,
} from 'typeorm';
import { CharacterToPower } from './character_to_power.entity';
import { DaytimeActions } from './daytime-action.entity';

@Entity()
@Unique(['name'])
export class Power {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @OneToMany(
    () => CharacterToPower,
    (characterToPower) => characterToPower.power,
  )
  characterToPower: CharacterToPower[];

  @OneToMany(() => DaytimeActions, (daytimeActions) => daytimeActions.power)
  daytimeActions: DaytimeActions[];
}
