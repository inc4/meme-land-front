import DexLogo from "~/components/Icons/DexLogo";
import Telegram from "~/components/Icons/Telegram";
import X from "~/components/Icons/X";

const list = [
  { project: 'Project 1', descr: 'The first Meme in Game', ath: '%2,000.00' },
  { project: 'Project 2', descr: 'The first Meme in Game', ath: '%2,000.00' },
  { project: 'Project 3', descr: 'The first Meme in Game', ath: '%2,000.00' },
  { project: 'Project 4', descr: 'The first Meme in Game', ath: '%2,000.00' },
  { project: 'Project 5', descr: 'The first Meme in Game', ath: '%2,000.00' },
  { project: 'Project 6', descr: 'The first Meme in Game', ath: '%2,000.00' },
]

const CompleteSales = () => {
  return (
    <section>
      <h3 className="text-[32px] mb-8">Completed Sales</h3>
      <div className="rounded-lg overflow-auto border-1 border-[#1A1A1A]">
        <div className="grid grid-cols-[167px_320px_1fr_1fr] min-w-[900px] gap-6 text-sm opacity-50 uppercase p-3">
          <span>Projects</span>
          <span>Description</span>
          <span className="text-right">All Time High</span>
          <span className="text-right">Links</span>
        </div>
        {list.map((el) => (
          <div className="grid grid-cols-[167px_320px_1fr_1fr] min-w-[900px] gap-6 p-3 bg-[#0D0D0D]" key={el.project}>
            <div className="flex items-center">
              <div className="w-8 h-9 mr-3 rounded-[6px] bg-[#C5C5C5]" />
              <span className="text-[20px] font-bold">{el.project}</span>
            </div>
            <span className="font-medium">{el.descr}</span>
            <span className="text-[#3AFFA3] font-medium text-right">{el.ath}</span>
            <div className="flex gap-[14px] items-center justify-end">
              <a href="#">
                <DexLogo />
              </a>
              <a href="#">
                <Telegram />
              </a>
              <a href="#">
                <X />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
};

export default CompleteSales;
