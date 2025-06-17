import { matchPath } from "react-router";
import type { TRouteConfig } from "~/types";

export const shortenAddress = (
  address = '',
  leftSlice = 4,
  rightSlice = 7,
) => {
  if (address.length < (leftSlice + rightSlice)) {
    return address;
  }

  return `${address.slice(0, leftSlice)}...${address.slice(-rightSlice)}`;
};

export const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

export const startAsyncPolling = (
  asyncFn: () => Promise<void>,
  intervalMs: number
): () => void => {
  let isRunning = false;

  const intervalId = setInterval(async () => {
    if (isRunning) return;

    isRunning = true;

    try {
      await asyncFn();
    } catch (error) {
      console.error("Error during async request:", error);
    } finally {
      isRunning = false;
    }

  }, intervalMs);

  // Return a function to stop the interval
  return () => clearInterval(intervalId);
}

export const generateBreadcrumbItems = (
  pathname: string,
  routeMap: TRouteConfig[]
) => {
  const segments = pathname.split("/").filter(Boolean);
  const breadcrumbItems = [];
  let accumulatedPath = "";

  for (let i = 0; i < segments.length; i++) {
    accumulatedPath += "/" + segments[i];

    const matchedRoute = routeMap.find((route) =>
      matchPath({ path: route.path, end: true }, accumulatedPath)
    );

    if (matchedRoute) {
      const match = matchPath({ path: matchedRoute.path, end: true }, accumulatedPath);
      const params = match?.params || {};

      const label =
        typeof matchedRoute.label === "function"
          // @ts-ignore
          ? matchedRoute.label(params)
          : matchedRoute.label;

      breadcrumbItems.push({
        label,
        href: accumulatedPath,
      });
    }
  }

  return breadcrumbItems;
}