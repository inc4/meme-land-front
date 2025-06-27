import { useEffect, useState } from "react";
import useIsLiveDraw from "./useIsLiveDraw";
import type { TCampaign } from "~/types";

const useCurrentWalletNumber = (campaign: TCampaign | undefined) => {
  const [walletNumber, setWalletNumber] = useState<number | undefined>();

  const { isLive } = useIsLiveDraw({
    drawStart: campaign?.presaleDrawStartUTC,
    drawEnd: campaign?.presaleDrawEndUTC,
  });

  const calcCurrentWalletNumber = (start: string, unlockInterval: number) => {
    return Math.ceil((Date.now() - new Date(start).getTime()) / unlockInterval)
  };

  useEffect(() => {
    if (!campaign) return;

    const { presaleDrawStartUTC, tokenUnlockInterval } = campaign;

    // Immediately trigger setInterval function
    if (isLive) {
      const num = calcCurrentWalletNumber(presaleDrawStartUTC, tokenUnlockInterval);
      setWalletNumber(num);
    }
  
    const timer = setInterval(() => {
      if (!isLive) {
        setWalletNumber(undefined);
        clearInterval(timer);
        return;
      }

      const num = calcCurrentWalletNumber(presaleDrawStartUTC, tokenUnlockInterval);
      setWalletNumber(num);
    }, tokenUnlockInterval);

    return () => clearInterval(timer);
  }, [campaign, isLive]);

  return walletNumber;
};

export default useCurrentWalletNumber;