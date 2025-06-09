import solIcon from "~/assets/svg/solana-logo.svg";
import NeonShadowBox from "~/components/NeonShadowBox";

const PresaleProgress = () => {
  return (
    <NeonShadowBox
      variant="violet"
      primaryShadowPosition="bottom"
      secondaryShadowPosition="outer"
      customBorderStyles="violet-box-border!"
      customStyles="p-5 mt-[30px] lg:mt-[14px]"
    >
      <div className="bg-[#0F1113] border-[1px] bg-radial-[at_50%_25%] to-[#0F1113] from-[#F24BE70D] to-100% border-[#F24BE700] rounded-[14px] mt-[30px] lg:mt-[14px] grid grid-cols-1 lg:grid-cols-[1fr_452px] lg:grid lg:gap-[68px] gap-8">
        <div>
          <h3 className="font-semibold text-2xl mb-6">Presale progress:</h3>
          <div className="bg-[#222222] rounded-[7px] h-3 w-full">
            <div
              className="w-1/3 bg-linear-to-r from-[#3AFFA3] to-[#25925E] h-full rounded-[7px] shadow-[0px_2px_2px_0px_#00000040]"/>
          </div>
          <div className="lg:flex lg:justify-between lg:items-center">
            <span className="font-medium mt-2 mb-3 block font-mono">1,491 / 5,000 WALLETS</span>
            <p className="font-medium flex items-center">
              <span className="mr-1 block">
                RAISED:
              </span>
              <span className="font-black text-[#F24BE7] font-mono">19,481 SOL</span>
              <img src={solIcon} alt="solana" className="w-4 h-4 ml-3"/>
            </p>
          </div>
        </div>
        <div className="bg-[#080808] rounded-xl py-5 px-4 flex items-center justify-between">
          <span className="text-body-m font-semibold">Your Allocation</span>
          <div className="flex flex-col items-end gap-1 font-semibold text-body-m font-mono">
            <span>0.00 $BEER</span>
            <span className="opacity-50">(0.00$)</span>
          </div>
        </div>
      </div>
    </NeonShadowBox>
  )
};

export default PresaleProgress