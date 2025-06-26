import { useParams } from "react-router";

import Title from "./components/Title";
import TokenInfo from "./components/TokenInfo";
import WalletInfo from "./components/WalletInfo";
import DrawSpeed from "./components/DrawSpeed";
import AllocationInfo from "./components/AllocationInfo";
import RealTimeResults from "./components/RealTimeResults";
import Skeleton from "~/components/Skeleton";

import useCampaigns from "~/hooks/useCampaigns";
import useIsLiveDraw from "~/hooks/useIsLiveDraw";
import useCampaignStats from "~/hooks/useCampaignStats";
import useUserGroup from "~/hooks/useUserGroup";
import useUserAllocation from "~/hooks/useUserAllocation";
import { PRESALE_PAGE_SEGMENT } from "~/utils/constants";

const Leaderboard = () => {
  const params = useParams();
  const tokenName = params[PRESALE_PAGE_SEGMENT] || '';

  const { data: campaignsData, error: campaignDataError } = useCampaigns({ tokenName });
  const campaignData = campaignsData?.page.data[0];
  const campaignId = campaignData?.campaignId || ''

  const { data: campaignStatsData } = useCampaignStats(campaignId);
  const { data: userGroupData } = useUserGroup(campaignId);
  const { data: userAllocationData } = useUserAllocation(campaignId);
  
  const { isLoading, isLive, isEarly } = useIsLiveDraw({
    drawStart: campaignData?.presaleDrawStartUTC,
    drawEnd: campaignData?.presaleDrawEndUTC,
  });

  if (isEarly || campaignDataError) return;

  return (
    <div>
      <div className="mb-[24px] lg:mb-[48px]">
        {!isLoading ? <Title isLive={isLive} /> : <Skeleton className="h-[30px]! w-[300px]!" />}
      </div>

      <div className="grid grid-cols-1 gap-[12px] mb-[64px] lg:grid-cols-3 lg:grid-rows-[1fr,127px]">
        <div className="lg:[grid-area:1/1/3/2]">
          {!isLoading && campaignData && campaignStatsData
            ? <TokenInfo campaign={campaignData} campaignStats={campaignStatsData} />
            : <Skeleton className="h-[320px]! lg:h-[360px]!" />
          }
        </div>

        <div className="lg:[grid-area:1/2/2/3]">
          {!isLoading && campaignStatsData
            ? <WalletInfo campaignStats={campaignStatsData} userGroup={userGroupData} />
            : <Skeleton className="h-[215px]! lg:h-[220px]!" />
          }
        </div>

        <div className="lg:[grid-area:2/2/3/3]">
          {!isLoading && campaignData
            ? <DrawSpeed campaign={campaignData} />
            : <Skeleton className="h-[125px]! lg:h-[127px]!" />
          }
        </div>

        <div className="lg:[grid-area:1/3/3/4]">
          {!isLoading && campaignData
            ? (
              <AllocationInfo
                campaign={campaignData}
                userAllocation={userAllocationData}
                userGroup={userGroupData}
              />
            ) : <Skeleton className="h-[300px]! lg:h-[360px]!" />
          }
        </div>
      </div>

      <div className="pb-[88px] lg:pb-[120px]">
        <RealTimeResults campaignId={campaignId} />
      </div>
    </div>
  )
};

export default Leaderboard;