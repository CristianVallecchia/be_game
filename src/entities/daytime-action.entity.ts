import {
  Column,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  Unique,
} from 'typeorm';
import { Daytime } from './daytime.entity';
import { Power } from './power.entity';

@Entity()
@Unique(['power', 'toParticipantId', 'daytime'])
export class DaytimeActions {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Power, (power) => power.daytimeActions)
  power: Power;

  @Column()
  previousParticipantIfIllused: number;

  @Column()
  toParticipantId: number;

  @ManyToOne(() => Daytime, (daytime) => daytime.daytimesActions)
  daytime: Daytime;
}
