import { Outlet, Link } from "react-router";
import clsx from "clsx";

import Telegram from "~/components/Icons/Telegram";
import X from "~/components/Icons/X";
import logoIcon from "~/assets/svg/logo.svg";

import { PRIVACY_NOTICE_PAGE, TERMS_OF_USE_PAGE } from "~/utils/constants";
import getConfig from "~/config";

const { X_LINK, TG_LINK } = getConfig();

const LoginLayout = () => {
  return (
    <div className={clsx(
      "flex flex-col justify-between min-h-dvh h-full",
      "pt-[45px] pb-[28px] px-[16px] bg-gray-900",
      "lg:pt-[85px] lg:pb-[60px] lg:px-[40px]"
    )}>

      <header>
        <img className="m-auto" src={logoIcon} alt="Logo" />
      </header>

      <Outlet />

      <footer className="flex items-center justify-center gap-[8px]">

        <Link
          to={PRIVACY_NOTICE_PAGE}
          className="pr-[8px] text-beige-100 text-[14px] border-r-[1px] border-beige-600 hover:text-primary"
        >
          Privacy Policy
        </Link>

        <Link
          to={TERMS_OF_USE_PAGE}
          className="pr-[8px] text-beige-100 text-[14px] border-r-[1px] border-beige-600 hover:text-primary"
        >
          Terms & Condition
        </Link>

        <Link to={X_LINK} className="hover:[&_path]:fill-primary">
          <X className="" />
        </Link>

        <Link to={TG_LINK} className="hover:[&_path]:fill-primary">
          <Telegram />
        </Link>

      </footer>

    </div>
  )
};

export default LoginLayout;
