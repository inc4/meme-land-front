import WelcomeModal from "./components/WelcomeModal";
import PresaleBlock from "~/components/PresaleBlock";
import HowItWorks from "~/components/Welcome/components/HowItWorks";
import UpcomingSales from "~/components/Welcome/components/UpcomingSales";
import Invite from "~/components/Welcome/components/Invite";
import CompleteSales from "~/components/Welcome/components/CompleteSales";
import Rules from "~/components/Welcome/components/Rules";
import useCampaigns from "~/hooks/useCampaigns";
import {useMemo} from "react";

export function Welcome() {
  const {data, isLoading} = useCampaigns();
  const {data: upcomingPresale} = useCampaigns({currentStatus: "upcoming"});

  const currentPresale = useMemo(() => {
    if (isLoading) {
      return undefined;
    } else {
      return data?.page.data[0] || upcomingPresale?.page.data[0]
    }
  }, [data, upcomingPresale, isLoading])

  return (
    <div className="flex flex-col gap-16 lg:gap-[120px] pb-[120px]">
      <WelcomeModal />
      <PresaleBlock homePage campaign={currentPresale} isLoading={isLoading} />
      <HowItWorks />
      <UpcomingSales />
      <Invite />
      <CompleteSales />
      <Rules />
    </div>
  );
}
