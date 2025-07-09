import { AnchorProvider } from "@coral-xyz/anchor";
import { useWallet } from "@solana/wallet-adapter-react";
import { clusterApiUrl, Connection } from "@solana/web3.js";
import getConfig from "~/config";

const { NETWORK_ID } = getConfig();

const connection = new Connection(clusterApiUrl(NETWORK_ID));

const useAnchorProvider = () => {
  const wallet = useWallet();

  return new AnchorProvider(connection, wallet, {
    preflightCommitment: "processed",
  });
};

export default useAnchorProvider;
