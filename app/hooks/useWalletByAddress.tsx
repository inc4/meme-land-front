import useSWR from "swr";
import { useWallet } from "@solana/wallet-adapter-react";
import type { TGetWalletsResponse } from "~/types";
import getConfig from "~/config";

const { API_URL } = getConfig();

const useWalletByAddress = () => {
  const { publicKey } = useWallet();

  const fetcher = async (publicKey: string) => {
    const response = await fetch(`${API_URL}/wallets/${publicKey}`, {
      headers: {
        'Content-Type': 'application/json',
        'X-Wallet': publicKey,
      }
    })

    if (!response.ok) return null;

    const wallet: TGetWalletsResponse = await response.json();

    return wallet;
  };

  return useSWR(
    {
      key: 'wallet-by-address',
      publicKey: publicKey?.toString() || '',
    },
    ({ publicKey }) => fetcher(publicKey)
  )
};

export default useWalletByAddress;
