import { UserViewModel } from '@/modules/users/presentation/view-models';
import { adaptResolver } from '@/shared/infra/adapters';
import { makeLoadListUserController } from '@/modules/users/data/factories';

const UserResolver = {
  Query: {
    listUsers: () =>
      adaptResolver<UserViewModel[]>(makeLoadListUserController()),
  },
};

export { UserResolver };
