import { getRepository, Repository } from 'typeorm';
import { UserModel } from '@/modules/users/data/models';
import { IUserRepository } from '@/modules/users/repositories';
import { User } from '../entities';

export class UserRepository implements IUserRepository {
  private userRepository: Repository<UserModel> = getRepository(User);

  async save(user: UserModel): Promise<void> {
    await this.userRepository.save(user);
  }

  async findAll(_options?: any): Promise<UserModel[]> {
    return this.userRepository.find();
  }
}
