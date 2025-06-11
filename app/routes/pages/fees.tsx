const Fees = () => (
  <div className="static-page">
    <h1>Fees</h1>
    <h3>The following are fees charged by the pump.fun platform when you use the pump.fun platform:</h3>
    <div className="rounded-lg border-1 border-[#1A1A1A]">
      <div className="grid grid-cols-2 border-b-1 border-b-[#1A1A1A] py-[22px] px-[44px] bg-[#000000]">
        <span className="font-bold">Action</span>
        <span className="font-bold">Fee</span>
      </div>
      <div className="grid grid-cols-2 border-b-1 border-b-[#1A1A1A] py-[22px] px-[44px]">
        <span className="font-bold">Create a coin</span>
        <span className="font-medium ">0 SOL</span>
      </div>
      <div className="grid grid-cols-2 border-b-1 border-b-[#1A1A1A] py-[22px] px-[44px]">
        <span className="font-bold">Buy or sell a coin while on the bonding curve</span>
        <span className="font-medium ">1% of the total purchase or sale price for each trade (in SOL)</span>
      </div>
      <div className="grid grid-cols-2 border-b-1 border-b-[#1A1A1A] py-[22px] px-[44px]">
        <span className="font-bold">When a coin graduates from the pump.fun platform to PumpSwap*</span>
        <span className="font-medium ">The first Meme in Game</span>
      </div>
      <div className="grid grid-cols-2 border-b-1 border-b-[#1A1A1A] py-[22px] px-[44px]">
        <span className="font-bold">PumpSwap trade</span>
        <span className="font-medium ">0.3%</span>
      </div>
    </div>
    <p>
      *This is a fixed fee of 0.015 SOL that includes network fees even though these may vary from time to time. This 0.015 SOL is taken from the liquidity of the coin and does not require the user to pay this as an additional amount.
      <br/>
      <br/>
      Note that none of the pump.fun frontend services (the pump.fun web app, pump.fun/advanced, and the pump.fun mobile app) charge any fees in addition to those above. If you access the pump.fun platform or smart contracts via another interface or platform, you may incur additional fees charged by those interfaces or platforms.
      <br/>
      <br/>
      On every trade the original creator of the coin receives 0.05% of all trade fees. This is applicable for all coins that were present on the bonding curve or PumpSwap from the date of May 13th 2025.
    </p>
  </div>
);

export default Fees;
