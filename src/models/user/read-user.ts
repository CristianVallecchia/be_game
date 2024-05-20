import { MutateUser } from './mutate-user';

export interface ReadUser extends MutateUser {
  win: number;
  lose: number;
  pair: number;
  partecipants: number[];
  games: number[];
}
