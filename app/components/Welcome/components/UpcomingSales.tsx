import icon from "../test-icon.svg";
import Countdown from "~/components/Countdown";

const UpcomingSales = () => {
  return (
    <section className="mt-6 lg:mt-0">
      <h1 className="font-bold">More Upcoming Sales</h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mt-6 lg:mt-8">
        <div className="bg-[#0F1113] rounded-[14px] py-4 px-5 flex flex-col min-h-[502px]">
          <div className="bg-[url('app/components/Welcome/zash.png')] h-[222px] bg-cover bg-center rounded-xl relative mb-[52px]">
            <img src={icon} alt="" className="absolute left-4 w-[70px] h-[70px] rounded-[10px] -bottom-8"/>
          </div>
          <span className="text-white font-bold text-2xl">Zesh AI Layer</span>
          <span className="text-white text-body-m opacity-60 mb-4">ZAI</span>
          <span className="text-white text-body-m opacity-60">Zesh AI Layer is an AI Layer on SUI, with 1.6M+ users.For a chance to participate in this crypto IDO please check the pre-sale details below.</span>
          <span className="text-white my-3">Presale Will be live in:</span>
          <Countdown />
        </div>
        {[1, 2].map(() => (
          <div className="bg-[#0F1113] rounded-[14px] py-4 px-5 min-h-[502px]">
            <div className="h-[222px] w-full bg-[#161B1F] relative flex items-center justify-center">
              <span className="uppercase text-2xl font-bold text-[#90C5EF] opacity-30">coming soon</span>
              <div className="absolute left-8 w-[70px] h-[70px] rounded-[10px] -bottom-8 border-1 border-[#FFFFFF1A] bg-[#161B1F]"/>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
};

export default UpcomingSales;
