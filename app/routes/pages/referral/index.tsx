import clsx from "clsx";

import NeonShadowBox from "~/components/NeonShadowBox";
import CopyIcon from "~/components/Icons/Copy";
import useWalletByAddress from "~/hooks/useWalletByAddress";
import useCopy from "~/hooks/useCopy";

import paymentIcon from "~/assets/svg/payment.svg";
import arrowIcon from "~/assets/svg/arrow-long.svg";
import checkIcon from '~/assets/svg/check.svg';
import {toast} from "react-toastify";

const Referral = () => {
  const { data } = useWalletByAddress();
  const { isCopied, copy } = useCopy();

  const handleCopy = () => {
    if (!data?.inviteCode) return;
    copy(data.inviteCode);
    toast.success('Copied to clipboard');
  }

  return (
    <div className="pt-[52px] pb-16 flex flex-col items-center">
      <h1 className="font-bold mb-4 text-center block">Invite Friends</h1>
      <span className="font-semibold text-[18px] text-center opacity-60 block max-w-[444px]">
        Grow your squad, climb the Top 100 leaderboard, and share the Memedrop reward pool each month. The higher your rank, the bigger your cut.
      </span>
      <NeonShadowBox
        variant="green"
        primaryShadowPosition="top"
        secondaryShadowPosition="outer"
        customStyles="!border-[#3AFFA3] border-[1px] p-6 mt-8 mb-3 max-w-[444px] w-full"
      >
        <div>
          <span className="text-[#3AFFA3] text-body-m font-semibold">YOUR REFERRAL CODE</span>
          <div className="flex justify-between items-start mt-2">
            <span className="text-h2 font-bold uppercase">{data?.inviteCode || '---'}</span>
            {isCopied ? (
              <img src={checkIcon} alt="Checkmark" className="shrink-0 w-[27px]" />
            ) : (
              <CopyIcon
                onClick={handleCopy}
                className={clsx(
                  "shrink-0 cursor-pointer hover:[&_path]:fill-primary",
                  "[&_path]:duration-300 [&_path]:ease-in-out",
                )}
              />
            )}
          </div>
        </div>
      </NeonShadowBox>
      <div className="bg-[#0F1113] rounded-[14px] p-6 flex flex-col mb-16 max-w-[444px] w-full">
        <span className="text-h3 text-[#3AFFA3] flex items-center font-bold mb-7">
          <img src={paymentIcon} alt="payment" className="mr-[10px]"/>
          Earnings Overview
        </span>
        <span className="font-semibold opacity-50 text-body-l mb-2">
          Friends Invited
        </span>
        <span className="font-mono opacity-30 text-h3 font-medium mb-4">0</span>
        <span className="font-semibold opacity-50 text-body-l mb-2">
          Commissions made from invites
        </span>
        <span className="font-mono opacity-30 text-h3 font-medium">
          0$
        </span>
        <div className="h-[1px] w-full bg-[#D9D9D91A] my-7"/>
        <span className="font-semibold opacity-50 text-body-l mb-2">
          Your commissions wallet
        </span>
        <span className="font-mono text-lg break-all">
          {data?.wallet || '---'}
        </span>
      </div>
      <h2 className="font-bold text-center max-w-[284px] mb-6">How Referral System Works?</h2>
      <div className="flex flex-col gap-3 px-6 lg:px-0 lg:grid lg:grid-cols-5">
        <div className="rounded-[14px] bg-[#0F1113] p-5 relative min-h-[238px] h-fit">
          <img src={arrowIcon} alt="arrow" className="rotate-90 absolute -left-[88px] top-0 lg:rotate-0 lg:left-auto lg:right-[18px] lg:top-[36px]"/>
          <div className="bg-linear-to-b from-[#00000000] to-[#3AFFA330] w-12 h-12 rounded-full flex items-center justify-center text-[#25925E] text-body-l font-medium font-mono mb-8">
            01
          </div>
          <span className="text-[20px] font-bold">
            Grab your unique <span className="text-[#FFA544]">invite code</span>. Friends must join and participate in at least one presale for it to count.
          </span>
          <button
            onClick={handleCopy}
            type="button"
            className="white-shadow text-doby-l flex items-center justify-center bg-white font-semibold rounded-2xl text-[#080808] shadow-lg py-3 w-full mt-4"
          >
            Copy Code
          </button>
        </div>
        <div className="rounded-[14px] bg-[#0F1113] p-5 relative min-h-[238px] flex flex-col h-fit">
          <img src={arrowIcon} alt="arrow" className="rotate-90 absolute -left-[88px] top-0 lg:rotate-0 lg:left-auto lg:right-[18px] lg:top-[36px]"/>
          <div
            className="bg-linear-to-b from-[#00000000] to-[#3AFFA330] w-12 h-12 rounded-full flex items-center justify-center text-[#25925E] text-body-l font-medium font-mono mb-8">
            02
          </div>
          <span className="text-[20px] font-bold">
            Publish your <span className="text-[#FFA544]">invite code</span> on Twitter/X
          </span>
        </div>
        <div className="rounded-[14px] bg-[#0F1113] p-5 relative min-h-[238px] h-fit">
          <img src={arrowIcon} alt="arrow" className="rotate-90 absolute -left-[88px] top-0 lg:rotate-0 lg:left-auto lg:right-[18px] lg:top-[36px]"/>
          <div
            className="bg-linear-to-b from-[#00000000] to-[#3AFFA330] w-12 h-12 rounded-full flex items-center justify-center text-[#25925E] text-body-l font-medium font-mono mb-8">
            03
          </div>
          <span className="text-[20px] font-bold">
            Climb the leaderboard to secure a spot in the Top 100. Your rank updates in real time and resets every month.
          </span>
        </div>
        <div className="rounded-[14px] bg-[#0F1113] p-5 relative min-h-[238px] h-fit">
          <img src={arrowIcon} alt="arrow" className="rotate-90 absolute -left-[88px] top-0 lg:rotate-0 lg:left-auto lg:right-[18px] lg:top-[36px]"/>
          <div
            className="bg-linear-to-b from-[#00000000] to-[#3AFFA330] w-12 h-12 rounded-full flex items-center justify-center text-[#25925E] text-body-l font-medium font-mono mb-8">
            04
          </div>
          <span className="text-[20px] font-bold">
            On top of that, you earn <span className="text-[#FFA544]">1% of the fees</span> from every active referral. Everything is tracked in your <span className="text-[#FFA544]">Earnings Overview</span>.
            Get rewarded based on your rank. The Top 100 split a monthly pool worth 0.25–0.5% of presale raises.
          </span>
        </div>
        <div className="rounded-[14px] bg-[#0F1113] p-5 relative min-h-[238px] h-fit">
          <div
            className="bg-linear-to-b from-[#00000000] to-[#3AFFA330] w-12 h-12 rounded-full flex items-center justify-center text-[#25925E] text-body-l font-medium font-mono mb-8">
            05
          </div>
          <span className="text-[20px] font-bold">
            Get <span className="text-[#FFA544]">1% Fee</span> from any referral
          </span>
        </div>
      </div>
    </div>
  )
};

export default Referral;