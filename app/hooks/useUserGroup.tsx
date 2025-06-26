import useSWR from "swr";
import { useWallet } from "@solana/wallet-adapter-react";
import { Program, web3, BN } from "@coral-xyz/anchor";
import { randomnessAccountAddress } from "@orao-network/solana-vrf";

import useAnchorProvider from "./useAnchorProvider";
import useCampaign from "./useCampaign";
import getPdas from "~/utils/getPdas";
import idl from '~/idl/mem_land.json'
import {Buffer} from "buffer";

// @ts-ignore
window.Buffer = Buffer;

const useUserGroup = (campaignId: string) => {
  const { publicKey } = useWallet();
  const provider = useAnchorProvider();
  const { data: apiCampaign } = useCampaign(campaignId);
  const { tokenName, tokenSymbol } = apiCampaign || {};

  const fetcher = async (name: string, symbol: string, publicKey: web3.PublicKey) => {
    const program = new Program(idl, provider);

    const { campaignPda, mintPda, campaignStatsPda } = getPdas(name, symbol, program.programId, publicKey);

    const [participantDataPda] = web3.PublicKey.findProgramAddressSync(
      [
        Buffer.from("participant_data"),
        campaignPda.toBuffer(),
        publicKey.toBuffer(),
      ],
      program.programId
    );

    // Get randomness seed account
    const random = randomnessAccountAddress(campaignPda.toBuffer());


    const result = (await program.methods
      .getUserGroup({
        tokenName: name,
        tokenSymbol: symbol,
      })
      .accounts({
        user: publicKey,
        campaign: campaignPda,
        mintAccount: mintPda,
        randSeed: random,
        participantData: participantDataPda,
        campaignStats: campaignStatsPda,
      })
      .view()) as BN;

    return +result;
  };

  return useSWR(
    publicKey && tokenName && tokenSymbol ? {
      key: 'user-group',
      publicKey,
      tokenName,
      tokenSymbol,
    } : null,
    ({ tokenName, tokenSymbol, publicKey }) => fetcher(tokenName, tokenSymbol, publicKey),
    { refreshInterval: 2000 },
  )
};

export default useUserGroup;
