import CustomInput from "~/components/CustomInput";
import CustomButton from "~/components/CustomButton";
import Modal from "~/components/Modal";
import {useEffect, useMemo, useState} from "react";
import useGetBalance from "~/hooks/useGetBalance";
import useAnchorProvider from "~/hooks/useAnchorProvider";
import {useWallet} from "@solana/wallet-adapter-react";
import type {TCampaign} from "~/types";
import {formatPinataUrl} from "~/utils/formatPinataUrl";
import participate from "~/utils/participate";
import {web3} from "@coral-xyz/anchor";
import {toast} from "react-toastify";
import spinnerIcon from '~/assets/svg/spinner.svg';

const ParticipateModal = ({isOpen, onClose, campaign}: {isOpen: boolean, onClose: () => void, campaign: TCampaign}) => {
  const { balance, userAddress } = useGetBalance();
  const provider = useAnchorProvider();
  const { publicKey } = useWallet();

  const [amount, setAmount] = useState('1');

  useEffect(() => {
    setAmount('1');
  }, [isOpen]);

  const handleSubmit = async ()=> {
    const toastId = toast.info('Transaction in Progress', {
      autoClose: false,
      icon: <img src={spinnerIcon} alt="loader" className="animate-spin"/>
    });
    try {
      await participate(publicKey, campaign, provider, amount);
      toast.success('Successful transaction');
      onClose();
    } catch (e) {
      console.log(e);
      toast.error('Transaction Error')
    }
    toast.dismiss(toastId);
  }

  const handleMax = async () => {
    if (!publicKey || !provider?.connection) return;

    const lamportsBalance = await provider.connection.getBalance(publicKey);

    // Estimate the fee for the actual transaction (rough estimate)
    const dummyTx = new web3.Transaction();
    dummyTx.feePayer = publicKey;
    dummyTx.recentBlockhash = (await provider.connection.getLatestBlockhash()).blockhash;

    // Use getFeeForMessage for a more realistic fee estimation
    const message = dummyTx.compileMessage();
    const feeResult = await provider.connection.getFeeForMessage(message);
    const estimatedFeeLamports = feeResult.value || 5000;

    const availableLamports = lamportsBalance - estimatedFeeLamports;

    // Prevent going negative (user has too little)
    const availableSOL = Math.max(availableLamports / web3.LAMPORTS_PER_SOL, 0);

    // Set amount with precision
    setAmount(availableSOL.toFixed(6));
  };

  const validationError = useMemo(() => {
    if (+amount > balance) {
      return 'Insufficient balance';
    } else if (+amount < +campaign.minInvestmentSize.$numberDecimal) {
      return 'Amount should be grater then min investment size';
    } else if (+amount > +campaign.maxInvestmentSize.$numberDecimal) {
      return 'Amount should be less then max investment size';
    } else return null;
  }, [amount, balance, campaign])

  if (!campaign) {
    return null
  }

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
            setMax={handleMax}
          />
          {validationError && (
            <span className="text-sm text-red-500 w-full text-left">{validationError}</span>
          )}
          <CustomInput
            label="Your chance to get"
            value={(+amount / campaign.presalePrice.$numberDecimal).toString()}
            tokenName={campaign.tokenSymbol}
            tokenIcon={formatPinataUrl(campaign.tokenImage)}
          />
        </div>
        <CustomButton
          customStyles="!text-body-l"
          handleClick={handleSubmit}
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
