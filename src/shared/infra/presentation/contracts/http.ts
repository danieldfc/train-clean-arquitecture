export type HttpResponse<T = any> = {
  statusCode: number;
  data: T;
};

export const serverError = (error: Error): HttpResponse => ({
  statusCode: 500,
  data: error.stack,
});

export const ok = <T = any>(data: T): HttpResponse<T> => ({
  statusCode: 200,
  data,
});
