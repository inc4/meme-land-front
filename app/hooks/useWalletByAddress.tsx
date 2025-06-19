import { useState, useEffect } from "react";
import { useWallet } from "@solana/wallet-adapter-react";
import { getWalletByAddress } from "~/utils/request";
import { type TGetWalletsResponse } from "~/types";

const useWalletByAddress = () => {
  const { publicKey } = useWallet();
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState<TGetWalletsResponse | null>(null);

  useEffect(() => {
    if (!publicKey) {
      setIsLoading(false);
      return;
    }

    (async () => {
      setIsLoading(true);

      const wallet = await getWalletByAddress(publicKey.toString());
      setData(wallet);

      setIsLoading(false);
    })();
  }, [publicKey]);

  return {
    isLoading,
    data,
  }
};

export default useWalletByAddress;
