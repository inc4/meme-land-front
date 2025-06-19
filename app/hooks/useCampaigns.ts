import useSWR from "swr";
import getConfig from "~/config";
import {useWallet} from "@solana/wallet-adapter-react";
import type {TCampaign, TCampaignResponse} from "~/types";

const { API_URL } = getConfig();

const useCampaigns = (conditions?: Partial<TCampaign>) => {
  const { publicKey } = useWallet();
  const params = encodeURIComponent(JSON.stringify(conditions));
  const fetcher = async () => {
    const response = await fetch(`${API_URL}/campaigns?${params}`, {
      method: 'GET',
      headers: {
        accept: 'application/json',
        'X-Wallet': publicKey?.toString() || '',
      },
    })

    if (response.ok) {
      return await response.json() as TCampaignResponse;
    }

    throw new Error('Error: Get companies');
  }

  return useSWR({
    key:'/campaigns',
    conditions
  }, fetcher);
};

export default useCampaigns;
