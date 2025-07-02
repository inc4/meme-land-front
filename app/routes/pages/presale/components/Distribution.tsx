import type {TCampaign} from "~/types";
import {formatNumberPretty} from "~/utils/formatNumberPretty";

const Distribution = ({isLoading, campaign}: {isLoading: boolean, campaign: TCampaign | undefined}) => {

  const list = [
    {
      text: 'Funds to LP  (liquidity pool)',
      percent: formatNumberPretty(campaign?.fundsToLP.$numberDecimal),
      color: '#3AFFA3',
    },
    {
      text: 'Buyback Reserve',
      percent: formatNumberPretty(campaign?.buybackReserve.$numberDecimal),
      color: '#FFA544',
    },
    {
      text: 'Team',
      percent: formatNumberPretty(campaign?.team.$numberDecimal),
      color: '#E25A57',
    },
    {
      text: 'Liquidity at listing',
      percent: formatNumberPretty(campaign?.liquidityAtListing.$numberDecimal),
      color: '#9D85FF',
    },
  ]
  return (
    <section>
      <h1 className="font-bold">Funds Distribution & Use</h1>
      <div className="grid grid-cols-1 gap-3 mt-6 lg:grid-cols-2">
        <div className="grid grid-cols-2 gap-2 p-5 rounded-[14px] bg-[#0F1113]">
          <div className="bg-[#080808] rounded-xl border-[1px] border-[#1B1B1B] flex flex-col items-center pt-14 pb-6 lg:pt-[100px] lg:pb-[80px] lg:justify-between">
            <span className="text-2xl lg:text-[44px] font-mono">{isLoading ? '-' : formatNumberPretty(campaign?.tokensSentToLP.$numberDecimal)}%</span>
            <span className="text-body-m text-center mt-8 block lg:text-[20px]">
              Tokens{" "}
              <br/>
              Sent to LP
            </span>
          </div>
          <div className="bg-[#080808] rounded-xl border-[1px] border-[#1B1B1B] flex flex-col items-center pt-14 pb-6 lg:pt-[100px] lg:pb-[80px] lg:justify-between">
            <span className="text-2xl lg:text-[44px] text-[#3AFFA3] font-mono">{isLoading ? '-' : formatNumberPretty(campaign?.priceLevelSupport.$numberDecimal)}</span>
            <span className="text-body-m text-center mt-8 block lg:text-[20px]">
              Price Support <br/> Level
            </span>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          {list.map((el) => (
            <div key={el.text} className="px-5 py-6 rounded-[14px] bg-[#0F1113]">
              <div className="font-bold flex items-center justify-between mb-4">
                <span className="text-h3">{el.text}</span>
                <span className="text-h3">{isLoading ? '-' : el.percent}%</span>
              </div>
              <div className="w-full h-2 bg-[#FFFFFF26] rounded-[77px]">
                <div
                  style={{background: el.color, width: (isLoading ? 0 : el.percent > 100 ? 100 : el.percent) + '%'}}
                  className="h-full  rounded-[77px]"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
};

export default Distribution;
