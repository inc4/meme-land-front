import PresaleBlock from "~/components/PresaleBlock";
import PresaleProgress from "~/routes/pages/presale/components/PresaleProgress";
import TokenInfo from "~/routes/pages/presale/components/TokenInfo";
import Distribution from "~/routes/pages/presale/components/Distribution";
import Tokenomics from "~/routes/pages/presale/components/Tokenomics";
import TokenDescription from "~/routes/pages/presale/components/TokenDescription";
import UpcomingSales from "~/components/Welcome/components/UpcomingSales";
import CheckDrawModal from "~/components/CheckDrawModal";
import {useEffect, useState} from "react";
import useCampaign from "~/hooks/useCampaign";
import {useParams} from "react-router";

const Presale = () => {
  let {tokenId} = useParams();
  const {data, isLoading} = useCampaign(tokenId);

  const [checkDrawOpen, setCheckDrawOpen] = useState(false);

  useEffect(() => {
    if (data?.currentStatus === 'distributionOpened' || data?.currentStatus === 'distributionFinished') {
      setCheckDrawOpen(true);
    }
  }, []);

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
        campaignId={tokenId}
      />
    </div>
  )
};

export default Presale;
