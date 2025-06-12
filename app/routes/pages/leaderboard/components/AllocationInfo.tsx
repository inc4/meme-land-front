import clsx from "clsx";
import CustomButton from "~/components/CustomButton";
import NeonShadowBox from "~/components/NeonShadowBox";
import refreshIcon from "~/assets/svg/refresh.svg";

const AllocationInfo = () => {
  return (
    <NeonShadowBox
      variant="green"
      primaryShadowPosition="top"
      secondaryShadowPosition="inner"
      customStyles="p-[12px] pt-[38px] lg:pt-[71px]"
    >
      <div>

        <div className="flex flex-col items-center m-auto mb-[24px]">
          <span className="text-body-s text-beige-600 uppercase font-semibold">Your Allocation</span>
          <span className="text-h2 text-primary font-medium font-mono">10,000 $BEER</span>
        </div>

        <CustomButton
          variant="white"
          customStyles="block max-w-[128px] w-full m-auto mb-[36px] shadow-none text-body-l! lg:mb-[43px]"
        >
          Claim
        </CustomButton>

        <div className={clsx(
          "flex justify-between items-center w-full px-[18px] py-[20px] lg:py-[24px]",
          "bg-black border-[2px] border-gray-700 rounded-[8px]"
        )}>
          <div className="flex flex-col gap-[8px]">
            <span className="text-body-s text-beige-600 uppercase font-semibold">Your wallet position</span>
            <span className="text-h3 text-white font-bold">#--</span>
          </div>

          <CustomButton
            variant="linear"
            customStyles={clsx(
              "flex justify-center items-center gap-[8px] max-w-[114px] w-full px-[16px] py-[8px]",
              "border-none rounded-[44px] bg-gray-700! text-white text-body-m!",
              "hover:bg-beige-900!"
            )}
          >
            Refresh <img src={refreshIcon} alt="Refresh" />
          </CustomButton>
        </div>

      </div>
    </NeonShadowBox>
  )
};

export default AllocationInfo;
