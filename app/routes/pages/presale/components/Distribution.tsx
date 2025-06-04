const list = [
  {
    text: 'Funds to LP  (liquidity pool)',
    percent: 75,
    color: '#3AFFA3',
  },
  {
    text: 'Buyback Reserve',
    percent: 15,
    color: '#FFA544',
  },
  {
    text: 'Team',
    percent: 10,
    color: '#E25A57',
  },
  {
    text: 'Liquidity at listing',
    percent: 75,
    color: '#9D85FF',
  },
]

const Distribution = () => {
  return (
    <section>
      <h2 className="text-[32px] font-bold">Funds Distribution & Use</h2>
      <div className="grid grid-cols-1 gap-3 mt-6 lg:grid-cols-2">
        <div className="grid grid-cols-2 gap-2 p-5 rounded-[14px] bg-[#0F1113]">
          <div className="bg-[#080808] rounded-xl border-[1px] border-[#1B1B1B] flex flex-col items-center pt-14 pb-6 lg:pt-[100px] lg:pb-[80px] lg:justify-between">
            <span className="text-2xl lg:text-[44px]">8.00%</span>
            <span className="text-sm text-center mt-8 block lg:text-[20px]">
              Tokens{" "}
              <br/>
              Sent to LP
            </span>
          </div>
          <div className="bg-[#080808] rounded-xl border-[1px] border-[#1B1B1B] flex flex-col items-center pt-14 pb-6 lg:pt-[100px] lg:pb-[80px] lg:justify-between">
            <span className="text-2xl lg:text-[44px] text-[#3AFFA3]">1.10$</span>
            <span className="text-sm text-center mt-8 block lg:text-[20px]">
              Price Support <br/> Level
            </span>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          {list.map((el) => (
            <div key={el.text} className="px-5 py-6 rounded-[14px] bg-[#0F1113]">
              <div className="text-[20px] font-bold flex items-center justify-between mb-4">
                <span>{el.text}</span>
                <span>{el.percent}%</span>
              </div>
              <div className="w-full h-2 bg-[#FFFFFF26] rounded-[77px]">
                <div style={{background: el.color, width: el.percent + '%'}} className="h-full rounded-[77px]" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
};

export default Distribution;
