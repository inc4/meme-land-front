import clsx from "clsx";

type TProps = {
  className?: string;
}

const Skeleton = ({ className = '' }: TProps) => {
  return (
    <div className={clsx(
      "h-full w-full rounded-[14px] animate-pulse bg-neutral-900",
      className,
    )}/>
  )
};

export default Skeleton;
