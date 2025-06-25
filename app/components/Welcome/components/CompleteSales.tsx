import DexLogo from "~/components/Icons/DexLogo";
import Telegram from "~/components/Icons/Telegram";
import X from "~/components/Icons/X";
import useCampaigns from "~/hooks/useCampaigns";
import type {TCampaignResponse} from "~/types";

const CompleteSales = ({campaigns}: {campaigns: TCampaignResponse | undefined}) => {

  return !!campaigns?.page.size && (
    <section>
      <h1 className="mb-8 font-bold">Completed Sales</h1>
      <div className="rounded-lg overflow-auto border-1 border-[#1A1A1A]">
        <div className="grid grid-cols-[267px_220px_1fr_1fr] min-w-[900px] gap-6 text-body-m opacity-50 uppercase p-3">
          <span>Projects</span>
          <span>Description</span>
          <span className="text-right">All Time High</span>
          <span className="text-right">Links</span>
        </div>
        {campaigns.page.data.map((el) => (
          <div className="grid grid-cols-[267px_120px_1fr_1fr] min-w-[900px] gap-6 p-3 bg-[#0D0D0D]" key={el.projectName}>
            <div className="flex items-center">
              <div className="w-8 h-9 mr-3 rounded-[6px] bg-[#C5C5C5]" />
              <span className="text-[20px] font-bold">{el.projectName}</span>
            </div>
            <span className="font-medium text-body-l">{el.shortDescription1}</span>
            <span className="text-[#3AFFA3] font-medium text-right">-</span>
            <div className="flex gap-[14px] items-center justify-end">
              {el.dexscreener && (
                <a href={el.dexscreener} target="_blank">
                  <DexLogo />
                </a>
              )}
              {el.telegram && (
                <a href={el.telegram} target="_blank">
                  <Telegram/>
                </a>
              )}
              {el.twitter && (
                <a href={el.twitter} target="_blank">
                  <X/>
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
};

export default CompleteSales;
