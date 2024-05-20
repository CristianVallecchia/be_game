import { Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { SecretRoomToParticipant } from './secret_room_to_participant.entity';

@Entity()
export class SecretRoom {
  @PrimaryGeneratedColumn({
    type: 'bigint',
    name: 'id',
  })
  id: number;

  @OneToMany(
    () => SecretRoomToParticipant,
    (secretRoomToParticipant) => secretRoomToParticipant.secretRoom,
  )
  participants: SecretRoomToParticipant[];
}
