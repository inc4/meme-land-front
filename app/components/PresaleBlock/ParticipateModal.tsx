import CustomInput from "~/components/CustomInput";
import CustomButton from "~/components/CustomButton";
import Modal from "~/components/Modal";
import {useEffect, useState} from "react";
import useGetBalance from "~/hooks/useGetBalance";
import useAnchorProvider from "~/hooks/useAnchorProvider";
import {useWallet} from "@solana/wallet-adapter-react";
import type {TCampaign} from "~/types";
import {formatPinataUrl} from "~/utils/formatPinataUrl";
import participate from "~/utils/participate";

const ParticipateModal = ({isOpen, onClose, campaign}: {isOpen: boolean, onClose: () => void, campaign: TCampaign}) => {
  const { balance, userAddress } = useGetBalance();
  const provider = useAnchorProvider();
  const { publicKey } = useWallet();

  const [amount, setAmount] = useState('1');

  useEffect(() => {
    setAmount('1');
  }, [isOpen]);

  const handleSubmit = ()=> {
    participate(publicKey, campaign, provider, amount);
  }

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
          />
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
