export type TEnv = 'dev' | 'prod';

export type TRouteConfig = {
  path: string;
  label: string | ((params: Record<string, string>) => string);
};
