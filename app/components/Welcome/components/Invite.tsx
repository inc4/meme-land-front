import clsx from "clsx";
import CopyIcon from "~/components/Icons/Copy";
import inviteIcon from "~/assets/imgs/invite.png";
import checkIcon from '~/assets/svg/check.svg';
import useCopy from "~/hooks/useCopy";
import useWalletByAddress from "~/hooks/useWalletByAddress";

const Invite = () => {
  const { data } = useWalletByAddress();
  const { isCopied, copy } = useCopy();

  const handleCopy = () => {
    if (!data?.inviteCode) return;

    copy(data.inviteCode);
  }

  return (
    <section className="grid grid-cols-1 gap-4 lg:grid-cols-2">
      <div className="bg-linear-to-b from-[#0F1113] to-[#0B983834] relative p-5 rounded-[14px] overflow-hidden">
        <h1 className="font-bold">Invite Friends</h1>
        <span className="text-body-m font-medium opacity-60">
          You’ve invited 0 friends! Rewards are coming soon...
        </span>
        <span className="absolute text-[#3AFFA3] text-[32px] right-5 top-5 font-mono">0</span>
        <div className="text-[#3AFFA3] mt-6 font-semibold text-body-m">YOUR REFERRAL CODE</div>
        <div className="flex items-center justify-between py-[14px] px-4 bg-[#090909] border-[1px] border-[#FFFFFF21] rounded-[6px] mt-[10px]">
          <span className="font-bold text-[20px] uppercase">{data?.inviteCode || '---'}</span>
          {isCopied ? (
              <img src={checkIcon} alt="Checkmark" className="shrink-0 w-[27px]" />
            ) : (
              <CopyIcon
                onClick={handleCopy}
                className={clsx(
                  "shrink-0 cursor-pointer hover:[&_path]:fill-primary",
                  "[&_path]:duration-300 [&_path]:ease-in-out",
                )}
              />
            )}
        </div>
        <img src={inviteIcon} alt="invite icon" className="mx-auto w-full -mb-5" />
      </div>
      <div className="relative p-5 rounded-[14px] bg-[#0F1113]">
        <div className="flex flex-col justify-center items-center text-black absolute bg-[url('app/assets/svg/star.svg')] bg-no-repeat w-[105px] h-[105px] -rotate-[10deg] top-[43px] -right-[10px] bg-contain">
          <span className="text-body-l font-mono font-medium">+10%</span>
          <span className="text-[10px] font-semibold">Allocation</span>
        </div>
        <h3 className="text-[24px] font-bold lg:text-[38px] mb-9">Complete Your Profile</h3>
        <ul className="flex flex-col gap-6">
          <li className="flex gap-4">
            <span className="text-[20px] font-bold">01.</span>
            <div className="flex flex-col gap-1 lg:gap-[10px]">
              <span className="text-[20px] font-bold">
                Invite 1 Friend
              </span>
              <span className="text-body-m opacity-60 font-medium">
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
              <span className="text-body-m opacity-60 font-medium">
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
              <span className="text-body-m opacity-60 font-medium">
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
              <span className="text-body-m opacity-60 font-medium">
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
