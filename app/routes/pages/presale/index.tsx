import PresaleBlock from "~/components/PresaleBlock";
import PresaleProgress from "~/routes/pages/presale/components/PresaleProgress";
import TokenInfo from "~/routes/pages/presale/components/TokenInfo";
import Distribution from "~/routes/pages/presale/components/Distribution";
import Tokenomics from "~/routes/pages/presale/components/Tokenomics";
import TokenDescription from "~/routes/pages/presale/components/TokenDescription";
import UpcomingSales from "~/components/Welcome/components/UpcomingSales";
import CheckDrawModal from "~/components/CheckDrawModal";
import {useState} from "react";

const Presale = () => {
  const [checkDrawOpen, setCheckDrawOpen] = useState(false);
  const isLoading = false;
  return (
    <div className="pb-16 flex flex-col gap-16 lg:gap-[120px]">
      <div>
        <PresaleBlock isLoading={isLoading} />
        {isLoading ? (
          <div className="rounded-[14px] bg-neutral-900 animate-pulse h-[148px] w-full mt-[30px] lg:mt-[14px]" />
        ) : (
          <PresaleProgress />
        )}
      </div>
      <TokenInfo isLoading={isLoading} />
      <Distribution isLoading={isLoading} />
      <Tokenomics />
      <TokenDescription />
      <UpcomingSales />
      <CheckDrawModal isOpen={checkDrawOpen} onClose={() => setCheckDrawOpen(false)} />
    </div>
  )
};

export default Presale;
