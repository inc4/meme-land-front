import { useEffect, useState } from "react";
import type { TCampaign } from "~/types";

type TParams = {
  drawStart: string | undefined,
  drawEnd: string | undefined,
  currentStatus: TCampaign['currentStatus'] | undefined,
};

const useIsLiveDraw = ({ drawStart, drawEnd, currentStatus }: TParams) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isLive, setIsLive] = useState(false);
  const [isEarly, setIsEarly] = useState(false);
  const intervalMs = 1000;

  const checkIsLive = (startTime: string, endTime: string) => {
    if (startTime && endTime) {
      const now = Date.now();
      const start = new Date(startTime).getTime();
      const end = new Date(endTime).getTime();
  
      return start <= now && now < end;
    }

    return false;
  };

  const checkIsEarly = (startTime: string) => {
    if (startTime) {
      const now = Date.now();
      const start = new Date(startTime).getTime();

      return now < start;
    }

    return true;
  }

  useEffect(() => {
    if (!drawStart || !drawEnd) return;

    const early = checkIsEarly(drawStart);
    setIsEarly(early);

    if (early) {
      setIsLoading(false);
      return;
    }

    if (currentStatus === 'distributionFinished') {
      setIsLoading(false);
      setIsLive(false);
      return;
    }

    const timer = setInterval(() => {
      const live = checkIsLive(drawStart, drawEnd);

      setIsLive(live);
      setIsLoading(false);

      if (!live) clearInterval(timer);
    }, intervalMs);

    return () => clearInterval(timer);
  }, [drawStart, drawEnd, currentStatus]);

  return { isLoading, isLive, isEarly };
};

export default useIsLiveDraw;
