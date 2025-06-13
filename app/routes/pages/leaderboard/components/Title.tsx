import clsx from "clsx";

type TProps = {
  isLive: boolean;
};

const Title = ({ isLive }: TProps) => {
  return (
    <div className="flex items-center justify-start gap-[12px] text-white font-bold lg:gap-[16px]">
      <h2>{isLive ? 'Draw is Running LIVE' : 'Draw is Finished'}</h2>
      <span className={clsx(
        isLive ? "bg-red" : "bg-primary",
        "w-[12px] h-[12px] rounded-full",
        "lg:w-[18px] lg:h-[18px]",
      )}/>
    </div>
  )
};

export default Title;
