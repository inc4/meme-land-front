import Logo from "~/assets/imgs/header-logo.png";
import CustomButton from "~/components/CustomButton";
import Telegram from "~/components/Icons/Telegram";
import X from "~/components/Icons/X";

const navigation = [
  { name: 'Memepad', href: '#' },
  { name: 'Rules', href: '#' },
  { name: 'Referral', href: '#' },
  { name: 'About', href: '#' },
]
const navigationBottom = [
  { name: 'Privacy & Policy', href: '#' },
  { name: 'Fees', href: '#' },
  { name: 'Terms & Conditions', href: '#' },
  { name: 'Refund Policy', href: '#' },
  { name: 'Platfrom Status', href: '#' },
]

const Footer = () => {
  return (
    <footer className="p-4 max-w-[1334px] mx-auto w-full pt-[67px] border-t-[1px] border-[#434343]">
      <div className="flex flex-col gap-14 items-center lg:flex-row lg:gap-24">
        <img src={Logo} alt="" className="max-w-[200px]"/>
        <div className="flex flex-col lg:flex-row gap-[21px] items-center">
          {navigation.map((item) => (
            <a key={item.name} href={item.href} className="text-white text-h4 font-semibold">
              {item.name}
            </a>
          ))}
        </div>
        <div className="flex justify-center gap-4 lg:ml-auto">
          <CustomButton variant="icon-only" customStyles="!w-10 !h-10 !p-0">
            <Telegram className="w-6 h-6"/>
          </CustomButton>
          <CustomButton variant="icon-only" customStyles="!w-10 !h-10 !p-0">
            <X className="w-6 h-6"/>
          </CustomButton>
        </div>
      </div>
      <div className="flex flex-col items-center mb-18 lg:mb-[68px] mt-16 lg:mt-[68px] lg:gap-8 lg:items-start">
        <p className="text-body-m lg:text-body-l block order-1 text-center opacity-40 mb-10 max-w-[800px] lg:text-left lg:order-2">
          RISK WARNING: Trading Cryptocurrencies is highly speculative, carries a level of risk and may not be suitable
          for all investors. You may lose some or all of your invested capital, therefore you should not speculate with
          capital that you cannot afford to lose. The content on this site should not be considered investment advice.
          Investing is speculative. When investing your capital is at risk.
        </p>
        <div className="grid order-2 grid-cols-2 gap-2 lg:order-1 max-w-[418px] lg:gap-4">
          <div
            className="text-body-m lg:text-body-l py-[14px] px-3 bg-[#17422C52] border-[1px] border-[#666666] text-center rounded-xl font-medium">
            Successful Sales: <span className="!text-[#3AFFA3] font-mono">31</span>
          </div>
          <div
            className="text-body-m lg:text-body-l py-[14px] px-3 bg-[#17422C52] border-[1px] border-[#666666] text-center rounded-xl font-medium">
            Participants: <span className="!text-[#3AFFA3] font-mono">1413</span>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center gap-6 lg:flex-row justify-between mb-9">
        <div className="flex flex-wrap justify-center gap-y-2.5 gap-x-4">
          {navigationBottom.map((item) => (
            <a key={item.name} href={item.href} className="text-body-m lg:text-body-l opacity-50 text-white">{item.name}</a>
          ))}
        </div>
        <span className="opacity-50">© 2025 GreenMeme Ltd. All rights reserved</span>
      </div>
    </footer>
  )
};

export default Footer;
