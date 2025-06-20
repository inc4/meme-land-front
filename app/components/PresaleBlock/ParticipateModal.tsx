import CustomInput from "~/components/CustomInput";
import CustomButton from "~/components/CustomButton";
import Modal from "~/components/Modal";
import {useEffect, useState} from "react";
import useGetBalance from "~/hooks/useGetBalance";
import useAnchorProvider from "~/hooks/useAnchorProvider";
import idl from '~/idl/mem_land.json'
import {Program, BN, web3} from "@coral-xyz/anchor";
import getPdas from "~/utils/getPdas";
import {useWallet} from "@solana/wallet-adapter-react";
import {Keypair, PublicKey} from "@solana/web3.js";
import {Buffer} from 'buffer';

const name = 'MemLand Token OLR';
const symbol = 'OLR';

const ParticipateModal = ({isOpen, onClose}: {isOpen: boolean, onClose: () => void}) => {
  const { balance, userAddress } = useGetBalance();
  const provider = useAnchorProvider();
  const { publicKey } = useWallet();

  const [amount, setAmount] = useState('1');

  useEffect(() => {
    setAmount('1');
  }, [isOpen]);

  const participate = async () => {
    const program = new Program(idl, provider);
    const pdas = getPdas(name, symbol, program.programId, publicKey);
    const campaignData = await program.account.campaign.fetch(pdas.campaignPda);

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
        campaignData.counter.toBuffer("le", 8),
      ],
      program.programId
    );
    const decimals = 9; // usually 9 for SOL or SPL tokens
    const amountInSmallestUnits = new BN(amount * 10 ** decimals);

    try {
      const tx = await program.methods
        .participate({
          tokenName: name,
          tokenSymbol: symbol,
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
        // .signers([signer])
        .rpc();

      return tx;
    } catch (err) {
      if (err) console.error(err);
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div>
        <span className="text-2xl font-semibold block w-full text-center">Invest in Presale</span>
        <div className="flex flex-col gap-[10px] my-8">
          <CustomInput
            label="You Invest"
            balance={balance.toString()}
            value={amount}
            onChange={setAmount}
            tokenName="SOL"
          />
          <CustomInput
            label="Your chance to get"
            value="13,242"
            tokenName="$BEER2"
          />
        </div>
        <CustomButton
          customStyles="!text-body-l"
          handleClick={participate}
        >
          Enter to Presale
        </CustomButton>
        <CustomButton
          variant="linear"
          customStyles="!text-body-l !border-[1px] !border-[#697586] mt-3"
          handleClick={onClose}
        >
          Cancel
        </CustomButton>
      </div>
    </Modal>
  )
};

export default ParticipateModal;
