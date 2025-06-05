import inviteIcon from "~/assets/imgs/invite.png";
import starIcon from "~/assets/svg/star.svg";
import CopyIcon from "~/components/Icons/Copy";

const Invite = () => {
  return (
    <section className="grid grid-cols-1 gap-4 lg:grid-cols-2">
      <div className="bg-linear-to-b from-[#0F1113] to-[#0B983834] relative p-5 rounded-[14px] overflow-hidden">
        <h3 className="text-[32px] font-bold lg:text-[38px]">Invite Friends</h3>
        <span className="text-sm font-medium opacity-60">
          You’ve invited 0 friends! Rewards are coming soon...
        </span>
        <span className="absolute text-[#3AFFA3] text-[32px] right-5 top-5">0</span>
        <div className="text-[#3AFFA3] mt-6 font-semibold">YOUR REFERRAL CODE</div>
        <div className="flex items-center justify-between py-[14px] px-4 bg-[#090909] border-[1px] border-[#FFFFFF21] rounded-[6px] mt-[10px]">
          <span className="font-bold text-[20px]">MemeLand/999a123</span>
          <CopyIcon />
        </div>
        <img src={inviteIcon} alt="invite icon" className="mx-auto w-full -mb-5" />
      </div>
      <div className="relative p-5 rounded-[14px] bg-[#0F1113]">
        <div className="flex flex-col justify-center items-center text-black absolute bg-[url('app/assets/svg/star.svg')] bg-no-repeat w-[105px] h-[105px] -rotate-[10deg] top-[43px] -right-[10px] bg-contain">
          <span className="font-medium">+10%</span>
          <span className="text-[10px] font-semibold">Allocation</span>
        </div>
        <h3 className="text-2xl font-bold lg:text-[38px] mb-9">Complete Your Profile</h3>
        <ul className="flex flex-col gap-6">
          <li className="flex gap-4">
            <span className="text-[20px] font-bold">01.</span>
            <div className="flex flex-col gap-1 lg:gap-[10px]">
              <span className="text-[20px] font-bold">
                Invite 1 Friend
              </span>
              <span className="text-sm opacity-60 font-medium">
                Create Invite code
              </span>
            </div>
          </li>
          <li className="flex gap-4">
            <span className="text-[20px] font-bold">02.</span>
            <div className="flex flex-col gap-1 lg:gap-[10px]">
              <span className="text-[20px] font-bold">
                Follow us on Twitter
              </span>
              <span className="text-sm opacity-60 font-medium">
                Join to Offial Twitter account
              </span>
            </div>
          </li>
          <li className="flex gap-4">
            <span className="text-[20px] font-bold">03.</span>
            <div className="flex flex-col gap-1 lg:gap-[10px]">
              <span className="text-[20px] font-bold">
                Follow us in Telegram
              </span>
              <span className="text-sm opacity-60 font-medium">
                Join to Official Telegram group
              </span>
            </div>
          </li>
          <li className="flex gap-4">
            <span className="text-[20px] font-bold">04.</span>
            <div className="flex flex-col gap-1 lg:gap-[10px]">
              <span className="text-[20px] font-bold">
                Join to First Presale
              </span>
              <span className="text-sm opacity-60 font-medium">
                Select Presale and Join
              </span>
            </div>
          </li>
        </ul>
      </div>
    </section>
  )
};

export default Invite;
