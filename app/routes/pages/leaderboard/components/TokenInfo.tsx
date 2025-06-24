import Countdown from "~/components/Countdown";
import type { TCampaign, TCampaignStats } from "~/types";
import { formatPinataUrl } from "~/utils/formatPinataUrl";
import { formatNumberShortEU } from "~/utils/numbers";

type TProps = {
  campaign: TCampaign;
  campaignStats: TCampaignStats;
}

const TokenInfo = ({ campaign, campaignStats }: TProps) => {
  const { tokenName, tokenImage, shortDescription1, presaleDrawEndUTC } = campaign;
  const { totalTokensClaimed, totalTokensSold } = campaignStats;
  const totaltokensLeft = +totalTokensSold - +totalTokensClaimed;
  const timestamp = new Date(presaleDrawEndUTC).getTime();

  return (
    <div className="p-[12px] bg-background border-[2px] border-gray-700 rounded-[12px] lg:pb-[36px]">
      <div className="flex justify-between items-start gap-[10px] mb-[24px]">
        <div className="flex flex-col gap-[4px]">
          <span className="text-h3 text-white font-bold">{tokenName}</span>
          <span className="text-body-m text-beige-600 font-medium">{shortDescription1}</span>
        </div>

        <img src={formatPinataUrl(tokenImage)} alt="logo" className="w-[56px] h-auto object-contain"/>
      </div>
      
      <div className="flex flex-col gap-[12px] p-[12px] mb-[24px] rounded-[4px] bg-beige-800 text-body-l font-medium text-white">
        <span className="flex justify-between">
          Tokens distributed: <span className="font-mono">{formatNumberShortEU(+totalTokensClaimed)}</span>
        </span>

        <span className="h-[1px] w-full bg-gray-700" />

        <span className="flex justify-between">
          Tokens left: <span className="font-mono text-bronze">{formatNumberShortEU(totaltokensLeft)}</span>
        </span>
      </div>

      <div className="flex flex-col items-center gap-[12px]">
        <span className="text-h3 font-bold text-white">Time since draw start: </span>
        <Countdown timestamp={timestamp} timeSectionStyles="w-[70px]! lg:w-[64px]!" />
      </div>

    </div>
  );
};

export default TokenInfo;