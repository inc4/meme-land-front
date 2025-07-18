import clsx from "clsx";
import Slider from "react-slick";
import { toast } from "react-toastify";

import NeonShadowBox from "~/components/NeonShadowBox";
import CopyIcon from "~/components/Icons/Copy";
import useWalletByAddress from "~/hooks/useWalletByAddress";
import useCopy from "~/hooks/useCopy";

import arrowIcon from "~/assets/svg/arrow-long.svg";
import checkIcon from '~/assets/svg/check.svg';
import inviteBg1 from '~/assets/svg/invite-bg-1.svg';
import inviteBg2 from '~/assets/svg/invite-bg-2.svg';
import inviteBg3 from '~/assets/svg/invite-bg-3.svg';

const Referral = () => {
  const { data } = useWalletByAddress();
  const { isCopied, copy } = useCopy();

  const handleCopy = () => {
    if (!data?.inviteCode) return;
    copy(data.inviteCode);
    toast.success('Copied to clipboard');
  }

  const sliderSettings = {
    dots: true,
    infinite: false,
    speed: 500,
    arrows: false,
    slidesToShow: 1.1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024, // Below lg
        settings: {
          slidesToShow: 2.1,
        },
      },
      {
        breakpoint: 640, // Below sm
        settings: {
          slidesToShow: 1.1,
        },
      },
    ],
  };

  const cards = [
    {
      content: (
        <>
          <span className="text-[20px] font-bold">
            Grab your <span className="text-[#FFA544]">invite code</span> and invite friends. 
          </span>
          <button
            onClick={handleCopy}
            type="button"
            className="white-shadow text-doby-l flex items-center justify-center bg-white font-semibold rounded-2xl text-[#080808] shadow-lg py-3 w-full mt-4"
          >
            Copy Code
          </button>
        </>
      )
    },
    {
      content: (
        <span className="text-[20px] font-bold">
          Spread your <span className="text-[#FFA544]">invite code</span> on Twitter/X
        </span>
      )
    },
    {
      content: (
        <span className="text-[20px] font-bold">
          Invite 10 friends to boost your allocation in any project <span className="text-[#FFA544]">by +10%</span>
        </span>
      )
    },
    {
      content: (
        <span className="text-[20px] font-bold">
          Invite 25 friends to earn <span className="text-[#FFA544]">+20% allocation bonus</span> in presale
        </span>
      )
    },
    {
      content: (
        <span className="text-[20px] font-bold">
          Get <span className="text-[#FFA544]">1% Fee</span> from any referral
        </span>
      )
    }
  ]

  return (
    <div className="pt-[26px] pb-[100px] flex flex-col items-center lg:pt-[52px] lg:pb-[120px]">
      <div className="hidden lg:block">
        <img src={inviteBg2} className="absolute left-0 top-[10%]" />
        <img src={inviteBg3} className="absolute left-[20%] top-[30%]" />
        <img src={inviteBg1} className="absolute right-0 top-[10%]" />
      </div>
      <h1 className="font-bold mb-4 text-center block tracking-[1px]">Invite Friends</h1>
      <span className="font-semibold text-[18px] text-center opacity-60 block max-w-[444px]">
        Contribute together! Boost your chances to secure an allocation and earn higher allocations.
      </span>
      <NeonShadowBox
        variant="green"
        primaryShadowPosition="top"
        secondaryShadowPosition="outer"
        customStyles="!border-[#3AFFA3] border-[1px] p-6 mt-[32px] mb-[45px] max-w-[495px] w-full lg:mt-[188px] lg:mb-[341px]"
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
      {/* <div className="bg-[#0F1113] rounded-[14px] p-6 flex flex-col mb-16 max-w-[444px] w-full">
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
      </div> */}
      <h2 className="max-w-[284px] font-bold text-center mb-[40px] tracking-[0.4px] lg:w-full">How Referral System Works?</h2>

      <div className="hidden lg:grid lg:grid-cols-5 lg:gap-3">
        {cards.map((el, index) => (
          <div className="rounded-[14px] bg-[#0F1113] p-4.5 relative min-h-[238px] h-fit">
            <img src={arrowIcon} alt="arrow" className="absolute left-auto right-[18px] top-[36px]"/>
            <div className="bg-linear-to-b from-[#00000000] to-[#3AFFA330] w-12 h-12 rounded-full flex items-center justify-center text-[#25925E] text-body-l font-medium font-mono mb-8">
              0{index + 1}
            </div>
            {el.content}
          </div>
        ))}
      </div>

      <div className="w-full lg:hidden">
        <Slider {...sliderSettings}>
          {cards.map((el, index) => (
            <div>
              <div className="rounded-[14px] bg-[#0F1113] p-4.5 mr-[22px] relative min-h-[238px] h-fit">
                <img src={arrowIcon} alt="arrow" className="absolute left-auto right-[18px] top-[36px]"/>
                <div className="bg-linear-to-b from-[#00000000] to-[#3AFFA330] w-12 h-12 rounded-full flex items-center justify-center text-[#25925E] text-body-l font-medium font-mono mb-8">
                  0{index + 1}
                </div>
                {el.content}
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  )
};

export default Referral;