import beercoin from "~/assets/imgs/beercoin.png"
import CopyIcon from "~/components/Icons/Copy";
import {formatPinataUrl} from "~/utils/formatPinataUrl";
import type {TCampaign} from "~/types";
import checkIcon from "~/assets/svg/check.svg";
import clsx from "clsx";
import useCopy from "~/hooks/useCopy";

const TokenDescription = ({campaign}: {campaign: TCampaign}) => {
  const { isCopied, copy } = useCopy();

  const handleCopy = () => {
    copy(window.location.href);
  };

  return (
    <section className="bg-[#0F1113] w-full p-5 rounded-[14px]">
      <img
        src={formatPinataUrl(campaign.coverImage)}
        className="w-full inner-shadow-presale mb-6 rounded-[14px] max-h-[659px] object-cover"
        alt="cover image"
      />
      <div className="flex flex-col-reverse gap-6 rounded-[14px] lg:grid lg:grid-cols-2 lg:justify-between">
        <div className="token-description">
          {campaign.bigDescriptionHeader1 && (
            <h2>
              {campaign.bigDescriptionHeader1}
            </h2>
          )}
          {campaign.bigDescriptionText1 && (
            <p>
              {campaign.bigDescriptionText1}
            </p>
          )}
          {campaign.bigDescriptionHeader2 && (
            <h3 className="mt-5">
              {campaign.bigDescriptionHeader2}
            </h3>
          )}
          {campaign.bigDescriptionText2 && (
            <p>
              {campaign.bigDescriptionText2}
            </p>
          )}
          <p>
            A Web3-native world where community, fun, and rewards come together over a cold one.
          </p>
          <p>Beercoin is creating a social-finance ecosystem built on vibes, community-driven actions, and a meme-fueled
            economy. Designed to blur the lines between entertainment and token utility, Beercoin combines staking,
            quests, and rewards into one unforgettable, beer-powered journey. It’s not just a token — it’s a movement with
            hops.</p>
        </div>
        <div className="#14181B p-5 rounded-[14px] bg-[#14181B] lg:max-w-[484px] ml-auto w-full">
          <h3 className="font-bold mb-[10px]">Share this project with friends</h3>
          <span className="text-[14px] font-semibold">Copy link</span>
          <div className="flex items-center justify-between py-[14px] px-4 bg-[#090909] border-[1px] border-[#FFFFFF21] rounded-[6px] my-2">
            <span className="font-bold text-[20px]">{window.location.href}</span>
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
          <span>Or Share in Socials:</span>
        </div>
      </div>
    </section>
  );
}

export default TokenDescription;