import InfoIcon from "~/components/Icons/Info";
import ArrowIcon from "~/components/Icons/Arrow";
import clockIcon from "~/assets/svg/clock.svg";
import raydium from "~/assets/svg/raydium.svg";
import jupiter from "~/assets/svg/jupiter.svg";

const TokenInfo = () => {
  return (
    <section>
      <h2 className="text-[32px] font-bold">Token Info</h2>
      <div className="grid grid-cols-1 mt-6 lg:grid-cols-2 gap-[14px]">
        <div className="p-5 bg-[#0F1113] rounded-[14px]">
          <div className="flex flex-col gap-5 border-b-[1px] border-b-[#73737320] pb-4 mb-6 lg:flex-row lg:justify-between">
            <span className="flex items-center gap-2 font-bold text-[20px]">
              <InfoIcon/>
              Current Supply:
            </span>
            <span className="text-2xl font-medium">888,888,888 $BEER2</span>
          </div>
          <div className="flex flex-col gap-3 lg:flex-row lg:gap-5">
            <button disabled className="presale-link-bg flex items-center justify-between text-[#3AFFA3] font-medium py-3 px-4 rounded-[10px] disabled:opacity-50">
              Check on Solscan
              <ArrowIcon />
            </button>
            <button disabled className="presale-link-bg flex items-center justify-between text-[#3AFFA3] font-medium py-3 px-4 rounded-[10px] disabled:opacity-50">
              Check on Solscan
              <ArrowIcon />
            </button>
          </div>
        </div>
        <div className="p-5 bg-[#0F1113] rounded-[14px]">
          <div className="flex items-center justify-between border-b-[1px] border-[#73737320] pb-4 mb-6">
            <span className="flex items-center gap-2 font-bold text-[20px]">
              <InfoIcon/>
              Swap Token
            </span>
            <span className="uppercase text-sm font-semibold flex">
              waiting
              <img src={clockIcon} alt="clock" className="ml-[10px]"/>
            </span>
          </div>
          <div className="flex flex-col gap-3 lg:flex-row lg:gap-5">
            <button
              disabled
              className="presale-link-bg flex items-center font-medium py-3 px-4 rounded-[10px] disabled:opacity-50"
            >
              <img src={raydium} alt="" className="mr-2"/>
              Check on Solscan
              <ArrowIcon className="ml-auto" />
            </button>
            <button disabled className="presale-link-bg flex items-center font-medium py-3 px-4 rounded-[10px] disabled:opacity-50">
              <img src={jupiter} alt="" className="mr-2"/>
              Check on Solscan
              <ArrowIcon className="ml-auto" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
};

export default TokenInfo;
