import useSWR from "swr";
import getConfig from "~/config";
import { useWallet } from "@solana/wallet-adapter-react";
import type { TCampaign, TCampaignResponse } from "~/types";

const { API_URL } = getConfig();

const useCampaigns = (conditions?: Partial<TCampaign> | null, limit = 10, page=0) => {
  const { publicKey } = useWallet();

  const queryParams = new URLSearchParams();
  if (conditions) {
    queryParams.append("conditions", JSON.stringify(conditions));
  }
  queryParams.append("limit", limit.toString());
  queryParams.append("page", page.toString());

  const fetcher = async (queryParams: string, publicKey: string) => {
    const response = await fetch(`${API_URL}/campaigns?${queryParams}`, {
      method: 'GET',
      headers: {
        accept: 'application/json',
        'X-Wallet': publicKey,
      },
    });

    if (response.ok) {
      return await response.json() as TCampaignResponse;
    }

    throw new Error('Error: Get campaigns');
  };

  return useSWR(
    publicKey
    ? {
      key: 'campaigns',
      queryParams: queryParams.toString(),
      publicKey: publicKey.toString(),
    } : null,
    ({ queryParams, publicKey }) => fetcher(queryParams, publicKey),
    { refreshInterval: 2000 },
  );
};

export default useCampaigns;
