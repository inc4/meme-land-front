import twoDots from "~/assets/svg/two-dots.svg";
import clsx from "clsx";
import {useEffect, useState} from "react";
import {getTimeRemaining, timerCountdown} from "~/utils/time";

type TProps = {
  className?: string;
  timeSectionStyles?: string;
  timestamp: number;
};

const Countdown = ({ className, timeSectionStyles, timestamp }: TProps) => {
  const [timerData, setTimerData] = useState({});

  useEffect(() => {
    setTimerData(getTimeRemaining(timestamp));

    const interval = setInterval(() => {
      setTimerData(getTimeRemaining(timestamp));
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);
  return (
    <div className={clsx('flex items-center justify-center gap-1', className)}>
      <div className={clsx(
        "rounded-[14px] flex flex-col gap-1 items-center justify-center bg-[#1A1E21] w-[66px] h-[55px] lg:w-[84px] lg:h-[66px]",
        timeSectionStyles,
      )}>
        <span className="text-[15px] lg:text-[18px] font-medium text-white font-mono">
          {timestamp ? timerData.days : ''}
        </span>
        <span className="text-body-s font-semibold opacity-50">DAYS</span>
      </div>
      <img src={twoDots} alt="two dots"/>
      <div className={clsx(
        "rounded-[14px] flex flex-col gap-1 items-center justify-center bg-[#1A1E21] w-[66px] h-[55px] lg:w-[84px] lg:h-[66px]",
        timeSectionStyles,
      )}>
        <span className="text-[15px] lg:text-[18px] font-medium text-white font-mono">
          {timestamp ? timerData.hours : ''}
        </span>
        <span className="text-body-s font-semibold opacity-50">HOURS</span>
      </div>
      <img src={twoDots} alt="two dots"/>
      <div className={clsx(
        "rounded-[14px] flex flex-col gap-1 items-center justify-center bg-[#1A1E21] w-[66px] h-[55px] lg:w-[84px] lg:h-[66px]",
        timeSectionStyles,
      )}>
        <span className="text-[15px] lg:text-[18px] font-medium text-white font-mono">
          {timestamp ? timerData.minutes : ''}
        </span>
        <span className="text-body-s font-semibold opacity-50">MINUTES</span>
      </div>
      <img src={twoDots} alt="two dots"/>
      <div className={clsx(
        "rounded-[14px] flex flex-col gap-1 items-center justify-center bg-[#1A1E21] w-[66px] h-[55px] lg:w-[84px] lg:h-[66px]",
        timeSectionStyles,
      )}>
        <span className="text-[15px] lg:text-[18px] font-medium text-white font-mono">
          {timestamp ? timerData.seconds : ''}
        </span>
        <span className="text-body-s font-semibold opacity-50">SECONDS</span>
      </div>
    </div>
  )
};

export default Countdown;
