import {AnchorProvider} from "@coral-xyz/anchor";
import {useWallet} from "@solana/wallet-adapter-react";
import {connection} from "~/utils/constants";

const useAnchorProvider = () => {
  const wallet = useWallet();

  return new AnchorProvider(connection, wallet, {
    preflightCommitment: "processed",
  });
};

export default useAnchorProvider;
