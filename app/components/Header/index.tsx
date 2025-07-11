
import { useRef, useState } from 'react';
import { useWallet } from '@solana/wallet-adapter-react';
import { useClickAway } from 'react-use';
import { Dialog, DialogPanel } from '@headlessui/react';
import { NavLink } from "react-router";
import clsx from "clsx";

import useGetBalance from "~/hooks/useGetBalance";
import useCopy from '~/hooks/useCopy';

import Hamburger from "~/components/Icons/Hamburger";
import MenuClose from "~/components/Icons/MenuClose";
import CustomButton from "~/components/CustomButton";
import Logo from "~/assets/svg/logo.svg";
import Telegram from "~/components/Icons/Telegram";
import X from "~/components/Icons/X";
import balanceIcon from "~/assets/svg/header-address.svg";

import { shortenAddress } from "~/utils/other";
import { HOME_PAGE, REFERRAL_PAGE } from "~/utils/constants";

const navigation = [
  { name: 'Memepad', href: HOME_PAGE },
  { name: 'Referral', href: REFERRAL_PAGE },
  { name: 'Rules', href: '/#rules' },
]

export default function Header() {
  const { disconnect } = useWallet();
  const [isDropdownOpened, setIsDropdownOpened] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { userAddress, balance } = useGetBalance();
  const { isCopied, copy } = useCopy();
  const ref = useRef(null);

  const toggleDropdown = () => setIsDropdownOpened(!isDropdownOpened);

  const hadnleCopy = () => copy(userAddress);

  const handleDisconnect = () => disconnect();

  useClickAway(ref, () => {
    setIsDropdownOpened(false);
  });

  return (
    <>
      {mobileMenuOpen && (
        <div className="fixed h-full w-full backdrop-blur-xs z-10" />
      )}
      <header className="z-50">
        <nav aria-label="Global"
             className={clsx("mx-auto flex w-full items-center bg-background py-5 px-3 lg:px-0 border-[1px] border-transparent z-20 relative", mobileMenuOpen && 'header-border')}>
          <div className="flex lg:flex-1 mr-auto">
            <NavLink to="/" className="-m-1.5 p-1.5">
              <img
                className="w-[164px]"
                alt="Memedrop"
                src={Logo}
              />
            </NavLink>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item) => (
              <NavLink
                key={item.name}
                to={item.href}
                className={({isActive}) => clsx('text-h5 lg:text-body-l font-semibold hover:text-[#3AFFA3]')}
              >
                {item.name}
              </NavLink>
            ))}
          </div>
          <div className="relative" ref={ref}>
            <div className="py-2 px-3 rounded-lg flex gap-2 items-center bg-neutral-900 border-[1px] border-[#272420] lg:ml-10 mr-2">
              <span
                className="border-r-[1px] border-[#D9D9D920] pr-2 hidden lg:block font-mono text-body-l cursor-pointer"
                onClick={toggleDropdown}
              >
                {shortenAddress(userAddress)}
              </span>
              <span className="font-mono">{balance} SOL</span>
              <img src={balanceIcon} alt="sol"/>
            </div>
            <div className={clsx(
                "absolute flex flex-col justify-between items-center max-w-[152px] w-full left-[42px] top-[50px]",
                "bg-neutral-900 border-[#D9D9D920] border-[1px] rounded-lg",
                isDropdownOpened ? 'visible' : 'hidden',
            )}>
              <CustomButton
                variant='no-bg'
                customStyles='px-[12px] py-[6px] text-body-l! font-medium!'
                handleClick={hadnleCopy}
              >
                {isCopied ? 'Copied' : 'Copy Address'}
              </CustomButton>
              <CustomButton
                variant='no-bg'
                customStyles='px-[12px] py-[6px] text-body-l! font-medium!'
                handleClick={handleDisconnect}
              >
                Disconnect
              </CustomButton>
            </div>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen((state) => !state)}
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            >
              {mobileMenuOpen ? <MenuClose/> : <Hamburger/>}
            </button>
          </div>
        </nav>
        <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
          <DialogPanel
            className="fixed inset-y-0 right-0 top-20 z-10 w-full overflow-y-auto h-fit px-6 pt-14 pb-10 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10 bg-background"
          >
            <div className="flex flex-col gap-[22px] items-center">
              {navigation.map((item) => (
                <a key={item.name} href={item.href} className="text-h4 text-white font-semibold">
                  {item.name}
                </a>
              ))}
            </div>
            <div className="flex justify-center gap-4 mt-[100px]">
              <CustomButton variant="icon-only" customStyles="!w-10 !h-10 !p-0">
                <Telegram className="w-6 h-6" />
              </CustomButton>
              <CustomButton variant="icon-only" customStyles="!w-10 !h-10 !p-0">
                <X className="w-6 h-6" />
              </CustomButton>
            </div>
          </DialogPanel>
        </Dialog>
      </header>
    </>
  )
}
