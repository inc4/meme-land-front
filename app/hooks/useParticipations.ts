import useSWR from "swr";
import { useWallet } from "@solana/wallet-adapter-react";
import type { TParticipationsResponse, TParticipations } from "~/types";
import getConfig from "~/config";

const { API_URL } = getConfig();

const useParticipations = (
  conditions: Partial<TParticipations> | {} = {},
  limit: number = 10,
  page: number = 0,
) => {
  const { publicKey } = useWallet();

  const queryParams = new URLSearchParams();
  if (conditions) {
    queryParams.append("conditions", JSON.stringify(conditions));
  }
  queryParams.append("limit", limit.toString());
  queryParams.append("page", page.toString());

  const fetcher = async (publicKey: string, queryParams: string) => {
    const response = await fetch(`${API_URL}/participations?${queryParams}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'X-Wallet': publicKey,
      },
    });

    if (response.ok) {
      return await response.json() as TParticipationsResponse;
    }

    throw new Error('Error: Get participations');
  };

  return useSWR(
    publicKey ? {
      key: 'participations',
      queryParams: queryParams.toString(),
      publicKey: publicKey.toString()
    } : null,
    ({ publicKey, queryParams }) => fetcher(publicKey, queryParams),
  );
};

export default useParticipations;
