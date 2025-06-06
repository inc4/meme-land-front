import { type RouteConfig, index, layout, route } from "@react-router/dev/routes";
import { HOME_PAGE, PRESALE_PAGE } from "./utils/constants";

export default [
    layout("routes/pages/login/layout.tsx", [
        index("routes/pages/login/index.tsx"),
    ]),
    layout("routes/pages/layout.tsx", [
        route(HOME_PAGE, "routes/pages/home.tsx"),
        route(PRESALE_PAGE, "routes/pages/presale/index.tsx"),
    ]),
] satisfies RouteConfig;
