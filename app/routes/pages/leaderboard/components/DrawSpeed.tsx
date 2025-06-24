import speedIcon from "~/assets/svg/speed.svg";
import NeonShadowBox from "~/components/NeonShadowBox";
import type { TCampaign } from "~/types";

type TProps = {
  campaign: TCampaign;
}

const DrawSpeed = ({ campaign }: TProps) => {
  const { tokenUnlockInterval } = campaign;

  const calcSpeed = (step: number) => {
    const minuteMs = 60000;

    return minuteMs / step;
  };

  return (
    <NeonShadowBox
      variant="green"
      primaryShadowPosition="bottom"
      secondaryShadowPosition="inner"
      customStyles="p-[17px]"
    >
      <div className="flex flex-col items-center justify-between gap-[8px]">

        <img src={speedIcon} alt="Speed" />

        <div className="flex flex-col items-center justify-between gap-[4px]">
          <span className="text-body-s text-beige-600 uppercase font-semibold">Draw Speed</span>
          <span className="text-h3 text-primary font-medium font-mono">
            {calcSpeed(tokenUnlockInterval)} wallets<sub className="text-gray-600">/minute</sub>
          </span>
        </div>

      </div>
    </NeonShadowBox>
  );
};

export default DrawSpeed;