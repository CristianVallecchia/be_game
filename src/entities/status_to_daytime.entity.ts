import {
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  Unique,
} from 'typeorm';
import { Daytime } from './daytime.entity';
import { Status } from './status.entity';

@Entity()
@Unique(['daytime', 'status'])
export class StatusToDaytime {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Status, (status) => status.statusToDaytime)
  @JoinColumn([{ name: 'status_id', referencedColumnName: 'id' }])
  status: Status;

  @ManyToOne(() => Daytime, (daytime) => daytime.statusToDaytimes)
  @JoinColumn([{ name: 'daytime_id', referencedColumnName: 'id' }])
  daytime: Daytime;
}
