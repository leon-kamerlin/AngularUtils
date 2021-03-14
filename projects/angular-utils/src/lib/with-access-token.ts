export type WithAccessToken<T> = T & {
  accessToken: string;
};
