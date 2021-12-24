import { User } from '@/modules/users/infra/typeorm/entities';

export class UserViewModel {
  name: string;

  email: string;

  static map(entity: User): UserViewModel {
    return {
      ...entity,
    };
  }

  static mapCollection(entities: User[]): UserViewModel[] {
    return entities.map(entity => UserViewModel.map(entity));
  }
}
