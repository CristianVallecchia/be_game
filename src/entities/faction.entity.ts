import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Character } from './character.entity';

@Entity()
export class Faction {
  @PrimaryGeneratedColumn({
    type: 'bigint',
    name: 'id',
  })
  id: number;

  @Column()
  nome: string;

  @OneToMany(() => Character, (character) => character.faction)
  character: Character[];

  @Column({ default: 0 })
  vittorie: number;

  @Column({ default: 0 })
  sconfitte: number;

  @Column({ default: 0 })
  pareggi: number;
}
