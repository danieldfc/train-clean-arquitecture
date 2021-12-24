import {
  Controller,
  HttpResponse,
  ok,
  serverError,
} from '@/shared/infra/presentation/contracts';
import { UserViewModel } from '@/modules/users/presentation/view-models';
import { ListUserLoader } from '@/modules/users/usecases';

export class ListUserController implements Controller {
  constructor(private readonly listUserLoader: ListUserLoader) {}

  async handle(): Promise<HttpResponse<UserViewModel[]>> {
    try {
      const users = await this.listUserLoader.load();

      return ok<UserViewModel[]>(UserViewModel.mapCollection(users));
    } catch (error) {
      return serverError(error);
    }
  }
}
