import { AnchorProvider } from "@coral-xyz/anchor";
import { useWallet } from "@solana/wallet-adapter-react";
import { Connection } from "@solana/web3.js";

const connection = new Connection(import.meta.env.VITE_RPC_URL);

const useAnchorProvider = () => {
  const wallet = useWallet();

  return new AnchorProvider(connection, wallet, {
    preflightCommitment: "processed",
  });
};

export default useAnchorProvider;
