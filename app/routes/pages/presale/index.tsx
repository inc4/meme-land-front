import PresaleBlock from "~/components/PresaleBlock";
import PresaleProgress from "~/routes/pages/presale/components/PresaleProgress";
import TokenInfo from "~/routes/pages/presale/components/TokenInfo";
import Distribution from "~/routes/pages/presale/components/Distribution";
import Tokenomics from "~/routes/pages/presale/components/Tokenomics";
import TokenDescription from "~/routes/pages/presale/components/TokenDescription";
import UpcomingSales from "~/components/Welcome/components/UpcomingSales";

const Presale = () => {
  return (
    <div className="pb-16 flex flex-col gap-16 lg:gap-[120px]">
      <div>
        <PresaleBlock />
        <PresaleProgress />
      </div>
      <TokenInfo />
      <Distribution />
      <Tokenomics />
      <TokenDescription />
      <UpcomingSales />
    </div>
  )
};

export default Presale;
