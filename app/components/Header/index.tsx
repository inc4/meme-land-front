
import { useState } from 'react'
import { Dialog, DialogPanel } from '@headlessui/react'
import Hamburger from "~/components/Icons/Hamburger";
import Logo from "~/assets/imgs/header-logo.png";
import balanceIcon from "~/assets/svg/header-address.svg";
import clsx from "clsx";
import MenuClose from "~/components/Icons/MenuClose";

const navigation = [
  { name: 'Memepad', href: '#' },
  { name: 'Rules', href: '#' },
  { name: 'Referral', href: '#' },
  { name: 'About', href: '#' },
]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="z-50">
      {mobileMenuOpen && (
        <div className="fixed h-full w-full backdrop-blur-xs z-10" />
      )}
      <nav aria-label="Global"
           className={clsx("mx-auto flex max-w-7xl items-center bg-background py-5 px-3 lg:px-8 border-[1px] border-transparent z-20 relative", mobileMenuOpen && 'header-border')}>
        <div className="flex lg:flex-1 mr-auto">
          <a href="#" className="-m-1.5 p-1.5">
            <img
              className="w-[164px]"
              alt="green meme"
              src={Logo}
            />
          </a>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          {navigation.map((item) => (
            <a key={item.name} href={item.href} className="text-sm/6 font-semibold text-gray-900">
              {item.name}
            </a>
          ))}
        </div>
        <div className="py-2 px-3 rounded-lg flex gap-2 items-center bg-neutral-900 border-[1px] border-[#272420] lg:ml-10 mr-2">
          <span className="border-r-[1px] border-[#D9D9D920] pr-2 hidden lg:block">J6j3...u2pSXRe</span>
          <span>29 SOL</span>
          <img src={balanceIcon} alt="sol"/>
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
          className="fixed inset-y-0 right-0 top-20 z-10 w-full overflow-y-auto h-fit px-6 pt-14 pb-10 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10 bg-background">
          <div className="flex flex-col gap-[22px] items-center">
            {navigation.map((item) => (
              <a key={item.name} href={item.href} className="text-sm/6 font-semibold text-gray-900">
                {item.name}
              </a>
            ))}
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  )
}
