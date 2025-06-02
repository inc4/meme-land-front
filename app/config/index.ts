import type { TEnv } from "~/types";

const getConfig = () => {
  const env: TEnv = import.meta.env.VITE_APP_ENV || 'prod';

  switch (env) {
    case 'dev':
      return {
        NETWORK_ID: '',
        API_URL: '',
        CONTRACT_ADDRESS: '',
      };
    default:
    case 'prod':
      return {
        NETWORK_ID: '',
        API_URL: '',
        CONTRACT_ADDRESS: '',
      };
  }
};

export default getConfig;
