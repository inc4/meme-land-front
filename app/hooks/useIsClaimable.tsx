import useSWR from "swr";
import { useWallet } from "@solana/wallet-adapter-react";
import { Program, web3 } from "@coral-xyz/anchor";

import useAnchorProvider from "./useAnchorProvider";
import useCampaign from "./useCampaign";
import getPdas from "~/utils/getPdas";
import idl from '~/idl/mem_land.json'
import {Buffer} from "buffer";

// @ts-ignore
window.Buffer = Buffer;

const useIsClaimable = (campaignId: string) => {
  const { publicKey } = useWallet();
  const provider = useAnchorProvider();
  const { data: apiCampaign } = useCampaign(campaignId);
  const { tokenName, tokenSymbol } = apiCampaign || {};

  const fetcher = async (name: string, symbol: string, publicKey: web3.PublicKey) => {
    const program = new Program(idl, provider);

    const { campaignPda } = getPdas(name, symbol, program.programId, publicKey);

    const [participantDataPda] = web3.PublicKey.findProgramAddressSync(
      [
        Buffer.from("participant_data"),
        campaignPda.toBuffer(),
        publicKey.toBuffer(),
      ],
      program.programId
    );

    const [campaign, participantData] = await Promise.all([
      //@ts-ignore
      program.account.campaign.fetch(campaignPda),
      //@ts-ignore
      program.account.participantData
        .fetch(participantDataPda)
        .catch(() => null),
    ]);

    const status = Object.keys(campaign.status)[0];
  
    if (!participantData) {
      return { available: false, reason: "Not participated" };
    }
  
    if (participantData.claimed) {
      return { available: false, reason: "Already claimed" };
    }

    if (status !== "DistributionOpened") {
      return { available: false, reason: "Distribution not open" };
    }
    
    return { available: true };
  };

  return useSWR(
    publicKey && tokenName && tokenSymbol ? {
      key: 'is-claimable',
      publicKey,
      tokenName,
      tokenSymbol,
    } : null,
    ({ tokenName, tokenSymbol, publicKey }) => fetcher(tokenName, tokenSymbol, publicKey),
    { refreshInterval: 2000 },
  )
};

export default useIsClaimable;
