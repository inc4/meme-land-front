import clsx from "clsx";
import { useWallet } from "@solana/wallet-adapter-react";
import NeonShadowBox from "~/components/NeonShadowBox";
import CustomButton from "~/components/CustomButton";
import checkIcon from '~/assets/svg/check.svg';
import userAddIcon from '~/assets/svg/user-add.svg';
import { shortenAddress } from "~/utils/other";

const InviteCode = () => {
  const { publicKey } = useWallet();
  const done = false;
  const isValidCode = false;

  return (
    <div className="flex flex-col items-center justify-center gap-[36px] h-full pt-[32px] pb-[55px]">

      <div className="flex flex-col items-center gap-[12px]">
        <span className="text-h5 font-semibold">Wallet Connected:</span>
        <div className="flex justify-center items-center gap-[8px] px-[12px] py-[8px] border-[1px] rounded-[8px] bg-gray-700 border-beige-900">
          <img src={checkIcon} alt="Checkmark" />
          <span className="text-body-l font-medium">{shortenAddress(publicKey?.toString())}</span>
        </div>
      </div>

      <NeonShadowBox
        variant="green"
        primaryShadowPosition="top"
        secondaryShadowPosition="outer"
        customStyles="max-w-[472px] w-full px-[11px] py-[34px] lg:px-[46px]"
        customBorderStyles="dark-box-border!"
      >
        <div className="flex flex-col items-center justify-between gap-[28px] lg:gap-[22px]">
          <div className="flex flex-col items-center gap-[12px]">
            <img src={userAddIcon} className="p-[17px]" alt="User" />
            <div className="flex flex-col justify-center items-center gap-[4px]">
              <span className="text-h1 font-bold text-center">Enter your Invitation Code</span>
              <span className="text-body-l font-medium text-center">Invitation codes are needed to ensure our platform security and reduce fud.</span>
            </div>
          </div>

          <div className={clsx(
              "relative flex items-center justify-between",
              "max-w-[300px] w-full border-[1px] rounded-[6px]",
              "border-gray-600 bg-gray-700 text-body-l! font-medium",
              "lg:max-w-[340px]",
              done && (isValidCode ? 'border-primary!' : 'border-error-900!')
            )}
          >
            <input
              type="text"
              className="grow py-[16px] px-[10px] border-0 outline-0 bg-transparent focus:outline-0 lg:px-[13px]"
            />

            {done && (
              <span className={clsx(
                  "max-w-[100px] grow text-gray-100",
                  isValidCode ? 'text-primary!' : 'text-error-900!',
                )}
              >
                {isValidCode ? "Code valid" : "Code Invalid"}
              </span>
            )}
          </div>

          <div className="flex flex-col gap-[20px]">
            <CustomButton customStyles="p-[12px] max-w-[201px] text-body-l! font-semibold">
              Apply Invite Code
            </CustomButton>
            <CustomButton customStyles="p-0! px-[12px]! max-w-[201px] text-body-m! font-semibold" variant="no-bg">
              I Don’t have invite code
            </CustomButton>
          </div>
        </div>
      </NeonShadowBox>

    </div>
  )
};

export default InviteCode;
