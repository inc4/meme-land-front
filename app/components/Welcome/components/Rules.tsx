import Slider from 'react-slick';
import arrowIcon from "~/assets/svg/arrow-long.svg";

const list = [
  { label: 'Enter to Presale', text: 'Zesh AI Layer is an AI Layer on SUI, with 1.6M+ users. For a chance to participate in this crypto IDO please check the pre-sale details below.' },
  { label: 'Enter to Presale', text: 'Zesh AI Layer is an AI Layer on SUI, with 1.6M+ users. For a chance to participate in this crypto IDO please check the pre-sale details below.' },
  { label: 'Enter to Presale', text: 'Zesh AI Layer is an AI Layer on SUI, with 1.6M+ users. For a chance to participate in this crypto IDO please check the pre-sale details below.' },
  { label: 'Enter to Presale', text: 'Zesh AI Layer is an AI Layer on SUI, with 1.6M+ users. For a chance to participate in this crypto IDO please check the pre-sale details below.' },
];

const Rules = () => {
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
      <h1 className="font-bold mb-6 lg:mb-8 text-[32px]">Participation Mechanics</h1>
      <div className="mt-8 lg:hidden -mx-1">
        <Slider {...sliderSettings}>
          {list.map((el, i) => (
            <div className="px-1">
              <div className="w-[70px] font-mono h-[70px] mb-6 border-[1px] border-gray-700 text-[20px] text-[#3AFFA3] rounded-full flex items-center justify-center">
                0{i + 1}
              </div>
              <span className="text-2xl font-bold mb-2 block">{el.label}</span>
              <span className="text-body-m opacity-60 max-w-[80%] block">{el.text}</span>
            </div>
          ))}
        </Slider>
      </div>
      <div className="hidden lg:grid grid-cols-4 gap-5">
        <div>
          <div className="font-mono w-[70px] h-[70px] mb-6 border-[1px] border-gray-700 text-[20px] text-[#3AFFA3] rounded-full flex items-center justify-center">
            01
          </div>
          <span className="text-2xl font-bold mb-2 block">Enter the Presale</span>
          <span className="text-body-m opacity-60 max-w-[290px] block">
            Contribute between 1–200 $SOL into a <b>fully audited, open-source smart contract</b>. Your funds power the launch and are automatically allocated with no manual interference. After the presale, tokens are distributed back to participants in a <b>predefined order</b>, determined by a <b>verifiable on-chain draw mechanism</b> designed for fairness and transparency.
          </span>
        </div>
        <div>
          <div className="font-mono w-[70px] h-[70px] mb-6 border-[1px] border-gray-700 text-[20px] text-[#3AFFA3] rounded-full flex items-center justify-center">
            02
          </div>
          <span className="text-2xl font-bold mb-2 block">Contribute More, Win Extra</span>
          <span className="text-body-m opacity-60 max-w-[290px] block">
            If you’re among the <b>top 10% of contributors</b>, you’ll qualify for an extra token reward, randomly selected and starting from <b>0.1%</b> of the project supply. Each project defines its own reward, and the percentages are shuffled.
          </span>
        </div>
        <div>
          <div className="font-mono w-[70px] h-[70px] mb-6 border-[1px] border-gray-700 text-[20px] text-[#3AFFA3] rounded-full flex items-center justify-center">
            03
          </div>
          <span className="text-2xl font-bold mb-2 block">Watch the draw, live and public</span>
          <span className="text-body-m opacity-60 max-w-[290px] block">
            Once the presale ends, the system <b>shuffles all wallets on-chain</b> and reveals the order in real time. A dashboard shows wallet by wallet who gets their tokens next. If you’re early in the list - you’re first to hit the market.
          </span>
        </div>
        <div>
          <div className="font-mono w-[70px] h-[70px] mb-6 border-[1px] border-gray-700 text-[20px] text-[#3AFFA3] rounded-full flex items-center justify-center">
            04
          </div>
          <span className="text-2xl font-bold mb-2 block">Allocation Breakdown</span>
          <span className="text-body-m opacity-60 max-w-[290px] block">
            90% of tokens go to Presale participants, 8% are locked as liquidity, and 2% stay with the project.
            <br/>
            <br/>
            <b>From the $SOL raised</b>: 75% is used to seed liquidity at ~3× presale price, 15% goes to an on-chain buyback wallet, and 10% to the team.
            <br/>
            <br/>
            There is no vesting and no manual steps. Everything runs through automated, on-chain distribution. Early wallets receive tokens first, with around 20% likely to secure <b>instant profit</b>.
          </span>
        </div>
      </div>
    </section>
  )
};

export default Rules;
