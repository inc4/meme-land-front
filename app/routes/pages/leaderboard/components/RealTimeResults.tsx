import clsx from "clsx";
import Skeleton from "~/components/Skeleton";
import TopWallet from "./TopWallet";
import useParticipations from "~/hooks/useParticipations";
import { formatNumberWithCommas } from "~/utils/numbers";

type TProps = {
  campaignId: string;
};

const RealTimeResults = ({ campaignId }: TProps) => {
  const { data: participationsData } = useParticipations({ campaignId }, 100);
  const list = participationsData?.page.data;

  if (!participationsData) {
    return <Skeleton className="w-full! h-[360px]! lg:h-[400px]!" />;
  }

  if (!participationsData.totalItems || !list?.length) return;

  return (
    <div>
      <h2 className="mb-[24px] text-center text-white font-bold lg:mb-[32px]">Real-time results:</h2>
      <div className="grid grid-cols-1 gap-[12px] mb-[64px] lg:grid-cols-3">
        {list[0] && <TopWallet variant="gold" data={list[0]} />}
        {list[1] && <TopWallet variant="silver" data={list[1]} />}
        {list[2] && <TopWallet variant="bronze" data={list[2]} />}
      </div>
      {list.length > 3 && (
        <div className="border-[2px] rounded-[8px] overflow-scroll bg-gray-900 border-gray-700">

          {/* Header */}
          <div className={clsx(
            "grid grid-cols-[128px_1fr_200px] gap-[10px] min-w-[900px]",
            "p-[12px] border-b-[1px] border-gray-700 bg-black",
            "text-body-m text-beige-600 uppercase font-medium",
            )}>
            <span>Order</span>
            <span>Wallet</span>
            <span className="text-right">Tokens</span>
          </div>

          {/* Body */}
          <div className="max-h-[250px] h-full overflow-y-scroll">
            {list.slice(3).map((item, index) => (
              <div
                key={item.wallet}
                className={clsx(
                  "grid grid-cols-[128px_1fr_150px] gap-[10px] min-w-[900px]",
                  "px-[12px] py-[16px] bg-gray-900",
                  "border-t-[1px] border-b-[1px] border-transparent",
                  "text-body-l text-white font-medium",
                )}
              >
                <span className="font-mono">#{index}</span>
                <span>{item.wallet}</span>
                <span className="font-mono text-right">{formatNumberWithCommas(item.tokenAllocation)}</span>
              </div>
            ))}
          </div>

        </div>
      )}
    </div>
  )
};

export default RealTimeResults;
