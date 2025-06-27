import InfoIcon from "~/components/Icons/Info";
import ArrowIcon from "~/components/Icons/Arrow";
import clockIcon from "~/assets/svg/clock.svg";
import raydium from "~/assets/svg/raydium.svg";
import jupiter from "~/assets/svg/jupiter.svg";
import type {TCampaign} from "~/types";

const TokenInfo = ({isLoading, campaign}: {isLoading: boolean, campaign: TCampaign|undefined}) => {
  return (
    <section>
      <h1 className="font-bold">Token Info</h1>
      <div className="grid grid-cols-1 mt-6 lg:grid-cols-2 gap-[14px]">
        <div className="p-5 bg-[#0F1113] rounded-[14px]">
          <div className="flex flex-col gap-5 border-b-[1px] border-b-[#73737320] pb-4 mb-6 lg:flex-row lg:justify-between">
            <h3 className="flex items-center gap-2 font-bold">
              <InfoIcon/>
              Current Supply:
            </h3>
            <span className="text-2xl font-medium font-mono">{isLoading ? '-' : `1,000,000,000 ${campaign?.tokenSymbol}`}</span>
          </div>
          <div className="flex flex-col gap-3 lg:flex-row lg:gap-5">
            <a href={campaign?.solscan || ''} target="_blank">
              <button
                disabled={!campaign?.solscan}
                className="presale-link-bg flex items-center justify-between text-[#3AFFA3] font-medium py-3 px-4 rounded-[10px] disabled:opacity-50 gap-[10px]"
              >
                Check on Solscan
                <ArrowIcon/>
              </button>
            </a>
              <a href={campaign?.dexscreener || ''} target="_blank">
                <button
                  disabled={!campaign?.dexscreener}
                  className="presale-link-bg flex items-center justify-between text-[#3AFFA3] font-medium py-3 px-4 rounded-[10px] disabled:opacity-50 gap-[10px]"
                >
                  Check on Dexscreener
                  <ArrowIcon/>
                </button>
              </a>
          </div>
        </div>
        <div className="p-5 bg-[#0F1113] rounded-[14px]">
          <div className="flex items-center justify-between border-b-[1px] border-[#73737320] pb-4 mb-6">
            <h3 className="flex items-center gap-2 font-bold">
              <InfoIcon/>
              Swap Token
            </h3>
            {(!campaign?.raydium && !campaign?.jupiter) && (
              <span className="uppercase text-body-m font-semibold flex">
                waiting
                <img src={clockIcon} alt="clock" className="ml-[10px]"/>
              </span>
            )}
          </div>
          <div className="flex flex-col gap-3 lg:flex-row lg:gap-5">
            <a href={campaign?.raydium || ''} target="_blank">
              <button
                disabled={!campaign?.raydium}
                className="presale-link-bg flex items-center font-medium py-3 px-4 rounded-[10px] disabled:opacity-50 gap-[10px]"
              >
                <img src={raydium} alt=""/>
                On Raydium
                <ArrowIcon className="ml-auto"/>
              </button>
            </a>
            <a href={campaign?.jupiter || ''} target="_blank">
              <button
                disabled={!campaign?.jupiter}
                className="presale-link-bg flex items-center font-medium py-3 px-4 rounded-[10px] disabled:opacity-50 gap-[10px]"
              >
                <img src={jupiter} alt=""/>
                Jupiter
                <ArrowIcon className="ml-auto"/>
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
)
};

export default TokenInfo;
