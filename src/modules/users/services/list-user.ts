import { ListUserLoader } from '@/modules/users/usecases';
import { LoadListUserRepository } from '@/modules/users/repositories';
import { UserUnavailableError } from '@/modules/users/errors';
import { UserModel } from '@/modules/users/data/models';

export class ListUserService implements ListUserLoader {
  constructor(
    private readonly loadListUserRepository: LoadListUserRepository,
  ) {}

  async load(): Promise<UserModel[]> {
    if (new Date().getHours() <= 6 && new Date().getHours() >= 19) {
      throw new UserUnavailableError();
    }
    return this.loadListUserRepository.loadListUser();
  }
}
