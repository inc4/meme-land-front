import type {TCampaign} from "~/types";
import useSWR from "swr";
import getConfig from "~/config";
import {useWallet} from "@solana/wallet-adapter-react";

const { API_URL } = getConfig();

const useCampaign = (companyId: string) => {
  const { publicKey } = useWallet();

  const fetcher = async () => {
    const response = await fetch(`${API_URL}/campaigns/${companyId}`, {
      method: 'GET',
      headers: {
        accept: 'application/json',
        'X-Wallet': publicKey?.toString() || '',
      },
    });

    if (response.ok) {
      return await response.json() as TCampaign;
    }

    throw new Error('Error: Get campaigns');
  };

  return useSWR({
    key: '/campaigns',
    companyId,
  }, fetcher);
};

export default useCampaign;