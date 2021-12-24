import {
  Controller,
  HttpResponse,
} from '@/shared/infra/presentation/contracts';

export const adaptResolver = async <T = any>(
  controller: Controller,
): Promise<HttpResponse<T>> => {
  const httpResponse = await controller.handle();
  return httpResponse.data;
};
