import {BN, Program, web3} from "@coral-xyz/anchor";
import idl from "~/idl/mem_land.json";
import getPdas from "~/utils/getPdas";
import {PublicKey, Transaction, sendAndConfirmRawTransaction} from "@solana/web3.js";
import type {TCampaign} from "~/types";
import {Buffer} from "buffer";

// @ts-ignore
window.Buffer = Buffer;

const participate = async (
  publicKey: PublicKey | null,
  campaign: TCampaign,
  provider: any, // AnchorProvider
  amount: string
) => {
  if (!publicKey) return null;

  const program = new Program(idl, provider);

  const pdas = getPdas(campaign.tokenName, campaign.tokenSymbol, program.programId, publicKey);

  const campaignData = await program.account.campaign.fetch(pdas.campaignPda);
  const campaignStatsData = await program.account.campaignStats.fetch(pdas.campaignStatsPda);

  const [participantDataPda] = PublicKey.findProgramAddressSync(
    [
      Buffer.from("participant_data"),
      pdas.campaignPda.toBuffer(),
      publicKey.toBuffer(),
    ],
    program.programId
  );

  const [participantPubkeyPda] = PublicKey.findProgramAddressSync(
    [
      Buffer.from("participant_pubkey"),
      pdas.campaignPda.toBuffer(),
      Buffer.from(campaignStatsData.totalParticipants.toArray("le", 8)),
    ],
    program.programId
  );

  const decimals = 9;
  const amountInSmallestUnits = new BN(amount * 10 ** decimals);

  try {
    const ix = await program.methods
      .participate({
        tokenName: campaign.tokenName,
        tokenSymbol: campaign.tokenSymbol,
        amount: amountInSmallestUnits,
      })
      .accounts({
        payer: publicKey,
        roleAccount: pdas.roleAccountPda,
        campaign: pdas.campaignPda,
        mintAccount: pdas.mintPda,
        solTreasury: campaignData.solTreasury,
        participantData: participantDataPda,
        participantPubkey: participantPubkeyPda,
        campaignStats: pdas.campaignStatsPda,
        systemProgram: web3.SystemProgram.programId,
      })
      .instruction();

    const tx = new Transaction().add(ix);
    tx.feePayer = publicKey;
    tx.recentBlockhash = (await provider.connection.getLatestBlockhash()).blockhash;

    const phantomProvider = window?.phantom?.solana;

    if (!phantomProvider && !phantomProvider?.isPhantom) {
      throw new Error('Phantom wallet not detected');
    }

    const { signature } = await phantomProvider.signAndSendTransaction(tx);

    await provider.connection.confirmTransaction(
      { signature },
      'finalized'
    );
    return signature;
  } catch (err) {
    throw new Error(err instanceof Error ? err.message : String(err));
  }
};

export default participate;
