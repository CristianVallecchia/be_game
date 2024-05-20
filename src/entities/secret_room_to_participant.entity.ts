import {
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  Unique,
} from 'typeorm';
import { Participant } from './participant.entity';
import { SecretRoom } from './secret_room.entity';

@Entity()
@Unique(['participant', 'secretRoom'])
export class SecretRoomToParticipant {
  @PrimaryGeneratedColumn({
    type: 'bigint',
    name: 'id',
  })
  id: number;

  @ManyToOne(
    () => Participant,
    (participant) => participant.secretRoomToParticipant,
  )
  @JoinColumn([{ name: 'participant_id', referencedColumnName: 'id' }])
  participant: Participant;

  @ManyToOne(() => SecretRoom, (secretRoom) => secretRoom.participants)
  @JoinColumn([{ name: 'secretRoom_id', referencedColumnName: 'id' }])
  secretRoom: SecretRoom;
}
