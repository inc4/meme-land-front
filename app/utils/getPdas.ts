import {PublicKey} from "@solana/web3.js";
import {Buffer} from 'buffer';

const getPdas = (tokenName: string, tokenSymbol: string, programId: PublicKey, userPubkey?: PublicKey) => {
  const [mintPda] = PublicKey.findProgramAddressSync(
    [Buffer.from("mint"), Buffer.from(tokenName), Buffer.from(tokenSymbol)],
    programId
  );

  const [campaignPda] = PublicKey.findProgramAddressSync(
    [Buffer.from("campaign"), mintPda.toBuffer()],
    programId
  );

  const [campaignStatsPda] = PublicKey.findProgramAddressSync(
    [Buffer.from("stats"), mintPda.toBuffer()],
    programId
  );

  const [treasurePda] = PublicKey.findProgramAddressSync(
    [Buffer.from("treasure"), mintPda.toBuffer()],
    programId
  );

  const [authorityPda] = PublicKey.findProgramAddressSync(
    [Buffer.from("authority"), mintPda.toBuffer()],
    programId
  );

  let roleAccountPda;

  if (userPubkey) {
    [roleAccountPda] = PublicKey.findProgramAddressSync(
      [Buffer.from("role"), userPubkey.toBuffer()],
      programId
    );
  }

  return {
    mintPda,
    campaignPda,
    campaignStatsPda,
    treasurePda,
    authorityPda,
    roleAccountPda
  };
};

export default getPdas;
