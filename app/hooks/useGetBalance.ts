import {useEffect, useState} from "react";
import fetchSolBalance from "~/utils/fetchSolBalance";
import { useWallet } from '@solana/wallet-adapter-react';

const useGetBalance = () => {
  const [balance, setBalance] = useState(0);
  const { publicKey } = useWallet();

  useEffect(() => {
    let interval;

    if (publicKey) {
      fetchSolBalance(publicKey)
      interval = setInterval(() => {
        fetchSolBalance(publicKey)
          .then((bal) => setBalance(bal))
      }, 8000)
    }

    return () => clearInterval(interval);
  }, [publicKey]);

  return {balance}
};

export default useGetBalance;