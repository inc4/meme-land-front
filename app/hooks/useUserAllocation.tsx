import useSWR from "swr";
import { useWallet } from "@solana/wallet-adapter-react";
import { Program, web3, BN } from "@coral-xyz/anchor";

import useAnchorProvider from "./useAnchorProvider";
import useCampaign from "./useCampaign";
import getPdas from "~/utils/getPdas";
import getConfig from "~/config";
import {Buffer} from "buffer";

const { IDL } = getConfig();

// @ts-ignore
window.Buffer = Buffer;

const useUserAllocation = (campaignId: string) => {
  const { publicKey } = useWallet();
  const provider = useAnchorProvider();
  const { data: apiCampaign } = useCampaign(campaignId);
  const { tokenName, tokenSymbol } = apiCampaign || {};

  const fetcher = async (name: string, symbol: string, publicKey: web3.PublicKey) => {
    const program = new Program(IDL, provider);

    const { campaignPda } = getPdas(name, symbol, program.programId, publicKey);

    const [participantDataPda] = web3.PublicKey.findProgramAddressSync(
      [
        Buffer.from("participant_data"),
        campaignPda.toBuffer(),
        publicKey.toBuffer(),
      ],
      program.programId
    );

    const accountInfo = await provider.connection.getAccountInfo(participantDataPda);

    if (accountInfo) {
      const campaignStatsData = program.coder.accounts.decode(
        "participantData",
        accountInfo.data,
      );

      const amount = campaignStatsData.amount as BN;

      return +amount;
    }
  };

  return useSWR(
    publicKey && tokenName && tokenSymbol ? {
      key: 'allocation',
      publicKey,
      tokenName,
      tokenSymbol,
    } : null,
    ({ tokenName, tokenSymbol, publicKey }) => fetcher(tokenName, tokenSymbol, publicKey),
    { refreshInterval: 2000 },
  )
};

export default useUserAllocation;
