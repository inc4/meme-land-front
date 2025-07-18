import { useState, useEffect, useRef } from "react";
import { useIntersection } from "react-use";
import clsx from "clsx";
import Skeleton from "~/components/Skeleton";
import TopWallet from "./TopWallet";
import useParticipations from "~/hooks/useParticipations";
import { formatNumberWithCommas } from "~/utils/numbers";
import type { TParticipations } from "~/types";

type TProps = {
  campaignId: string;
};

const RealTimeResults = ({ campaignId }: TProps) => {
  const [page, setPage] = useState(0);
  const [totalData, setTotalData] = useState<TParticipations[] | undefined>([]);
  const { isLoading, data: participationsData } = useParticipations({ campaignId }, 100, page);

  const intersectionRef = useRef(null);
  // @ts-ignore
  const intersection = useIntersection(intersectionRef, {
    root: null,
    rootMargin: '0px',
    threshold: 1
  });

  useEffect(() => {
    if (
      isLoading ||
      !participationsData?.page.size ||
      intersection && intersection.intersectionRatio < 1
    ) return;

    setPage(page + 1);
  }, [intersection?.intersectionRatio, isLoading, participationsData?.page.size]);

  useEffect(() => {
    if (!participationsData?.totalItems) return;

    const data = participationsData.page.data;
    if (!data.length) return;

    setTotalData([...(totalData || []), ...data]);
  }, [participationsData?.page.data]);

  if (!totalData) {
    return <Skeleton className="w-full! h-[360px]! lg:h-[400px]!" />;
  }

  if (!totalData.length) return;

  return (
    <div className="pb-[88px] lg:pb-[120px]">
      <h2 className="mb-[24px] text-center text-white font-bold lg:mb-[32px]">Real-time results:</h2>
      <div className="grid grid-cols-1 gap-[12px] mb-[64px] lg:grid-cols-3">
        {totalData[0] && <TopWallet variant="gold" data={totalData[0]} />}
        {totalData[1] && <TopWallet variant="silver" data={totalData[1]} />}
        {totalData[2] && <TopWallet variant="bronze" data={totalData[2]} />}
      </div>
      {totalData.length > 3 && (
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
          <div className="max-h-[250px] h-full">
            {totalData.slice(3).map((item, index) => (
              <div
                key={item.participationId}
                {...(index === totalData.length - 1 ? { ref: intersectionRef } : {})}
                className={clsx(
                  "grid grid-cols-[128px_1fr_150px] gap-[10px] min-w-[900px]",
                  "px-[12px] py-[16px] bg-gray-900",
                  "border-t-[1px] border-b-[1px] border-transparent",
                  "text-body-l text-white font-medium",
                )}
              >
                <span className="font-mono">#{index + 4}</span>
                <span>{item.wallet}</span>
                <span className="font-mono text-right">{formatNumberWithCommas(+item.tokenAllocation.$numberDecimal)}</span>
              </div>
            ))}
          </div>

        </div>
      )}
    </div>
  )
};

export default RealTimeResults;
