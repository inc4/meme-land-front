import clsx from "clsx";
import { useEffect, useState } from "react";
import { useWallet } from "@solana/wallet-adapter-react";
import { useCopyToClipboard } from "react-use";

import Modal from "~/components/Modal";
import CustomButton from "~/components/CustomButton";
import CopyIcon from "~/components/Icons/Copy";
import giftIcon from "~/assets/svg/gift.svg";
import checkIcon from '~/assets/svg/check.svg';

import { getLocalStorage, setLocalStorage } from "~/utils/localStorage";
import { isAppVisitedKey } from "~/utils/constants";
import { getWalletByAddress } from "~/utils/request";
import useCopy from "~/hooks/useCopy";

const WelcomeModal = () => {
  const { publicKey } = useWallet();
  const [isAppVisited, setIsAppVisited] = useState(!!getLocalStorage(isAppVisitedKey));
  const [inviteCode, setInviteCode] = useState('');
  const { isCopied, copy } = useCopy();

  const handleStartExploring = () => {
    setLocalStorage(isAppVisitedKey, true);
    setIsAppVisited(true);
  };

  const handleCopy = () => copy(inviteCode);

  useEffect(() => {
    if (!publicKey) return;

    (async () => {
      const wallet = await getWalletByAddress(publicKey.toString());
      if (wallet) setInviteCode(wallet.inviteCode)
    })()
  }, [publicKey]);

  return (
    <Modal isOpen={!isAppVisited} onClose={() => {}}>
      <div>
        <div className="flex items-center justify-center p-[17px] mb-[32px]">
          <div className="absolute w-[30px] h-[30px] bg-primary blur-[30px]" />
          <img src={giftIcon} />
        </div>

        <h2 className="text-white font-semibold mb-[32px]">Welcome to Green Meme</h2>

        <p className="text-body-l text-white font-semibold mb-[32px]">
          Thanks for joining our platform! We’ve created an
          {' '}<span className="text-bronze">invite code</span>{' '}
          just for you. Share it with a friend and get a bonus when they join.
        </p>

        <div className="flex flex-col gap-[12px] mb-[32px]">

          <CustomButton
            variant="no-bg"
            handleClick={handleCopy}
            disabled={!inviteCode}
            customStyles={clsx(
              "flex justify-center items-center gap-[12px]",
              "bg-primary-transparent! text-primary text-body-l! font-medium! uppercase",
              "[&_path]:duration-300 [&_path]:ease-in-out [&_path]:fill-[#FFFFFF4A] hover:[&_path]:fill-primary",
            )}
          >
            {inviteCode || '---'}
            {isCopied ? (
              <img src={checkIcon} alt="Checkmark" className="w-[18px]" />
            ) : (
              <CopyIcon className="w-[18px] h-[18px]" />
            )}
          </CustomButton>

          <CustomButton variant="linear" customStyles="text-body-l! font-medium!">
            Share on Socials
          </CustomButton>

        </div>

        <div className="h-[1px] bg-gray-600 w-full mb-[32px]" />

        <CustomButton
          variant="default"
          handleClick={handleStartExploring}
          customStyles="text-body-l!"
        >
          Start Exploring
        </CustomButton>

      </div>
    </Modal>
  );
};

export default WelcomeModal;
