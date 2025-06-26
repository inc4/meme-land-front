import PresaleBlock from "~/components/PresaleBlock";
import PresaleProgress from "~/routes/pages/presale/components/PresaleProgress";
import TokenInfo from "~/routes/pages/presale/components/TokenInfo";
import Distribution from "~/routes/pages/presale/components/Distribution";
import Tokenomics from "~/routes/pages/presale/components/Tokenomics";
import TokenDescription from "~/routes/pages/presale/components/TokenDescription";
import UpcomingSales from "~/components/Welcome/components/UpcomingSales";
import CheckDrawModal from "~/components/CheckDrawModal";
import {useEffect, useState} from "react";
import useCampaigns from "~/hooks/useCampaigns";
import {useParams} from "react-router";
import { PRESALE_PAGE_SEGMENT } from "~/utils/constants";

const Presale = () => {
  let params = useParams();
  const tokenName = params[PRESALE_PAGE_SEGMENT];

  const { data: campaignsData, isLoading } = useCampaigns({ tokenName });
  const data = campaignsData?.page.data[0];

  const [checkDrawOpen, setCheckDrawOpen] = useState(false);

  useEffect(() => {
    if (data?.currentStatus === 'distributionOpened' || data?.currentStatus === 'distributionFinished') {
      setCheckDrawOpen(true);
    }
  }, [data]);

  return (
    <div className="pb-16 flex flex-col gap-16 lg:gap-[120px]">
      <div>
        <PresaleBlock campaign={data} isLoading={isLoading} />
        <PresaleProgress campaign={data} />
      </div>
      <TokenInfo campaign={data} isLoading={isLoading} />
      <Distribution campaign={data} isLoading={isLoading} />
      <Tokenomics campaign={data} isLoading={isLoading}/>
      {data && <TokenDescription campaign={data} />}
      <UpcomingSales />
      <CheckDrawModal
        isOpen={checkDrawOpen}
        onClose={() => setCheckDrawOpen(false)}
        tokenName={tokenName}
      />
    </div>
  )
};

export default Presale;
