import Countdown from "~/components/Countdown";
import CustomButton from "~/components/CustomButton";
import Telegram from "~/components/Icons/Telegram";
import X from "~/components/Icons/X";
import Browse from "~/components/Icons/Browse";
import bgFigure from "~/assets/svg/token-icon-figure.svg";
import bgFigureSmall from "~/assets/svg/token-icon-figure-small.svg";
import checkIcon from "~/assets/svg/check.svg";
import {useMemo, useState} from "react";
import ParticipateModal from "~/components/PresaleBlock/ParticipateModal";
import type {TCampaign} from "~/types";
import {formatPinataUrl} from "~/utils/formatPinataUrl";
import clsx from "clsx";
import NeonShadowBox from "~/components/NeonShadowBox";
import {NavLink} from "react-router";
import useCampaignStats from "~/hooks/useCampaignStats";
import useUserAllocation from "~/hooks/useUserAllocation";
import useIsClaimable from "~/hooks/useIsClaimable";
import raydium from "~/assets/svg/raydium.svg";
import jupiter from "~/assets/svg/jupiter.svg";
import spinner from "~/assets/svg/spinner.svg";

const PresaleBlock = ({homePage, isLoading, campaign}:{homePage?:boolean, isLoading:boolean, campaign:TCampaign | undefined}) => {
  const [participateModalOpen, setParticipateModalOpen] = useState(false);
  const { data: campaignStatsData } = useCampaignStats(campaign?.campaignId as string);
  const { data: userAllocationData } = useUserAllocation(campaign?.campaignId as string);
  const { data: isClaimableData } = useIsClaimable(campaign?.campaignId as string);

  const timerData = useMemo(() => {
    if (!campaign) return null;

    if (campaign?.currentStatus === 'upcoming') {
      return {
        title: 'Presale will start in:',
        titleColor: 'text-white',
        timestamp: new Date(campaign.presaleStartUTC).getTime(),
        btn: () => (
          <button
            type="button"
            disabled
            className="text-doby-l lg:text-[18px] flex items-center justify-center font-semibold rounded-2xl bg-[#3E3E3E] py-4 w-full max-w-[500px] lg:py-6 mx-auto"
          >
            WAIT UNTIL PRESALE STARTS
          </button>
        )
      }
    } else if (campaign?.currentStatus === 'presaleOpened') {
      return {
        title: 'Presale will end in:',
        titleColor: 'text-[#F24B4D]',
        timestamp: new Date(campaign.presaleEndUTC).getTime(),
        btn: () => userAllocationData ? (
          <button
            type="button"
            className="text-doby-l lg:text-[18px] flex items-center gap-[10px] justify-center bg-[#3AFFA31F] font-semibold rounded-2xl text-[#3AFFA3] shadow-lg py-4 lg:py-6 w-full max-w-[500px] mx-auto"
          >
            <img src={checkIcon} alt="checkmark"/>
            YOU JOINED
          </button>
        ) : (
          <button
            type="button"
            onClick={handleParticipate}
            className="text-doby-l lg:text-[18px] flex items-center justify-center bg-[#3AFFA3] font-semibold rounded-2xl text-[#080808] shadow-lg py-4 lg:py-6 w-full max-w-[500px] mx-auto"
          >
            PARTICIPATE NOW
          </button>
        )
      }
    } else if (campaign?.currentStatus === 'presaleFinished') {
      return {
        title: 'Draw will start in:',
        titleColor: 'text-[#FFA544]',
        timestamp: new Date(campaign.presaleDrawStartUTC).getTime(),
        btn: () => (
          <button
            type="button"
            disabled
            className="text-doby-l lg:text-[18px] flex items-center justify-center bg-[#3E3E3E] font-semibold rounded-2xl text-white shadow-lg py-4 lg:py-6 w-full max-w-[500px] mx-auto"
          >
            WAIT UNTIL DRAW STARTS
          </button>
        )
      }
    } else {
      return {
        title: campaign.currentStatus === 'distributionOpened' ? 'Draw will end in:' : 'Presale Finished',
        titleColor: campaign.currentStatus === 'distributionOpened' ? 'text-[#F24B4D]' : 'text-white',
        btn: () => isClaimableData?.claimed ? (
          <button
            type="button"
            className="text-doby-l lg:text-[18px] flex items-center gap-[10px] justify-center bg-[#3AFFA31F] font-semibold rounded-2xl text-[#3AFFA3] shadow-lg py-4 lg:py-6 w-full max-w-[500px] mx-auto"
          >
            <img src={checkIcon} alt="checkmark"/>
            TOKENS CLAIMED
          </button>
          ) : (
          <NavLink to={`/presale/${campaign?.projectName}/leaderboard`}>
            <button
              type="button"
              className="text-doby-l lg:text-[18px] text-black flex items-center justify-center bg-white font-semibold rounded-2xl shadow-lg py-4 lg:py-6 w-full max-w-[500px] mx-auto"
            >
              CHECK DRAW
            </button>
          </NavLink>
        ),
        ...(campaign.currentStatus === 'distributionOpened' ? {
          timestamp: new Date(campaign.presaleDrawEndUTC).getTime(),
        } : {
          finished: true,
        }),
      }
    }
  }, [campaign, userAllocationData, isClaimableData]);

  const handleParticipate = () => {
    setParticipateModalOpen(true);
  }

  const statusPending = useMemo(() => {
    if (!campaign) return false;

    const checkIfTimePassed = (dateStr) => {
      const inputDate = new Date(dateStr);
      const now = new Date();
      return inputDate.getTime() < now.getTime();
    }

    if (campaign.currentStatus === 'upcoming' && checkIfTimePassed(campaign.presaleStartUTC)) {
      return true;
    } else if (campaign.currentStatus === 'presaleOpened' && checkIfTimePassed(campaign.presaleEndUTC)) {
      return true;
    } else if (campaign.currentStatus === 'presaleFinished' && checkIfTimePassed(campaign.presaleDrawStartUTC)) {
      return true;
    } else if (campaign.currentStatus === 'distributionOpened' && checkIfTimePassed(campaign.presaleDrawEndUTC)) {
      return true;
    }
  }, [campaign]);

  const submitBtn = useMemo(() => {
    if (homePage) {
      return (
        <NavLink to={`/presale/${campaign?.projectName}`}>
          <button
            type="button"
            className="text-doby-l lg:text-[18px] flex items-center justify-center bg-white font-semibold rounded-2xl text-[#080808] shadow-lg py-4 lg:py-6 w-full max-w-[500px] mx-auto"
          >
            PARTICIPATE NOW
          </button>
        </NavLink>
      )
    } else if (timerData) {
      return (
        <div className={clsx(statusPending && 'pointer-events-none opacity-60')}>
          {timerData.btn()}
        </div>
      )
    } else {
      return null;
    }
  }, [campaign, userAllocationData, timerData, homePage, statusPending]);

  if (!isLoading && !campaign) {
    return null;
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-[1fr_472px] lg:grid gap-[14px]">
      {isLoading ? (
        <div className="rounded-[14px] animate-pulse bg-neutral-900"/>
      ) : campaign && (
        <div className="bg-[#0F1113] rounded-[14px] p-5 overflow-hidden">
          <div className="relative">
            <img src={formatPinataUrl(campaign.projectCoverImage)} alt="token" className="w-full h-[318px] object-cover rounded-[11px]"/>
            {campaign.currentStatus && campaignStatsData && (
              <div
                style={{backgroundImage: `url("${campaign.currentStatus === 'upcoming' ? bgFigureSmall : bgFigure}"`}}
                className={clsx(
                  'absolute bg-cover bg-bottom right-4 lg:left-4 lg:right-auto pt-[11px] pb-[9px] bg-no-repeat flex gap-1 items-stretch',
                  campaign.currentStatus === 'upcoming' ? 'px-[60px] -top-[24px]' : 'px-[33px] -top-[18px]',
                  campaign.currentStatus !== 'upcoming' && campaign.currentStatus !== 'presaleOpened' && 'px-[43px]'
                )}
              >
                {campaign.currentStatus === 'upcoming' && (
                  <div className="bg-[#9D85FF] py-1 px-[9px] rounded-[95px] text-xs font-semibold mt-2">
                    SOON
                  </div>
                )}
                {campaign.currentStatus === 'presaleOpened' && (
                  <div className="text-body-s bg-[#ED4646] text-white font-black uppercase rounded-[95px] h-[27px] px-[14px] flex items-center -mt-1">
                    live
                  </div>
                )}
                {(campaign.currentStatus === 'presaleFinished' || campaign.currentStatus === 'distributionOpened') && (
                  <div className="text-body-s bg-[#25925E] text-white font-black uppercase rounded-[95px] h-[27px] px-[14px] flex items-center -mt-1">
                    completed
                  </div>
                )}
                {campaign.currentStatus === 'distributionFinished' && (
                  <div className="text-body-s bg-[#778CBF] text-white font-black uppercase rounded-[95px] h-[27px] px-[14px] flex items-center -mt-1">
                    finished
                  </div>
                )}
                {campaign.currentStatus !== 'upcoming' && (
                  <div
                    className="h-[27px] font-mono border-[1px] border-[#FFFFFF14] rounded-[95px] text-body-s flex items-center pl-5 pr-[10px] -mt-1 before:w-[6px] before:h-[6px] before:rounded-full before:bg-[#12F287] before:left-[6px] before:absolute relative uppercase"
                  >
                    {campaignStatsData?.totalParticipants.toNumber()} Participant{campaignStatsData?.totalParticipants.toNumber() > 1 && 's'}
                  </div>
                )}
              </div>
            )}
          </div>
          <div className="flex flex-col mt-5">
            <div className="flex flex-col gap-6 mb-4 lg:flex-row lg:justify-between">
              <div className="flex gap-[10px] items-center">
                <img
                  src={formatPinataUrl(campaign.tokenImage)}
                  alt="logo"
                  className="w-[62px] h-[62px] object-cover rounded-[10px]"
                />
                <div className="flex flex-col gap-[2px]">
                  <span className="text-white font-bold text-[24px]">{campaign.projectName}</span>
                  <span className="opacity-60 text-white text-body-m">{campaign.shortDescription1}</span>
                </div>
              </div>
              <div className="flex gap-4">
                {campaign.twitter && (
                  <a href={campaign.twitter} target="_blank">
                    <CustomButton variant="icon-only" customStyles="!w-10 !h-10 !p-0">
                      <X className="w-6 h-6"/>
                    </CustomButton>
                  </a>
                )}
                {campaign.website && (
                  <a href={campaign.website} target="_blank">
                    <CustomButton variant="icon-only" customStyles="!w-10 !h-10 !p-0">
                      <Browse className="w-6 h-6"/>
                    </CustomButton>
                  </a>
                )}
                {campaign.telegram && (
                  <a href={campaign.telegram} target="_blank">
                    <CustomButton variant="icon-only" customStyles="!w-10 !h-10 !p-0">
                      <Telegram className="w-6 h-6"/>
                    </CustomButton>
                  </a>
                )}
              </div>
            </div>
            <p className="opacity-60 text-body-m">
              {campaign.shortDescription2}
            </p>
          </div>
        </div>
      )}
      <div>
        <NeonShadowBox
          customStyles={clsx(' rounded-[14px] mb-3', homePage ? '!p-[47px]' : 'py-4 px-[46px]')}
          variant="green"
          primaryShadowPosition="top"
          secondaryShadowPosition="outer"
          isBorderVisible={false}
        >
          <div className={clsx('flex flex-col', homePage ? 'gap-4' : 'gap-2')}>
            <div className="text-lg flex justify-between items-center">
              <span className={clsx(homePage ? 'text-h4 font-semibold lg:font-bold' : 'font-medium text-[16px]')}>Presale price</span>
              <span className={clsx('font-medium font-mono', homePage && 'text-[18px] lg:text-[24px]')}>
                {isLoading ? "-" : campaign?.presalePrice.$numberDecimal}
              </span>
            </div>
            <div className="text-lg flex justify-between items-center">
              <span className={clsx(homePage ? 'text-h4 font-semibold lg:font-bold' : 'font-medium text-[16px]')}>Listing Multiplier</span>
              <span className={clsx('font-medium text-[#9D85FF] font-mono', homePage && 'text-[18px] lg:text-[24px]')}>
                X{isLoading ? "-" : campaign?.listingMultiplier.$numberDecimal}
              </span>
            </div>
            <div className="text-lg flex justify-between items-center">
              <span className={clsx(homePage ? 'text-h4 font-semibold lg:font-bold' : 'font-medium text-[16px]')}>Listing price</span>
              <span className={clsx('font-medium text-[#12F287] font-mono', homePage && 'text-[18px] lg:text-[24px]')}>
                {isLoading ? "-" : campaign?.listingPrice.$numberDecimal}
              </span>
            </div>
            <div className="text-lg flex justify-between items-center">
              <span className={clsx(homePage ? 'text-h4 font-semibold lg:font-bold' : 'font-medium text-[16px]')}>Profit Chance</span>
              <span className={clsx('font-medium text-[#FFA544] font-mono', homePage && 'text-[18px] lg:text-[24px]')}>
                {isLoading ? "-" : campaign?.profitChance.$numberDecimal}%
              </span>
            </div>
            {!homePage && (
              <>
                <div className="h-[1px] w-full bg-white opacity-10 my-4"/>
                <div className="flex justify-between items-center">
                  <span>Maximum wallets allowed</span>
                  <span className="font-mono">{campaign ? campaign.amountOfWallet : '-'}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Minimum investment size</span>
                  <span className="font-mono">{campaign ? campaign.minInvestmentSize.$numberDecimal : '-'}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Maximum investment size</span>
                  <span className="font-mono">{campaign ? campaign.maxInvestmentSize.$numberDecimal : '-'}</span>
                </div>
              </>
            )}
          </div>
        </NeonShadowBox>
        {isLoading ? (
          <div className="rounded-[14px] animate-pulse bg-neutral-900 h-[154px]" />
        ) : (
          <div className="py-5 px-[46px] rounded-[14px] bg-radial-[at_50%_25%] to-[#080808] from-[#72727230] to-100% mb-3 relative">
            {statusPending && (
              <img src={spinner} alt="loader" className="animate-spin absolute right-4 top-4"/>
            )}
            <span className={clsx('text-center font-bold text-[20px] w-fit mx-auto block mb-5', timerData.titleColor)}>
              {timerData.title}
            </span>
            {timerData.timestamp ? (
              <Countdown timestamp={timerData.timestamp} className="justify-between"/>
            ) : (
              <div className="grid grid-cols-2 gap-3 items-center justify-center">
                <NavLink
                  to={campaign?.raydium || ''}
                  className={clsx('flex items-center justify-center gap-2 border-1 border-[#FFFFFF2E] h-[54px] rounded-[6px]', !campaign?.raydium && 'pointer-events-none opacity-60')}
                  target="_blank"
                >
                  <img src={raydium} alt="raydium logo"/>
                  Raydium
                </NavLink>
                <NavLink
                  to={campaign?.jupiter || ''}
                  className={clsx('flex items-center justify-center gap-2 border-1 border-[#FFFFFF2E] h-[54px] rounded-[6px]', !campaign?.jupiter && 'pointer-events-none opacity-60')}
                  target="_blank"
                >
                  <img src={jupiter} alt="raydium logo"/>
                  Jupiter
                </NavLink>
              </div>
            )}
          </div>
        )}
        {submitBtn}
      </div>
      <ParticipateModal
        campaign={campaign as TCampaign}
        isOpen={participateModalOpen}
        onClose={() => setParticipateModalOpen(false)}
      />
    </div>
  );
};

export default PresaleBlock;
