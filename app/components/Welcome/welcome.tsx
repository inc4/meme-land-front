import PresaleBlock from "~/components/PresaleBlock";
import HowItWorks from "~/components/Welcome/components/HowItWorks";
import UpcomingSales from "~/components/Welcome/components/UpcomingSales";
import Invite from "~/components/Welcome/components/Invite";
import CompleteSales from "~/components/Welcome/components/CompleteSales";
import Rules from "~/components/Welcome/components/Rules";

export function Welcome() {
  return (
    <div className="flex flex-col gap-16 lg:gap-[120px] pb-[120px]">
      <PresaleBlock />
      <HowItWorks />
      <UpcomingSales />
      <Invite />
      <CompleteSales />
      <Rules />
    </div>
  );
}
