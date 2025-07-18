import type { TEnv } from "~/types";
import { WalletAdapterNetwork } from '@solana/wallet-adapter-base';
import devnetIdl from "~/idl/mem_land.dev.json";
import mainnetIdl from "~/idl/mem_land.mainnet.json";

const getConfig = () => {
  const env: TEnv = import.meta.env.VITE_APP_ENV || 'prod';

  switch (env) {
    case 'dev':
      return {
        NETWORK_ID: WalletAdapterNetwork.Devnet,
        API_URL: 'https://memeland-backend.inc4.net/api/1.0.0',
        IDL: devnetIdl,
        X_LINK: "https://x.com",
        TG_LINK: "https://web.telegram.org",
      };
    default:
    case 'prod':
      return {
        NETWORK_ID: WalletAdapterNetwork.Mainnet,
        API_URL: 'https://backend.memedrop.ai/api/1.0.0',
        IDL: mainnetIdl,
        X_LINK: "https://x.com",
        TG_LINK: "https://web.telegram.org",
      };
  }
};

export default getConfig;
