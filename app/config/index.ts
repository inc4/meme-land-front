import type { TEnv } from "~/types";
import { WalletAdapterNetwork } from '@solana/wallet-adapter-base';

const getConfig = () => {
  const env: TEnv = import.meta.env.VITE_APP_ENV || 'prod';

  switch (env) {
    case 'dev':
      return {
        NETWORK_ID: WalletAdapterNetwork.Devnet,
        API_URL: 'http://ec2-35-158-146-88.eu-central-1.compute.amazonaws.com/api/1.0.0',
        CONTRACT_ADDRESS: '',
        X_LINK: "https://x.com/",
        TG_LINK: "https://web.telegram.org/",
      };
    default:
    case 'prod':
      return {
        NETWORK_ID: WalletAdapterNetwork.Mainnet,
        API_URL: '',
        CONTRACT_ADDRESS: '',
        X_LINK: "https://x.com/",
        TG_LINK: "https://web.telegram.org/",
      };
  }
};

export default getConfig;
