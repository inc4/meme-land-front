import Countdown from "~/components/Countdown";
import CustomButton from "~/components/CustomButton";
import Telegram from "~/components/Icons/Telegram";
import X from "~/components/Icons/X";
import Browse from "~/components/Icons/Browse";
import bgFigure from "~/assets/svg/token-icon-figure.svg";
import {useMemo, useState} from "react";
import ParticipateModal from "~/components/PresaleBlock/ParticipateModal";
import type {TCampaign} from "~/types";
import {formatPinataUrl} from "~/utils/formatPinataUrl";
import clsx from "clsx";
import NeonShadowBox from "~/components/NeonShadowBox";
import {NavLink} from "react-router";
import useCampaignStats from "~/hooks/useCampaignStats";

const PresaleBlock = ({homePage, isLoading, campaign}:{homePage?:boolean, isLoading:boolean, campaign:TCampaign | undefined}) => {
  const [participateModalOpen, setParticipateModalOpen] = useState(false);
  const { data: campaignStatsData } = useCampaignStats(campaign?.campaignId as string);

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
            className="text-doby-l flex items-center justify-center font-semibold rounded-2xl bg-[#3E3E3E] py-4 w-full max-w-[500px] mx-auto"
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
        btn: () => (
          <button
            type="button"
            onClick={handleParticipate}
            className="text-doby-l flex items-center justify-center bg-[#3AFFA3] font-semibold rounded-2xl text-[#080808] shadow-lg py-4 w-full max-w-[500px] mx-auto"
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
            className="text-doby-l flex items-center justify-center bg-[#3E3E3E] font-semibold rounded-2xl text-white shadow-lg py-4 w-full max-w-[500px] mx-auto"
          >
            WAIT UNTIL DRAW STARTS
          </button>
        )
      }
    } else {
      return {
        title: 'Draw will end in:',
        titleColor: 'text-[#F24B4D]',
        timestamp: new Date(campaign.presaleDrawStartUTC).getTime(),
        btn: () => (
          <NavLink to={`/presale/${campaign?.campaignId}/leaderboard`}>
            <button
              type="button"
              className="text-doby-l text-black flex items-center justify-center bg-white font-semibold rounded-2xl shadow-lg py-4 w-full max-w-[500px] mx-auto"
            >
              CHECK DRAW
            </button>
          </NavLink>
        )
      }
    }
  }, [campaign]);

  const handleParticipate = () => {
    setParticipateModalOpen(true);
  }

  if (!isLoading && !campaign) {
    return null;
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-[1fr_472px] lg:grid gap-[14px]">
    {isLoading ? (
        <div className="rounded-[14px] animate-pulse bg-neutral-900" />
      ) : campaign && (
        <div className="bg-[#0F1113] rounded-[14px] p-5">
          <div className="relative">
            <img src={formatPinataUrl(campaign.projectCoverImage)} alt="token" className="w-full h-[318px] object-cover rounded-[11px]"/>
            {campaign.currentStatus && (
              <div style={{backgroundImage: `url("${bgFigure}"`}} className="absolute -top-[18px] bg-contain right-4 px-[33px] pt-[11px] pb-[9px] bg-no-repeat flex gap-1 items-stretch bg-center">
                {campaign.currentStatus === 'presaleOpened' && (
                  <div className="text-body-s bg-[#ED4646] text-white font-black uppercase rounded-[95px] h-[27px] px-[14px] flex items-center -mt-1">
                    live
                  </div>
                )}
                <div
                  className="h-[27px] font-mono border-[1px] border-[#FFFFFF14] rounded-[95px] text-body-s flex items-center pl-5 pr-[10px] -mt-1 before:w-[6px] before:h-[6px] before:rounded-full before:bg-[#12F287] before:left-[6px] before:absolute relative">
                  {campaignStatsData?.totalParticipants.toNumber()} Participant{campaignStatsData?.totalParticipants.toNumber() > 1 && 's'}
                </div>
              </div>
            )}
          </div>
          <div className="flex flex-col mt-5">
            <div className="flex flex-col gap-6 mb-4 lg:flex-row lg:justify-between">
              <div className="flex gap-[10px] items-center">
                <img src={formatPinataUrl(campaign.tokenImage)} alt="logo" className="w-[62px] h-[62px] object-cover rounded-[10px]"/>
                <div className="flex flex-col gap-[2px]">
                  <span className="text-white font-bold text-[24px]">{campaign.projectName}</span>
                  <span className="opacity-60 text-white text-body-m">{campaign.shortDescription1}</span>
                </div>
              </div>
              <div className="flex gap-4">
                {campaign.telegram && (
                  <a href={campaign.telegram} target="_blank">
                    <CustomButton variant="icon-only" customStyles="!w-10 !h-10 !p-0">
                      <Telegram className="w-6 h-6"/>
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
                {campaign.twitter && (
                  <a href={campaign.twitter} target="_blank">
                    <CustomButton variant="icon-only" customStyles="!w-10 !h-10 !p-0">
                      <X className="w-6 h-6"/>
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
        >
          <div className={clsx('flex flex-col', homePage ? 'gap-4' : 'gap-2')}>
            <div className="text-lg flex justify-between items-center">
              <span className={clsx(homePage ? 'text-h4 font-semibold lg:font-bold' : 'font-medium text-[16px]')}>Presale price</span>
              <span className={clsx('font-medium font-mono', homePage && 'text-[18px] lg:text-[24px]')}>
                ${isLoading ? "-" : campaign?.presalePrice.$numberDecimal}
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
                ${isLoading ? "-" : campaign?.listingPrice.$numberDecimal}
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
          <div className="py-5 rounded-[14px] bg-radial-[at_50%_25%] to-[#080808] from-[#72727230] to-100% mb-3">
            <span className={clsx('text-center font-bold text-[20px] w-fit mx-auto block mb-5', timerData.titleColor)}>
              {timerData.title}
            </span>
            <Countdown timestamp={timerData.timestamp} className="justify-between"/>
          </div>
        )}
        {homePage ? (
          <NavLink to={`/presale/${campaign?.campaignId}`}>
            <button
              type="button"
              className="text-doby-l flex items-center justify-center bg-white font-semibold rounded-2xl text-[#080808] shadow-lg py-4 w-full max-w-[500px] mx-auto"
            >
              PARTICIPATE NOW
            </button>
          </NavLink>
        ) : timerData && timerData.btn()}
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
