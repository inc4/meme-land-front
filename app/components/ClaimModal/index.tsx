import { useWallet } from "@solana/wallet-adapter-react";

import Modal from "~/components/Modal";
import CustomInput from "~/components/CustomInput";
import CustomButton from "~/components/CustomButton";

import useClaim from "~/hooks/useClaim";
import useSolPrice from "~/hooks/useSolPrice";
import { formatPinataUrl } from "~/utils/formatPinataUrl";
import { formatNumberWithCommas, fromLamports } from "~/utils/numbers";
import type { TCampaign } from "~/types";

type TProps = {
  isOpen: boolean;
  onClose: () => void;
  campaign: TCampaign;
  userAllocation: number;
}

const ClaimModal = ({ isOpen, onClose, campaign, userAllocation }: TProps) => {
  const { tokenSymbol, tokenName, tokenImage, campaignId, listingPrice } = campaign;
  const { isMutating, trigger: claim } = useClaim(campaignId);
  const { publicKey } = useWallet();
  const solPrice = useSolPrice();

  const tokenFiatPrice = solPrice
    ? +listingPrice.$numberDecimal * +solPrice
    : 0;
  
  const allocationPrice = +(+fromLamports(userAllocation) * tokenFiatPrice).toFixed(2);

  const handleClaim = async () => {
    if (!tokenName || !tokenSymbol || !publicKey) return;

    try {
      await claim({ name: tokenName, symbol: tokenSymbol, publicKey });
      onClose();
    } catch (e) {
      console.log(e, 'Claim error');
    }

  };

  return (
    <Modal isOpen={isOpen} onClose={isMutating ? () => {} : onClose}>
      <div>
        <span className="text-2xl font-semibold block w-full text-center">Claim Your Tokens</span>
        <div className="flex flex-col gap-[10px] my-8">
          <CustomInput
            label="You Invest"
            value={formatNumberWithCommas(+fromLamports(userAllocation))}
            fiatPrice={formatNumberWithCommas(allocationPrice)}
            tokenName={tokenSymbol}
            tokenIcon={formatPinataUrl(tokenImage)}
            disabled
          />
        </div>
        <CustomButton
          customStyles="!text-body-l"
          handleClick={handleClaim}
          disabled={isMutating}
        >
          Claim & Hold
        </CustomButton>
        <CustomButton
          variant="linear"
          customStyles="!text-body-l !border-[1px] !border-[#697586] mt-3"
          handleClick={onClose}
          disabled={isMutating}
        >
          Close
        </CustomButton>
      </div>
    </Modal>
  )
};

export default ClaimModal;
