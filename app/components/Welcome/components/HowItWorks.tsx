import presaleIcon from "~/assets/svg/presale-circle.svg";
import receiveIcon from "~/assets/svg/recieve-circle.svg";
import waitIcon from "~/assets/svg/wait-circle.svg";
import walletIcon from "~/assets/svg/wallet-circle.svg";
import depositIcon from "~/assets/svg/deposit-circle.svg";
import arrowIcon from "~/assets/svg/arrow-long.svg";

const cards = [
  {
    img: walletIcon,
    title: 'Connect Wallet',
    subtitle: 'Connect your favorite crypto wallet.',
  },
  {
    img: presaleIcon,
    title: 'Choose Presale',
    subtitle: 'Join your first sale and be eligible for a chance to win $25 in free IDO tokens.',
  },
  {
    img: depositIcon,
    title: 'Deposit Funds',
    subtitle: 'Pay in crypto, contribute to your winning sale.',
  },
  {
    img: waitIcon,
    title: 'Wait for the random draw',
    subtitle: 'Pay in crypto, contribute to your winning sale.',
  },
  {
    img: receiveIcon,
    title: 'Receive your tokens',
    subtitle: 'And sell them on time to make a profit.',
  },
]

const HowItWorks = () => {
  return (
    <section>
      <h2 className="text-[32px] text-white">How it’s Works?</h2>
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-4 items-stretch mt-8">
        {cards.map((el) => (
          <div className="flex flex-col relative bg-[#0F1113] rounded-[14px] p-5">
            <img className="w-12 h-12" src={el.img} alt="icon" />
            <img src={arrowIcon} alt="arrow" className="absolute top-9 right-5"/>
            <span className="mt-5 mb-2 text-[20px]">{el.title}</span>
            <span className="text-sm opacity-60">{el.subtitle}</span>
          </div>
        ))}
      </div>
    </section>
  )
};

export default HowItWorks;
