import useSWRMutation from "swr/mutation";
import { useWallet } from "@solana/wallet-adapter-react";
import { Program, web3 } from "@coral-xyz/anchor";
import { randomnessAccountAddress } from "@orao-network/solana-vrf";
import {
  TOKEN_PROGRAM_ID,
  ASSOCIATED_TOKEN_PROGRAM_ID,
  getAssociatedTokenAddress,
} from "@solana/spl-token";

import useAnchorProvider from "./useAnchorProvider";
import useCampaign from "./useCampaign";
import getPdas from "~/utils/getPdas";
import idl from '~/idl/mem_land.json';

type TTriggerArgs = {
  name: string,
  symbol: string,
  publicKey: web3.PublicKey,
};

const useClaim = (campaignId: string) => {
  const { publicKey } = useWallet();
  const provider = useAnchorProvider();
  const { data: apiCampaign } = useCampaign(campaignId);
  const { tokenName, tokenSymbol } = apiCampaign || {};

  const getTokenAccounts = async (
    mintPda: web3.PublicKey,
    userPubkey: web3.PublicKey,
    treasurePda: web3.PublicKey,
  ) => {
    const userTokenAccount = await getAssociatedTokenAddress(
      mintPda,
      userPubkey,
      false,
      TOKEN_PROGRAM_ID,
      ASSOCIATED_TOKEN_PROGRAM_ID
    );
  
    const treasureTokenAccount = await getAssociatedTokenAddress(
      mintPda,
      treasurePda,
      true,
      TOKEN_PROGRAM_ID,
      ASSOCIATED_TOKEN_PROGRAM_ID
    );
  
    return { userTokenAccount, treasureTokenAccount };
  }

  const claim = async (name: string, symbol: string, publicKey: web3.PublicKey) => {
    const program = new Program(idl, provider);

    const { campaignPda, campaignStatsPda, mintPda, treasurePda } = getPdas(name, symbol, program.programId, publicKey);

    const [participantDataPda] = web3.PublicKey.findProgramAddressSync(
      [
        Buffer.from("participant_data"),
        campaignPda.toBuffer(),
        publicKey.toBuffer(),
      ],
      program.programId
    );

    const random = randomnessAccountAddress(campaignPda.toBuffer());

    const { userTokenAccount, treasureTokenAccount } = await getTokenAccounts(
      mintPda,
      publicKey,
      treasurePda
    );

    const tx = await program.methods
      .claimTokens({
        tokenName: name,
        tokenSymbol: symbol,
      })
      .accounts({
        user: publicKey,
        campaign: campaignPda,
        mintAccount: mintPda,
        randSeed: random,
        participantData: participantDataPda,
        treasureAccount: treasurePda,
        treasureTokenAccount: treasureTokenAccount,
        userTokenAccount: userTokenAccount,
        campaignStats: campaignStatsPda,
        tokenProgram: TOKEN_PROGRAM_ID,
        associatedTokenProgram: ASSOCIATED_TOKEN_PROGRAM_ID,
        systemProgram: web3.SystemProgram.programId,
      })
      .rpc();

    return tx;
  };

  return useSWRMutation(
    {
      key: 'claim',
      publicKey,
      tokenName,
      tokenSymbol,
    },
    (_, { arg }: { arg: TTriggerArgs }) => claim(arg.name, arg.symbol, arg.publicKey)
  );
};

export default useClaim;