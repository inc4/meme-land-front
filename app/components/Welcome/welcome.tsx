import PresaleBlock from "~/components/PresaleBlock";
import HowItWorks from "~/components/Welcome/components/HowItWorks";

export function Welcome() {
  return (
    <div className="px-5">
      <PresaleBlock />
      <HowItWorks />
    </div>
  );
}
