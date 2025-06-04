import { type RouteConfig, index, layout, route } from "@react-router/dev/routes";

export default [
    layout("routes/pages/layout.tsx", [
        index("routes/pages/home.tsx"),
        route("/presale", "routes/pages/presale/index.tsx"),
    ]),
] satisfies RouteConfig;
