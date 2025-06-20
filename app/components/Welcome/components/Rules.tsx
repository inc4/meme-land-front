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
      <h1 className="font-bold mb-6 lg:mb-8">Rules</h1>
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
      <div className="hidden lg:grid grid-cols-4 gap-4">
        {list.map((el, i) => (
          <div>
            <div
              className="font-mono w-[70px] h-[70px] mb-6 border-[1px] border-gray-700 text-[20px] text-[#3AFFA3] rounded-full flex items-center justify-center">
              0{i + 1}
            </div>
            <span className="text-2xl font-bold mb-2 block">{el.label}</span>
            <span className="text-body-m opacity-60 max-w-[290px] block">{el.text}</span>
          </div>
        ))}
      </div>
    </section>
  )
};

export default Rules;
