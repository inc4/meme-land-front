import clsx from "clsx";
import { Link, useLocation } from "react-router";
import { useMedia } from 'react-use';

import * as Constants from "~/utils/constants";
import { generateBreadcrumbItems } from "~/utils/other";
import type { TRouteConfig } from "~/types";
import arrowIcon from "~/assets/svg/arrow.svg";

const routeConfig: TRouteConfig[] = [
  { path: Constants.HOME_PAGE, label: "All Project" },
  { path: Constants.TERMS_OF_USE_PAGE, label: "Terms Of Use" },
  { path: Constants.PRIVACY_NOTICE_PAGE, label: "Privacy Notice" },
  { path: Constants.REFERRAL_PAGE, label: "Referral" },
  { path: Constants.LEADERBOARD_PAGE, label: "Leaderboard" },
  { path: Constants.PRESALE_PAGE, label: ({ [Constants.PRESALE_PAGE_SEGMENT]: id }) => decodeURIComponent(id) },
];

const Breadcrumbs = () => {
  const isLg = useMedia('(min-width: 1024px)');
  const { pathname } = useLocation();

  const pages = [
    { label: 'All Projects', href: Constants.HOME_PAGE },
    ...generateBreadcrumbItems(pathname, routeConfig)
  ];

  const lastPage = pages[pages.length - 1];
  const preLastPage = pages[pages.length - 2];

  return (
    <nav aria-label="Breadcrumb" className="flex px-4 mb-[26px] lg:mb-[33px]">
      {isLg ? (
        <ol role="list" className="flex items-center gap-[8px]">
          {pages.map((page, index, arr) => {
            const isLast = index === arr.length - 1;
            const isCurrent = page.href === pathname;

            return (
              <li key={page.href}>
                <div className="flex items-center gap-[3px] text-body-m font-medium text-beige-600">
                  <Link
                    to={page.href}
                    aria-current={isCurrent ? 'page' : undefined}
                    className={clsx(isCurrent && "text-white", "hover:text-white")}
                  >
                    {page.label}
                  </Link>
                  {!isLast && <span>/</span>}
                </div>
              </li>
            )
          })}
        </ol>
      ) : (
        <Link
          to={preLastPage.href}
          className="flex justify-center items-center gap-[10px] text-body-m font-medium text-white"
        >
          <img src={arrowIcon} alt="Arrow" />
          <span>{lastPage.label}</span>
        </Link>
      )}
    </nav>
  );
};

export default Breadcrumbs;
