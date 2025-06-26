import NeonShadowBox from "~/components/NeonShadowBox";
import walletOutlineSecondaryIcon from "~/assets/svg/wallet-outline-secondary.svg";
import goldIcon from "~/assets/svg/gold.svg";
import silverIcon from "~/assets/svg/silver.svg";
import bronzeIcon from "~/assets/svg/bronze.svg";
import { shortenAddress } from "~/utils/other";
import { formatNumberWithCommas } from "~/utils/numbers";
import type { TParticipations } from "~/types";

type TVariant = NonNullable<Parameters<typeof NeonShadowBox>[0]["variant"]>;

type TProps = {
  variant: TVariant;
  data: TParticipations;
}

const TopWallet = ({ data, variant = "gold" }: TProps) => {
  const { wallet, tokenAllocation } = data;

  const getIconSrc = (v: TVariant) => {
    switch (v) {
      case 'gold':
      default:
        return goldIcon;
      case 'silver':
        return silverIcon;
      case 'bronze':
        return bronzeIcon;
    }
  }

  const getPlaceText = (v: TVariant) => {
    switch (v) {
      case 'gold':
      default:
        return '1st';
      case 'silver':
        return '2nd';
      case 'bronze':
        return '3rd';
    }
  }

  return (
    <NeonShadowBox
      variant={variant}
      primaryShadowPosition="bottom"
      secondaryShadowPosition="inner"
      customStyles="p-[12px] pb-[17px]"
    >
        <div className="flex items-center justify-between gap-[12px] mb-[33px]">

          <div className="flex items-center gap-[12px]">
            <img src={getIconSrc(variant)} alt={variant} />
            <span className="text-body-s text-beige-600 uppercase font-semibold">{getPlaceText(variant)} place</span>
          </div>

          <div className="flex items-center gap-[8px]">
            <img src={walletOutlineSecondaryIcon} alt={variant} />
            <span className="text-body-l text-white font-medium font-mono">{shortenAddress(wallet, 3, 3)}</span>
          </div>

        </div>

        <div className="flex flex-col items-center">
          <span className="text-body-s text-beige-600 uppercase font-semibold">Tokens</span>
          <span className="text-h2 text-white font-medium font-mono">{formatNumberWithCommas(+tokenAllocation.$numberDecimal)}</span>
        </div>
    </NeonShadowBox>
  );
};

export default TopWallet;
