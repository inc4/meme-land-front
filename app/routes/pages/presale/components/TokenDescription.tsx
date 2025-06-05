import beercoin from "~/assets/imgs/beercoin.png"
import CopyIcon from "~/components/Icons/Copy";

const TokenDescription = () => (
  <section className="bg-[#0F1113] w-full p-5 rounded-[14px]">
    <img src={beercoin} className="w-full inner-shadow-presale mb-6 rounded-[14px]" alt=""/>
    <div className="flex flex-col-reverse gap-6 rounded-[14px] lg:grid lg:grid-cols-2 lg:justify-between">
      <div className="token-description">
        <h3>
          Beercoin is a player-powered gamified ecosystem fueled by memes and good times.
        </h3>
        <p>
          A Web3-native world where community, fun, and rewards come together over a cold one.
        </p>
        <p>Beercoin is creating a social-finance ecosystem built on vibes, community-driven actions, and a meme-fueled
          economy. Designed to blur the lines between entertainment and token utility, Beercoin combines staking,
          quests, and rewards into one unforgettable, beer-powered journey. It’s not just a token — it’s a movement with
          hops.</p>
      </div>
      <div className="#14181B p-5 rounded-[14px] bg-[#14181B] max-w-[484px] ml-auto w-full">
        <h3 className="font-bold text-[20px] mb-[10px]">Share this project with friends</h3>
        <span className="text-[14px] font-semibold">Copy link</span>
        <div
          className="flex items-center justify-between py-[14px] px-4 bg-[#090909] border-[1px] border-[#FFFFFF21] rounded-[6px] my-2">
          <span className="font-bold text-[20px]">share.link/1231231239</span>
          <CopyIcon/>
        </div>
        <span>Or Share in Socials:</span>
      </div>
    </div>
  </section>
);

export default TokenDescription;