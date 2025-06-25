import type { TCampaignStats } from "~/types";

type TProps = {
  campaignStats: TCampaignStats;
  userGroup: number | undefined;
}

const WalletInfo = ({ campaignStats, userGroup }: TProps) => {
  const { walletsClaimed, totalParticipants } = campaignStats;
  const walletsWaiting = +totalParticipants - +walletsClaimed;

  const widthPercentage = (+walletsClaimed * 100) / +totalParticipants;

  return (
    <div className="h-full p-[12px] pt-[18px] bg-background border-[2px] border-gray-700 rounded-[12px]">
      <div className="flex flex-col items-center mb-[21px]">
        <span className="text-body-s text-beige-600 uppercase font-semibold">Current Wallet #</span>
        <span className="text-h2 text-primary font-medium font-mono">{userGroup || '---'}</span>
      </div>

      <div className="w-full p-[2px] mb-[12px] bg-night rounded-[8px]">
        <div
          style={{ width: `${widthPercentage}%` }}
          className="bg-primary h-[20px] rounded-[4px] [box-shadow:_0px_0px_8px_0px_var(--color-primary)_inset;]"
        />
      </div>

      <div className="flex items-center gap-[10px] p-[12px] bg-beige-800">

        <div className="grow flex flex-col items-center gap-[4px]">
          <span className="text-body-s text-beige-600 uppercase font-semibold">Wallets drawn:</span>
          <span className="text-h3 text-primary font-medium font-mono">
            {+walletsClaimed}<sub className="text-gray-600">/{+totalParticipants}</sub>
          </span>
        </div>

        <div className="w-[1px] h-[52px] self-stretch bg-gray-700" />

        <div className="grow flex flex-col items-center gap-[4px]">
          <span className="text-body-s text-beige-600 uppercase font-semibold">Wallets waiting:</span>
          <span className="text-h3 text-primary font-medium font-mono">
            {walletsWaiting}<sub className="text-gray-600">/{+totalParticipants}</sub>
          </span>
        </div>

      </div>

    </div>
  )
};

export default WalletInfo;
