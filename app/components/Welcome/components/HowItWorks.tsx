import presaleIcon from "~/assets/svg/presale-circle.svg";
import receiveIcon from "~/assets/svg/recieve-circle.svg";
import waitIcon from "~/assets/svg/wait-circle.svg";
import walletIcon from "~/assets/svg/wallet-circle.svg";
import depositIcon from "~/assets/svg/deposit-circle.svg";
import arrowIcon from "~/assets/svg/arrow-long.svg";
import Slider from 'react-slick';
import {NavLink} from "react-router";

const cards = [
  {
    img: walletIcon,
    title: 'Connect Wallet',
    subtitle: (
      <span>
        Start by connecting your favorite Solana wallet, such as <NavLink to="https://phantom.com/download" target="_blank" className="underline">Phantom</NavLink>. Now you’re all set.
      </span>
    ),
  },
  {
    img: presaleIcon,
    title: 'Join the Presale',
    subtitle: 'Pick an active launch and contribute between 1–200 $SOL.',
  },
  {
    img: depositIcon,
    title: 'Make it to the Top 10%',
    subtitle: (
      <span>
        Contribute enough $SOL to land in the <b>top 10%</b> and you’ll get a mystery cut of the token supply - randomized per project and <b>starting from 0.1%</b>.
      </span>
    ),
  },
  {
    img: waitIcon,
    title: 'Wait for the Draw',
    subtitle: (
      <span>
        Once the presale ends, an <b>on-chain program</b> shuffles all wallets. The order decides who gets tokens first.
      </span>
    ),
  },
  {
    img: receiveIcon,
    title: 'Receive Tokens',
    subtitle: 'Tokens are distributed live based on the draw.',
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
      <h1 className="text-[32px] font-bold">How it’s Works?</h1>
      <div className="mt-6 lg:hidden -mx-1">
        <Slider {...sliderSettings}>
          {cards.map((el, idx) => (
            <div className="px-1">
              <div className="flex flex-col relative bg-[#0F1113] rounded-[14px] p-5 min-h-[202px] mr-6">
                <img className="w-12 h-12" src={el.img} alt="icon"/>
                {idx < cards.length - 1 && (
                  <img src={arrowIcon} alt="arrow" className="absolute top-9 right-5"/>
                )}
                <span className="mt-5 mb-2 font-bold text-[20px]">{el.title}</span>
                <span className="text-body-m opacity-60">{el.subtitle}</span>
              </div>
            </div>
          ))}
        </Slider>
      </div>
      <div className="hidden lg:grid grid-cols-1 lg:grid-cols-5 gap-4 items-stretch mt-8">
        {cards.map((el, i) => (
          <div className="flex flex-col relative bg-[#0F1113] rounded-[14px] p-5" key={el.title}>
            <img className="w-12 h-12" src={el.img} alt="icon"/>
            {i < cards.length - 1 && (
              <img src={arrowIcon} alt="arrow" className="absolute top-9 right-5"/>
            )}
            <span className="mt-5 mb-2 text-[20px]">{el.title}</span>
            <span className="text-body-m opacity-60">{el.subtitle}</span>
          </div>
        ))}
      </div>
    </section>
)
};

export default HowItWorks;
