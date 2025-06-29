import { useState, useEffect, type ChangeEvent } from "react";
import { useNavigate } from "react-router";
import { useWallet } from "@solana/wallet-adapter-react";
import clsx from "clsx";

import NeonShadowBox from "~/components/NeonShadowBox";
import CustomButton from "~/components/CustomButton";
import Spinner from "~/components/Spinner";
import checkIcon from '~/assets/svg/check.svg';
import userAddIcon from '~/assets/svg/user-add.svg';

import useWalletByAddress from "~/hooks/useWalletByAddress";
import { shortenAddress } from "~/utils/other";
import { checkInviteCode } from "~/utils/request";
import { HOME_PAGE } from "~/utils/constants";

const InviteCode = () => {
  const navigate = useNavigate();
  const { publicKey } = useWallet();
  const { isLoading: isWalletLoading, data: wallet } = useWalletByAddress();
  const [isLoading, setIsLoading] = useState(false);
  const [isValid, setIsValid] = useState(false);
  const [isDone, setIsDone] = useState(false);
  const [inviteCode, setInviteCode] = useState('');

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    // Reset border and span styles for input if code is not valid
    if (!isValid) setIsDone(false);

    setInviteCode(e.target.value);
  }

  const handleApplyCode = async () => {
    if (!publicKey) return;

    try {
      setIsLoading(true);

      const valid = await checkInviteCode(publicKey.toString(), inviteCode);

      setIsValid(valid);
      setIsDone(true);

      if (valid) {
        navigate(HOME_PAGE);
        return;
      }

    } catch (e) {
      console.log(e, 'Check invite code error');
    } finally {
      setIsLoading(false);
    }
  };

  // Redirect to home page if wallet is verified
  useEffect(() => {
    if (wallet) navigate(HOME_PAGE);
  }, [wallet]);

  if (isWalletLoading) {
    return (
      <Spinner wrapperStyles="fixed inset-0 flex justify-center items-center w-full h-dvh bg-background" />
    );
  }

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
              <span className="text-h1 font-bold text-center max-w-[288px]">Enter your Invitation Code</span>
              <span className="text-body-l font-medium text-center">Invitation codes are needed to ensure our platform security and reduce fud.</span>
            </div>
          </div>

          <div className={clsx(
              "relative flex items-center justify-between",
              "max-w-[300px] w-full border-[1px] rounded-[6px]",
              "border-gray-600 bg-gray-700 text-body-l! font-medium",
              "lg:max-w-[340px]",
              isDone && (isValid ? 'border-primary!' : 'border-error-900!')
            )}
          >
            <input
              type="text"
              disabled={isLoading}
              value={inviteCode}
              onChange={handleInputChange}
              className="grow py-[16px] px-[10px] border-0 outline-0 bg-transparent focus:outline-0 lg:px-[13px]"
            />

            {isDone && (
              <span className={clsx(
                  "max-w-[100px] grow text-gray-100",
                  isValid ? 'text-primary!' : 'text-error-900!',
                )}
              >
                {isValid ? "Code valid" : "Code Invalid"}
              </span>
            )}
          </div>

          <div className="flex flex-col gap-[20px]">
            <CustomButton
              disabled={isLoading || !inviteCode}
              customStyles="p-[12px] max-w-[201px] text-body-l! font-semibold"
              handleClick={handleApplyCode}
            >
              {isLoading
                ? <Spinner styles="h-[24px]! w-[24px]! border-[4px]! border-black! border-e-transparent! m-auto!" />
                : 'Apply Invite Code'
              }
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
