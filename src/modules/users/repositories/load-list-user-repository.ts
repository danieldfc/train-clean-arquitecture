import { UserModel } from '@/modules/users/data/models';

export interface LoadListUserRepository {
  loadListUser: () => Promise<UserModel[]>;
}
