import clsx from "clsx";
import { useWallet } from "@solana/wallet-adapter-react";
import CustomButton from "~/components/CustomButton";
import NeonShadowBox from "~/components/NeonShadowBox";
import refreshIcon from "~/assets/svg/refresh.svg";

import useIsClaimable from "~/hooks/useIsClaimable";
import useClaim from "~/hooks/useClaim";
import { formatNumberWithCommas } from "~/utils/numbers";
import type { TCampaign } from "~/types";

type TProps = {
  campaign: TCampaign;
  userAllocation: number | undefined;
  userGroup: number | undefined;
}

const AllocationInfo = ({ campaign, userAllocation, userGroup }: TProps) => {
  const { tokenSymbol, tokenName, campaignId } = campaign;
  const { isLoading, data: isClamableData } = useIsClaimable(campaignId);
  const { isMutating, data: claimTx, trigger: claim } = useClaim(campaignId);
  const { publicKey } = useWallet();

  const handleClaim = () => {
    if (!tokenName || !tokenSymbol || !publicKey) return;

    claim({ name: tokenName, symbol: tokenSymbol, publicKey })
  };

  console.log(`Claim tx: ${claimTx}`);

  return (
    <NeonShadowBox
      variant="green"
      primaryShadowPosition="top"
      secondaryShadowPosition="inner"
      customStyles="p-[12px] pt-[38px] lg:pt-[71px]"
    >
      <div>

        <div className="flex flex-col items-center m-auto mb-[24px]">
          <span className="text-body-s text-beige-600 uppercase font-semibold">Your Allocation</span>
          <span className="text-h2 text-primary font-medium font-mono">
            {userAllocation ? formatNumberWithCommas(userAllocation) : '0'} ${tokenSymbol}
          </span>
        </div>

        <CustomButton
          variant="white"
          customStyles="block max-w-[128px] w-full m-auto mb-[36px] shadow-none text-body-l! lg:mb-[43px]"
          disabled={isLoading || isMutating || !isClamableData?.available || !userAllocation}
          handleClick={handleClaim}
        >
          Claim
        </CustomButton>

        <div className={clsx(
          "flex justify-between items-center w-full px-[18px] py-[20px] lg:py-[24px]",
          "bg-black border-[2px] border-gray-700 rounded-[8px]"
        )}>
          <div className="flex flex-col gap-[8px]">
            <span className="text-body-s text-beige-600 uppercase font-semibold">Your wallet position</span>
            <span className="text-h3 text-white font-bold">#{userGroup || '---'}</span>
          </div>

          {/* <CustomButton
            variant="linear"
            customStyles={clsx(
              "flex justify-center items-center gap-[8px] max-w-[114px] w-full px-[16px] py-[8px]",
              "border-none rounded-[44px] bg-gray-700! text-white text-body-m!",
              "hover:bg-beige-900!"
            )}
          >
            Refresh <img src={refreshIcon} alt="Refresh" />
          </CustomButton> */}
        </div>

      </div>
    </NeonShadowBox>
  )
};

export default AllocationInfo;
