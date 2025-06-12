import Countdown from "~/components/Countdown";
import beerTokenLogo from "~/assets/imgs/beercoin-logo.png";

const TokenInfo = () => {
  return (
    <div className="p-[12px] pb-[36px] bg-background border-[2px] border-gray-700 rounded-[12px]">
      <div className="flex justify-between items-start gap-[10px] mb-[24px]">
        <div className="flex flex-col gap-[4px]">
          <span className="text-h3 text-white font-bold">Beercoin2.0</span>
          <span className="text-body-m text-beige-600 font-medium">Liquid Gold, But new!</span>
        </div>

        <img src={beerTokenLogo} alt="logo" className="w-[56px] h-auto object-contain"/>
      </div>
      
      <div className="flex flex-col gap-[12px] p-[12px] mb-[24px] rounded-[4px] bg-beige-800 text-body-l font-medium text-white">
        <span className="flex justify-between">
          Tokens distributed: <span className="font-mono">4,4M</span>
        </span>

        <span className="h-[1px] w-full bg-gray-700" />

        <span className="flex justify-between">
          Tokens left: <span className="font-mono text-bronze">83M</span>
        </span>
      </div>

      <div className="flex flex-col items-center gap-[12px]">
        <span className="text-h3 font-bold text-white">Time since draw start: </span>
        <Countdown />
      </div>

    </div>
  );
};

export default TokenInfo;