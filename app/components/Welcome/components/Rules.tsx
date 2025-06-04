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
      <h3 className="font-bold text-[32px]">Rules</h3>
      <div className="mt-8 lg:hidden -mx-1">
        <Slider {...sliderSettings}>
          {list.map((el, i) => (
            <div className="px-1">
              <div className="w-[70px] h-[70px] mb-6 border-[1px] border-gray-700 text-[20px] text-[#3AFFA3] rounded-full flex items-center justify-center">
                0{i + 1}
              </div>
              <span className="text-2xl font-bold mb-2 block">{el.label}</span>
              <span className="text-sm opacity-60">{el.text}</span>
            </div>
          ))}
        </Slider>
      </div>
      <div className="hidden lg:grid grid-cols-4 gap-4">
        {list.map((el, i) => (
          <div>
            <div
              className="w-[70px] h-[70px] mb-6 border-[1px] border-gray-700 text-[20px] text-[#3AFFA3] rounded-full flex items-center justify-center">
              0{i + 1}
            </div>
            <span className="text-2xl font-bold mb-2 block">{el.label}</span>
            <span className="text-sm opacity-60">{el.text}</span>
          </div>
        ))}
      </div>
    </section>
  )
};

export default Rules;
