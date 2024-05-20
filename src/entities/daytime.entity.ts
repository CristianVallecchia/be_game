import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  Unique,
} from 'typeorm';
import { DaytimeActions } from './daytime-action.entity';
import { DaytimeGallow } from './daytime-gallow.entity';
import { Participant } from './participant.entity';
import { StatusToDaytime } from './status_to_daytime.entity';

@Entity()
@Unique(['numero', 'participant'])
export class Daytime {
  @PrimaryGeneratedColumn({
    type: 'bigint',
    name: 'id',
  })
  id: number;

  @Column()
  nome: string;

  @Column()
  numero: number;

  @ManyToOne(() => Participant, (participant) => participant.daytimes)
  participant: Participant;

  @OneToMany(() => DaytimeActions, (daytimeActions) => daytimeActions.daytime)
  daytimesActions: DaytimeActions[];

  @OneToMany(() => DaytimeGallow, (daytimeGallow) => daytimeGallow.daytime)
  daytimeGallows: DaytimeGallow[];

  @OneToMany(
    () => StatusToDaytime,
    (statusToDaytime) => statusToDaytime.daytime,
  )
  statusToDaytimes: StatusToDaytime[];

  @Column()
  gallowVotes: number;
}
