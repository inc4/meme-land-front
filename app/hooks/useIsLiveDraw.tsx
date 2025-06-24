import { useEffect, useState } from "react";

type TParams = {
  drawStart: string | undefined,
  drawEnd: string | undefined
};

const useIsLiveDraw = ({ drawStart, drawEnd }: TParams) => {
  const [isLive, setIsLive] = useState(false);
  const [isEarly, setIsEarly] = useState(true);
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

    if (early) return;

    const timer = setInterval(() => {
      const live = checkIsLive(drawStart, drawEnd);

      setIsLive(live);

      if (!live) clearInterval(timer);
    }, intervalMs);

    return () => clearInterval(timer);
  }, [drawStart, drawEnd]);

  return { isLive, isEarly };
};

export default useIsLiveDraw;
