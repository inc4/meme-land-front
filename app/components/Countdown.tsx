import twoDots from "~/assets/svg/two-dots.svg";
import clsx from "clsx";

const Countdown = ({className}: {className?: string}) => {
  return (
    <div className={clsx('flex items-center justify-center gap-1', className)}>
      <div className="rounded-[14px] flex flex-col gap-1 items-center justify-center bg-[#1A1E21] w-[66px] h-[55px] lg:w-[84px] lg:h-[66px]">
        <span className="text-[15px] font-medium text-white">17</span>
        <span className="text-xs font-semibold opacity-50">DAYS</span>
      </div>
      <img src={twoDots} alt="two dots"/>
      <div className="rounded-[14px] flex flex-col gap-1 items-center justify-center bg-[#1A1E21] w-[66px] h-[55px] lg:w-[84px] lg:h-[66px]">
        <span className="text-[15px] font-medium text-white">04</span>
        <span className="text-xs font-semibold opacity-50">HOURS</span>
      </div>
      <img src={twoDots} alt="two dots"/>
      <div className="rounded-[14px] flex flex-col gap-1 items-center justify-center bg-[#1A1E21] w-[66px] h-[55px] lg:w-[84px] lg:h-[66px]">
        <span className="text-[15px] font-medium text-white">
          15
        </span>
        <span className="text-xs font-semibold opacity-50">MINUTES</span>
      </div>
      <img src={twoDots} alt="two dots"/>
      <div className="rounded-[14px] flex flex-col gap-1 items-center justify-center bg-[#1A1E21] w-[66px] h-[55px] lg:w-[84px] lg:h-[66px]">
        <span className="text-[15px] font-medium text-white">
          24
        </span>
        <span className="text-xs font-semibold opacity-50">SECONDS</span>
      </div>
    </div>
  )
};

export default Countdown;
