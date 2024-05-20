import { BaseUser } from './base-user';

export interface CreateUser extends BaseUser {
  password: string;
}
