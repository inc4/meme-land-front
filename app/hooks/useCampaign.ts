import useSWR from "swr";
import { useWallet } from "@solana/wallet-adapter-react";
import type { TCampaign } from "~/types";
import getConfig from "~/config";

const { API_URL } = getConfig();

const useCampaign = (campaignId: string) => {
  const { publicKey } = useWallet();

  const fetcher = async (campaignId: string, publicKey: string) => {
    const response = await fetch(`${API_URL}/campaigns/${campaignId}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'X-Wallet': publicKey,
      },
    });

    if (response.ok) {
      return await response.json() as TCampaign;
    }

    throw new Error(`Error: Get campaign ${campaignId}`);
  };

  return useSWR(
    publicKey && campaignId
    ? {
      key: `campaign`,
      campaignId,
      publicKey: publicKey.toString()
    } : null,
    ({ campaignId, publicKey }) => fetcher(campaignId, publicKey),
    { refreshInterval: 2000 }
  );
};

export default useCampaign;