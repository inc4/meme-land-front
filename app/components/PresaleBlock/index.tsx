import beerToken from "~/assets/imgs/beercoin.png";
import beerTokenLogo from "~/assets/imgs/beercoin-logo.png";
import Countdown from "~/components/Countdown";
import CustomButton from "~/components/CustomButton";
import Telegram from "~/components/Icons/Telegram";
import X from "~/components/Icons/X";
import Browse from "~/components/Icons/Browse";
import bgFigure from "~/assets/svg/token-icon-figure.svg";
import Modal from "~/components/Modal";
import CustomInput from "~/components/CustomInput";

const PresaleBlock = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-[1fr_472px] lg:grid gap-[14px]">
      <div className="bg-[#0F1113] rounded-[14px] p-5">
        <div className="relative">
          <img src={beerToken} alt="token" className="w-full h-auto"/>
          <div style={{backgroundImage: `url("${bgFigure}"`}} className="absolute -top-[16px] bg-contain right-4 px-[33px] pt-[11px] pb-[6px] bg-no-repeat flex gap-1 items-stretch">
            <div className="text-body-s bg-[#ED4646] text-white font-black uppercase rounded-[95px] h-[27px] px-[14px] flex items-center">
              live
            </div>
            <div className="font-mono border-[1px] border-[#FFFFFF14] rounded-[95px] text-body-s flex items-center pl-5 pr-[10px] before:w-[6px] before:h-[6px] before:rounded-full before:bg-[#12F287] before:left-[6px] before:absolute relative">
              12,432 Participants
            </div>
          </div>
        </div>
        <div className="flex flex-col mt-5">
          <div className="flex flex-col gap-6 mb-4 lg:flex-row lg:justify-between">
            <div className="flex gap-[10px] items-center">
              <img src={beerTokenLogo} alt="logo" className="w-[62px] h-auto object-contain"/>
              <div className="flex flex-col gap-[2px]">
                <span className="text-white font-bold text-[24px]">Beercoin2.0</span>
                <span className="opacity-60 text-white text-body-m">Liquid Gold, But new!</span>
              </div>
            </div>
            <div className="flex gap-4">
              <CustomButton variant="icon-only" customStyles="!w-10 !h-10 !p-0">
                <Telegram className="w-6 h-6"/>
              </CustomButton>
              <CustomButton variant="icon-only" customStyles="!w-10 !h-10 !p-0">
                <Browse className="w-6 h-6"/>
              </CustomButton>
              <CustomButton variant="icon-only" customStyles="!w-10 !h-10 !p-0">
                <X className="w-6 h-6"/>
              </CustomButton>
            </div>
          </div>

          <div className="opacity-60 text-body-m">Zesh AI Layer is an AI Layer on SUI, with 1.6M+ users. For a chance to
            participate in this crypto IDO please check the pre-sale details below.
          </div>
        </div>
      </div>
      <div>
        <div
          className="py-9 px-5 rounded-[14px] bg-[#] flex flex-col gap-4 mb-3 bg-radial-[at_50%_25%] to-[#0F1113] from-[#3AFFA31C] to-50%">
          <div className="text-lg flex justify-between items-center">
            <span className="font-semibold lg:font-bold text-h4">Presale price</span>
            <span className="text-h4 font-medium font-mono lg:text-2xl">$ 1.00</span>
          </div>
          <div className="text-lg flex justify-between items-center">
            <span className="font-semibold lg:font-bold text-h4">Listing Multiplier</span>
            <span className="text-h4 font-medium text-[#9D85FF] font-mono lg:text-2xl">X3.1</span>
          </div>
          <div className="text-lg flex justify-between items-center">
            <span className="font-semibold lg:font-bold text-h4">Listing price</span>
            <span className="text-h4 font-medium text-[#12F287] font-mono lg:text-2xl">$ 3.1</span>
          </div>
          <div className="text-lg flex justify-between items-center">
            <span className="font-semibold lg:font-bold text-h4">Profit Chance</span>
            <span className="text-h4 font-medium text-[#FFA544] font-mono lg:text-2xl">45.5%</span>
          </div>
        </div>
        <div className="py-5 rounded-[14px] bg-radial-[at_50%_25%] to-[#080808] from-[#72727230] to-100% mb-3">
          <span className="text-center font-bold text-white text-[20px] w-fit mx-auto block mb-5">Presale will start in:</span>
          <Countdown className="justify-between" />
        </div>
        <button
          type="button"
          className="text-doby-l flex items-center justify-center bg-white font-semibold rounded-2xl text-[#080808] shadow-lg py-4 w-full max-w-[500px] mx-auto"
        >
          PARTICIPATE NOW
        </button>
      </div>
      <Modal isOpen={false} onClose={() => {}}>
        <div>
          <span className="text-2xl font-semibold block w-full text-center">Invest in Presale</span>
          <div className="flex flex-col gap-[10px] my-8">
            <CustomInput label="You Invest" value="1" tokenName="SOL" />
            <CustomInput label="Your chance to get" value="13,242" tokenName="$BEER2" />
          </div>
          <CustomButton customStyles="!text-body-l">Enter to Presale</CustomButton>
          <CustomButton variant="linear" customStyles="!text-body-l !border-[1px] !border-[#697586] mt-3">Cancel</CustomButton>
        </div>
      </Modal>
    </div>
  );
};

export default PresaleBlock;
