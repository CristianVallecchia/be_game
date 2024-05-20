import {
  Column,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  Unique,
} from 'typeorm';
import { Daytime } from './daytime.entity';

@Entity()
@Unique(['daytime', 'toParticipantId'])
export class DaytimeGallow {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Daytime, (daytime) => daytime.daytimeGallows)
  daytime: Daytime;

  @Column()
  toParticipantId: number;
}
