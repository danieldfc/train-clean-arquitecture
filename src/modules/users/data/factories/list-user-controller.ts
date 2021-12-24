import { ListUserService } from '@/modules/users/services';
import {
  LoadUserRepository,
  UserRepository,
} from '@/modules/users/infra/typeorm/repositories';
import { ListUserController } from '@/modules/users/presentation/controllers';
import { Controller } from '@/shared/infra/presentation/contracts';

export const makeLoadListUserController = (): Controller => {
  const userRepository = new UserRepository();
  const loadUserRepository = new LoadUserRepository(userRepository);
  const loader = new ListUserService(loadUserRepository);
  return new ListUserController(loader);
};
