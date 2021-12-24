import { UserModel } from '@/modules/users/data/models';

export interface ListUserLoader {
  load: () => Promise<UserModel[]>;
}
