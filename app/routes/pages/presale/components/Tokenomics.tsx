import GaugeChart from "~/components/GaugeChart";
import type {TCampaign} from "~/types";
import useCopy from "~/hooks/useCopy";


const Tokenomics = ({campaign, isLoading}: {campaign: TCampaign|undefined, isLoading:boolean}) => {
  const list = [
    { name: 'Public Provision (Presale)', percent: campaign?.publicProvision.$numberDecimal, color: '#FCD10D' },
    { name: 'Liquidity', percent: campaign?.liquidity.$numberDecimal, color: '#F24BE7' },
    { name: 'Team', percent: campaign?.pieChartTeam.$numberDecimal, color: '#A8FF44' },
    { name: 'Marketing', percent: campaign?.marketing.$numberDecimal, color: '#0D86FC' },
  ];
  return (
    <section>
      <h1 className="mb-3 font-bold tracking-[-3%]">Tokenomics</h1>
      <span className="opacity-60 font-medium text-body-m">No vesting, all tokens are 100% released and mintedduring TGE</span>
      <div className="grid grid-cols-1 gap-3 lg:grid-cols-[437px_1fr] lg:gap-[14px] mt-6">
        <div className="bg-[#0F1113] rounded-[14px] p-5 lg:pb-0">
          <span className="text-h2 mb-2 block font-bold">Details</span>
          <span className="text-body-m font-medium opacity-60 max-w-[293px] block">
            No vesting, all tokens are 100% released and mintedduring TGE
          </span>
          <div className="flex flex-col gap-2 mt-6">
            <div className="bg-[#080808] p-3 rounded-xl">
              <span className="font-medium text-body-m block opacity-60">Total Groups</span>
              <span className="font-bold text-h2 font-mono">4 groups</span>
            </div>
            <div className="bg-[#080808] p-3 rounded-xl">
              <span className="font-medium text-body-m block opacity-60">Vesting / Cliff / Lock</span>
              <span className="font-bold text-h2 font-mono">NO</span>
            </div>
            <div className="bg-[#080808] p-3 rounded-xl">
              <span className="font-medium text-body-m block opacity-60">Circulating Supply at TGE</span>
              <span className="font-bold text-h2 font-mono">10.0 B</span>
            </div>
            <div className="bg-[#080808] p-3 rounded-xl">
              <span className="font-medium text-body-m block opacity-60">Maximum tokens supply</span>
              <span className="font-bold text-h2 font-mono">10.0 B</span>
            </div>
          </div>
        </div>
        <div className="bg-[#0F1113] rounded-[14px] p-5 lg:pb-0">
          <span className="text-2xl font-bold">Pie Chart</span>
          <span className="text-body-m opacity-60 font-medium mb-2 mt-2 max-w-[293px] block">
            No vesting, all tokens are 100% released and mintedduring TGE
          </span>
          <div className="flex flex-col-reverse lg:grid lg:grid-cols-2 items-center">
            <div className="flex flex-col gap-2 w-full">
              {list.map((el) => (
                <div key={el.name} className="bg-[#070A0C] rounded-xl p-3 relative">
                  <span className="text-[14px] font-semibold opacity-60 block">{el.name}</span>
                  <span style={{color: el.color}} className="text-2xl font-mono">{isLoading ? '-' : el.percent}%</span>
                  <div style={{background: el.color, boxShadow: `0px 3px 8.7px 0px ${el.color}40`}} className="absolute w-[10px] h-[10px] rounded-full right-3 top-3"/>
                </div>
              ))}
            </div>
            {campaign && (
              <GaugeChart data={list} />
            )}
          </div>
        </div>
      </div>
    </section>
  )
};

export default Tokenomics;
