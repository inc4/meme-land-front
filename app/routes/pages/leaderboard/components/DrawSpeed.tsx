import speedIcon from "~/assets/svg/speed.svg";
import NeonShadowBox from "~/components/NeonShadowBox";

const DrawSpeed = () => {
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
            100 wallets<sub className="text-gray-600">/minute</sub>
          </span>
        </div>

      </div>
    </NeonShadowBox>
  );
};

export default DrawSpeed;