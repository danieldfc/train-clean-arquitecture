import { HttpResponse } from '@/shared/infra/presentation/contracts';

export interface Controller {
  handle: () => Promise<HttpResponse>;
}
