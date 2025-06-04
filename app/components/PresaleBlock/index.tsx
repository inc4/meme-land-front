import beerToken from "~/assets/imgs/beercoin.png";
import beerTokenLogo from "~/assets/imgs/beercoin-logo.png";
import Countdown from "~/components/Countdown";

const PresaleBlock = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-[1fr_472px] lg:grid gap-[14px]">
      <div className="bg-[#0F1113] rounded-[14px] p-5">
        <div className="relative">
          <img src={beerToken} alt="token" className="w-full h-auto"/>
          <div className="bg-[url('app/assets/svg/token-icon-figure.svg')] absolute -top-[16px] bg-contain right-4 px-[33px] pt-[11px] pb-[6px] bg-no-repeat flex gap-1 items-stretch">
            <div className="bg-[#ED4646] text-white font-bold text-xs uppercase rounded-[95px] h-[27px] px-[14px] flex items-center">
              live
            </div>
            <div className="border-[1px] border-[#FFFFFF14] rounded-[95px] text-xs flex items-center pl-5 pr-[10px] before:w-[6px] before:h-[6px] before:rounded-full before:bg-[#12F287] before:left-[10px] before:absolute relative">
              12,432 Participants
            </div>
          </div>
        </div>
        <div className="flex flex-col mt-5">
          <div className="flex gap-[10px] items-center mb-4">
            <img src={beerTokenLogo} alt="logo" className="w-[62px] h-auto object-contain"/>
            <div className="flex flex-col gap-[2px]">
              <span className="text-white font-bold text-[24px]">Beercoin2.0</span>
              <span className="opacity-60 text-white text-sm">Liquid Gold, But new!</span>
            </div>
          </div>
          <div className="opacity-60 text-sm">Zesh AI Layer is an AI Layer on SUI, with 1.6M+ users. For a chance to participate in this crypto IDO please check the pre-sale details below.</div>
        </div>
      </div>
      <div>
        <div className="py-9 px-5 rounded-[14px] bg-[#] flex flex-col gap-4 mb-3 bg-radial-[at_50%_25%] to-[#0F1113] from-[#3AFFA31C] to-50%">
          <div className="text-lg flex justify-between items-center">
            <span className="font-semibold">Presale price</span>
            <span className="font-medium">$ 1.00</span>
          </div>
          <div className="text-lg flex justify-between items-center">
            <span className="font-semibold">Listing Multiplier</span>
            <span className="font-medium text-[#9D85FF]">X3.1</span>
          </div>
          <div className="text-lg flex justify-between items-center">
            <span className="font-semibold">Listing price</span>
            <span className="font-medium text-[#12F287]">$ 3.1</span>
          </div>
          <div className="text-lg flex justify-between items-center">
            <span className="font-semibold">Profit Chance</span>
            <span className="font-medium text-[#FFA544]">45.5%</span>
          </div>
        </div>
        <div className="py-5 rounded-[14px] bg-radial-[at_50%_25%] to-[#080808] from-[#72727230] to-100% mb-3">
          <span className="text-center font-bold text-white text-[20px] w-fit mx-auto block mb-5">Presale will start in:</span>
          <Countdown className="justify-between" />
        </div>
        <button
          type="button"
          className="flex items-center justify-center bg-white font-semibold rounded-2xl text-[#080808] shadow-lg py-4 w-full max-w-[500px] mx-auto"
        >
          PARTICIPATE NOW
        </button>
      </div>
    </div>
  );
};

export default PresaleBlock;
