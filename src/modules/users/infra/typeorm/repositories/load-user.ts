import { UserModel } from '@/modules/users/data/models';
import {
  IUserRepository,
  LoadListUserRepository,
} from '@/modules/users/repositories';

export class LoadUserRepository implements LoadListUserRepository {
  constructor(private userRepository: IUserRepository) {}

  loadListUser(): Promise<UserModel[]> {
    return this.userRepository.findAll();
  }
}
