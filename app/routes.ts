import { type RouteConfig, index, layout, route } from "@react-router/dev/routes";
import {
    CONNECT_PAGE,
    FEES_PAGE,
    LEADERBOARD_PAGE,
    PRESALE_PAGE,
    PRIVACY_NOTICE_PAGE,
    REFERRAL_PAGE, RULES_PAGE,
    TERMS_OF_USE_PAGE
} from "./utils/constants";

export default [
    layout("routes/pages/login/layout.tsx", [
        route(CONNECT_PAGE, "routes/pages/login/index.tsx"),
    ]),
    layout("routes/pages/layout.tsx", [
        index("routes/pages/home.tsx"),
        route(PRESALE_PAGE, "routes/pages/presale/index.tsx"),
        route(REFERRAL_PAGE, "routes/pages/referral/index.tsx"),
        route(LEADERBOARD_PAGE, "routes/pages/leaderboard/index.tsx"),
        route(PRIVACY_NOTICE_PAGE, "routes/pages/privacy.tsx"),
        route(TERMS_OF_USE_PAGE, "routes/pages/use-terms.tsx"),
        route(FEES_PAGE, "routes/pages/fees.tsx"),
        route(RULES_PAGE, "routes/pages/rules.tsx"),
    ]),
] satisfies RouteConfig;
