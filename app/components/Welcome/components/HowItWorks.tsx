import presaleIcon from "~/assets/svg/presale-circle.svg";
import receiveIcon from "~/assets/svg/recieve-circle.svg";
import waitIcon from "~/assets/svg/wait-circle.svg";
import walletIcon from "~/assets/svg/wallet-circle.svg";
import depositIcon from "~/assets/svg/deposit-circle.svg";
import arrowIcon from "~/assets/svg/arrow-long.svg";
import Slider from 'react-slick';

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
  const sliderSettings = {
    dots: true,
    infinite: false,
    speed: 500,
    arrows: false,
    slidesToShow: 1.1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024, // Below lg
        settings: {
          slidesToShow: 2.1,
        },
      },
      {
        breakpoint: 640, // Below sm
        settings: {
          slidesToShow: 1.1,
        },
      },
    ],
  };

  return (
    <section>
      <h1 className="font-bold">How it’s Works?</h1>
      <div className="mt-6 lg:hidden -mx-1">
        <Slider {...sliderSettings}>
          {cards.map((el, idx) => (
            <div className="px-1">
              <div className="flex flex-col relative bg-[#0F1113] rounded-[14px] p-5 min-h-[202px] mr-6">
                <img className="w-12 h-12" src={el.img} alt="icon"/>
                <img src={arrowIcon} alt="arrow" className="absolute top-9 right-5"/>
                <span className="mt-5 mb-2 font-bold text-[20px]">{el.title}</span>
                <span className="text-body-m opacity-60">{el.subtitle}</span>
              </div>
            </div>
          ))}
        </Slider>
      </div>
      <div className="hidden lg:grid grid-cols-1 lg:grid-cols-5 gap-4 items-stretch mt-8">
        {cards.map((el) => (
          <div className="flex flex-col relative bg-[#0F1113] rounded-[14px] p-5">
            <img className="w-12 h-12" src={el.img} alt="icon"/>
            <img src={arrowIcon} alt="arrow" className="absolute top-9 right-5"/>
            <span className="mt-5 mb-2 text-[20px]">{el.title}</span>
            <span className="text-body-m opacity-60">{el.subtitle}</span>
          </div>
        ))}
      </div>
    </section>
)
};

export default HowItWorks;
