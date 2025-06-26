import Countdown from "~/components/Countdown";
import useCampaigns from "~/hooks/useCampaigns";
import {formatPinataUrl} from "~/utils/formatPinataUrl";
import {NavLink} from "react-router";

const UpcomingSales = () => {
  const {data, isLoading} = useCampaigns({currentStatus: 'upcoming'}, 3);

  const sortByPresaleStartUTC = (data) => {
    return data.sort((a, b) => {
      return new Date(a.presaleStartUTC).getTime() - new Date(b.presaleStartUTC).getTime();
    });
  };

  return (
    <section className="mt-6 lg:mt-0">
      <h1 className="font-bold">More Upcoming Sales</h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mt-6 lg:mt-8">
        {isLoading ? (
          Array(3).fill('').map(() => (
            <div className="rounded-[14px] animate-pulse bg-neutral-900 h-[546px]" />
          ))
        ) : (
          <>
            {sortByPresaleStartUTC(data?.page.data || []).map((el) => (
              <NavLink
                to={`/presale/${el.campaignId}`}
                className="bg-[#0F1113] rounded-[14px] py-4 px-5 flex flex-col cursor-pointer min-h-[502px] border-[1px] border-transparent hover:border-gray-600 transition"
              >
                <div style={{backgroundImage: `url("${formatPinataUrl(el.projectCoverImage)}"`}}
                     className="h-[222px] bg-cover bg-center rounded-xl relative mb-[52px]">
                  <img src={formatPinataUrl(el.tokenImage)} alt="" className="absolute left-4 w-[70px] h-[70px] rounded-[10px] -bottom-8"/>
                </div>
                <span className="text-white font-bold text-2xl">{el.tokenName}</span>
                <span className="text-white text-body-m opacity-60 mb-4">{el.tokenSymbol}</span>
                <span className="text-white text-body-m opacity-60">{el.shortDescription1}</span>
                <span className="text-white my-3 text-body-l font-semibold mt-auto">Presale Will be live in:</span>
                <Countdown timestamp={new Date(el.presaleStartUTC).getTime()}/>
              </NavLink>
            ))}
            {Array(3 - (data?.page.size || 0)).fill('').map(() => (
              <div className="bg-[#0F1113] rounded-[14px] py-4 px-5 min-h-[502px]">
                <div className="h-[222px] w-full bg-[#161B1F] relative flex items-center justify-center">
                  <span className="uppercase text-2xl font-bold text-[#90C5EF] opacity-30">coming soon</span>
                  <div
                    className="absolute left-8 w-[70px] h-[70px] rounded-[10px] -bottom-8 border-2 border-[#FFFFFF1A] bg-[#161B1F]"/>
                </div>
              </div>
            ))}
          </>
        )}
      </div>
    </section>
  )
};

export default UpcomingSales;
