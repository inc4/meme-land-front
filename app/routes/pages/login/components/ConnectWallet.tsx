import { useEffect } from "react";
import { useWalletModal } from "@solana/wallet-adapter-react-ui";
import { isMobile } from "react-device-detect";
import NeonShadowBox from "~/components/NeonShadowBox";
import CustomButton from "~/components/CustomButton";
import walletOutlineIcon from "~/assets/svg/wallet-outline.svg";
import walletSolidIcon from "~/assets/svg/wallet-solid.svg";
import { getLocalStorage, removeLocalStorage } from "~/utils/localStorage";

const ConnectWallet = () => {
  const { setVisible } = useWalletModal();

  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.visibilityState === 'hidden') window.location.reload();
    };

    if (getLocalStorage('walletName')) removeLocalStorage('walletName');

    if (isMobile) document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    }
  }, []);

  return (
    <NeonShadowBox
      variant="green"
      primaryShadowPosition="top"
      secondaryShadowPosition="outer"
      customStyles="max-w-[472px] w-full px-[21px] py-[34px] lg:px-[46px]"
      customBorderStyles="dark-box-border!"
    >
      <div className="flex flex-col items-center justify-between gap-[32px] lg:gap-[28px]">
        <img src={walletOutlineIcon} className="p-[17px]" alt="Wallet" />

        <div className="flex flex-col justify-center items-center gap-[12px]">
          <span className="text-h1 font-bold text-center">Connect your Wallet</span>
          <span className="text-h5 font-semibold text-center">It’s Easy and Secure</span>
        </div>

        <CustomButton
          customStyles="flex justify-center items-center gap-[8px] p-[12px] max-w-[201px] font-semibold text-body-l!"
          handleClick={() => setVisible(true)}
        >
          Connect Wallet
          <img src={walletSolidIcon} alt="Wallet" />
        </CustomButton>
      </div>
    </NeonShadowBox>
  )
};

export default ConnectWallet;
