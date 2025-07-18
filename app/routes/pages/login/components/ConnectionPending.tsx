import clsx from "clsx";
import Spinner from "~/components/Spinner";

const ConnectionPending = () => {
  return (
    <div className="fixed inset-0 flex justify-center items-center w-full h-full p-[16px]">
      <div className="absolute z-20 inset-0 w-full h-full [backdrop-filter:_blur(16px)]" />
      <div
        className={clsx(
          "relative z-30 flex flex-col items-center justify-between gap-[28px] bg-gray-800",
          "max-w-[472px] max-h-[365px] w-full h-full px-[24px] py-[36px]",
          "border-[1px] border-silver-transparent rounded-[14px]",
          "lg:max-h-[408px]"
        )}
      >
        <span className="text-h3 font-semibold">Connecting Wallet</span>
        <Spinner />
        <span className="text-h5 font-semibold text-gray-500">Confirm in your Wallet</span>
      </div>
    </div>
  );
};

export default ConnectionPending;
