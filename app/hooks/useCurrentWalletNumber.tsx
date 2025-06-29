import { useEffect, useState } from "react";
import useIsLiveDraw from "./useIsLiveDraw";
import type { TCampaign, TCampaignStats } from "~/types";

type TParams = {
  campaign: TCampaign | undefined;
  campaignStats: TCampaignStats | undefined;
};

const useCurrentWalletNumber = ({ campaign, campaignStats }: TParams) => {
  const [walletNumber, setWalletNumber] = useState<number | undefined>();

  const { isLive } = useIsLiveDraw({
    drawStart: campaign?.presaleDrawStartUTC,
    drawEnd: campaign?.presaleDrawEndUTC,
  });

  const calcCurrentWalletNumber = (start: string, unlockInterval: number, max: number) => {
    const walletNumber = Math.ceil((Date.now() - new Date(start).getTime()) / unlockInterval);
    return walletNumber >= max ? max : walletNumber;
  };

  useEffect(() => {
    if (!campaign || !campaignStats) return;

    const { presaleDrawStartUTC, tokenUnlockInterval } = campaign;
    const { totalParticipants } = campaignStats;

    // Immediately trigger setInterval function
    if (isLive) {
      const num = calcCurrentWalletNumber(presaleDrawStartUTC, tokenUnlockInterval, +totalParticipants);
      setWalletNumber(num);
    }
  
    const timer = setInterval(() => {
      if (!isLive) {
        setWalletNumber(undefined);
        clearInterval(timer);
        return;
      }

      const num = calcCurrentWalletNumber(presaleDrawStartUTC, tokenUnlockInterval, +totalParticipants);
      setWalletNumber(num);
    }, tokenUnlockInterval);

    return () => clearInterval(timer);
  }, [campaign, campaignStats, isLive]);

  return walletNumber;
};

export default useCurrentWalletNumber;