import { useState } from "react";
import clsx from "clsx";
import CustomButton from "~/components/CustomButton";
import NeonShadowBox from "~/components/NeonShadowBox";
import ClaimModal from "~/components/ClaimModal";

import useIsClaimable from "~/hooks/useIsClaimable";
import { formatNumberWithCommas } from "~/utils/numbers";
import type { TCampaign } from "~/types";

type TProps = {
  campaign: TCampaign;
  userAllocation: number | undefined;
  userGroup: number | undefined;
}

const AllocationInfo = ({ campaign, userAllocation, userGroup }: TProps) => {
  const { tokenSymbol, campaignId } = campaign;
  const { data: isClaimableData } = useIsClaimable(campaignId);
  const [isModalOpened, setIsModalOpened] = useState(false);

  return (
    <>
      {userAllocation && (
        <ClaimModal
          isOpen={isModalOpened}
          onClose={() => setIsModalOpened(false)}
          campaign={campaign}
          userAllocation={userAllocation}
        />
      )}
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
            disabled={!isClaimableData?.available || !userAllocation}
            handleClick={() => setIsModalOpened(true)}
          >
            Claim
          </CustomButton>

          <div className={clsx(
              "flex flex-col gap-[8px]",
              "w-full px-[18px] py-[20px] lg:py-[24px]",
              "bg-black border-[2px] border-gray-700 rounded-[8px]",
            )}
          >
            <span className="text-body-s text-beige-600 uppercase font-semibold">Your wallet position</span>
            <span className="text-h3 text-white font-bold">#{userGroup || '---'}</span>
          </div>

        </div>
      </NeonShadowBox>
    </>
  )
};

export default AllocationInfo;
