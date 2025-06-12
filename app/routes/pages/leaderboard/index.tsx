import clsx from "clsx";
import Title from "./components/Title";
import TokenInfo from "./components/TokenInfo";
import WalletInfo from "./components/WalletInfo";
import DrawSpeed from "./components/DrawSpeed";
import AllocationInfo from "./components/AllocationInfo";
import TopWallet from "./components/TopWallet";
import Table from "./components/Table";

const Leaderboard = () => {
  const isLive = true;

  return (
    <div>
      <div className="mb-[24px] lg:mb-[48px]">
        <Title isLive={isLive} />
      </div>

      <div className="grid grid-cols-3 grid-rows-[1fr,127px] gap-[12px] mb-[64px]">
        <div className="[grid-area:1/1/3/2]">
          <TokenInfo />
        </div>

        <div className="[grid-area:1/2/2/3]">
          <WalletInfo />
        </div>

        <div className="[grid-area:2/2/3/3]">
          <DrawSpeed />
        </div>

        <div className="[grid-area:1/3/3/4]">
          <AllocationInfo />
        </div>
      </div>

      <div className="pb-[120px]">
        <h2 className="mb-[32px] text-center text-white font-bold">Real-time results:</h2>
        <div className="grid grid-cols-3 gap-[12px] mb-[64px]">
          <TopWallet variant="gold" />
          <TopWallet variant="silver" />
          <TopWallet variant="bronze" />
        </div>
        <Table />
      </div>
    </div>
  )
};

export default Leaderboard;