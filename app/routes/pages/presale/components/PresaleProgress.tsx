import solIcon from "~/assets/svg/solana-logo.svg";
import checkIcon from "~/assets/svg/check.svg";
import NeonShadowBox from "~/components/NeonShadowBox";
import type {TCampaign} from "~/types";
import useCampaignStats from "~/hooks/useCampaignStats";
import useUserAllocation from "~/hooks/useUserAllocation";
import clsx from "clsx";
import useSolPrice from "~/hooks/useSolPrice";
import {formatNumberPretty} from "~/utils/formatNumberPretty";

const PresaleProgress = ({campaign}: {campaign: TCampaign | undefined}) => {
  const { data: campaignStatsData } = useCampaignStats(campaign?.campaignId as string);
  const { data: userAllocationData } = useUserAllocation(campaign?.campaignId as string);
  const solPrice = useSolPrice();

  if (!campaignStatsData || !campaign) {
    return <div className="rounded-[14px] bg-neutral-900 animate-pulse h-[148px] w-full mt-[30px] lg:mt-[14px]"/>;
  }

  const percentCompleted = campaignStatsData.totalParticipants * 100 / campaign.amountOfWallet;
  const formattedAllocation = userAllocationData / 10 ** 9;

  return (
    <NeonShadowBox
      variant="violet"
      primaryShadowPosition="bottom"
      secondaryShadowPosition="outer"
      customBorderStyles="violet-box-border!"
      customStyles="p-5 mt-[30px] lg:mt-[14px]"
    >
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_452px] lg:grid lg:gap-[68px] gap-8">
        <div>
          <h3 className="font-semibold text-2xl mb-6 flex items-center">
            Presale progress:
            {campaign.currentStatus !== 'upcoming' && campaign.currentStatus !== 'presaleOpened' && (
              <span className="text-[#3AFFA3] ml-2 flex items-center gap-2">
                Completed
                <img src={checkIcon} alt="check"/>
              </span>
            )}
          </h3>
          <div className="bg-[#222222] rounded-[7px] h-3 w-full">
            <div
              className="bg-linear-to-r from-[#3AFFA3] to-[#25925E] h-full rounded-[7px] shadow-[0px_2px_2px_0px_#00000040]"
              style={{width: percentCompleted + '%'}}
            />
          </div>
          <div className="lg:flex lg:justify-between lg:items-center">
            <span className="font-medium mt-2 mb-3 block font-mono">{campaignStatsData.totalParticipants.toNumber()} / {campaign?.amountOfWallet} WALLETS</span>
            <p className="font-medium flex items-center">
              <span className="mr-1 block">
                RAISED:
              </span>
              <span className="font-black text-[#F24BE7] font-mono">{campaignStatsData.totalSolCollected.toNumber() / 10 ** 9} SOL</span>
              <img src={solIcon} alt="solana" className="w-4 h-4 ml-3"/>
            </p>
          </div>
        </div>
        <div className={clsx('bg-[#080808] rounded-xl py-5 px-5 flex items-center justify-between border-2', userAllocationData ? 'border-[#3AFFA3]' : 'border-transparent')}>
          <span className="text-body-m font-semibold">Your Allocation</span>
          <div className="flex flex-col items-end gap-1 font-semibold text-body-m font-mono">
            <span>{userAllocationData ? formattedAllocation : '-'} {campaign.tokenSymbol}</span>
            <span className="opacity-50">
              ({userAllocationData ? (formattedAllocation * +formatNumberPretty(campaign.presalePrice.$numberDecimal) * solPrice).toFixed(2) : '-'}$)
            </span>
          </div>
        </div>
      </div>
    </NeonShadowBox>
  )
};

export default PresaleProgress