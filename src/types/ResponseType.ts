/* eslint-disable @typescript-eslint/no-explicit-any */
export type TError = {
  status?: number;
  message?: string;
  success?: boolean;
  data?: any;
};

export type TResponse<T> = {
  data?: T;
  success: boolean;
  message: string;
  error: TError;
};
