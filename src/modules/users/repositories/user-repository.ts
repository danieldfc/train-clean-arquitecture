import { UserModel } from '../data/models';

export interface IUserRepository {
  save(user: UserModel): Promise<void>;
  findAll(options?: any): Promise<UserModel[]>;
}
