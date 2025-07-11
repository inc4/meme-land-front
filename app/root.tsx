import {
  isRouteErrorResponse,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "react-router";
import SolanaProvider from "~/components/SolanaProvider";
import RouteGuard from "~/components/RouteGuard";
import type { Route } from "./+types/root";
import "./app.css";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'react-toastify/dist/ReactToastify.css';
import {createPortal} from "react-dom";
import {ToastContainer} from "react-toastify";
import {useRef} from "react";

export const links: Route.LinksFunction = () => [
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=DM+Mono:ital,wght@0,300;0,400;0,500;1,300;1,400;1,500&family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&display=swap",
  },
];

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Memedrop App" },
    { name: "description", content: "Welcome to Memedrop App!" },
  ];
}

export function Layout({ children }: { children: React.ReactNode }) {
  const ref = useRef(null);

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body className="min-h-dvh h-full">
        {children}
        <ScrollRestoration />
        <Scripts />
        <div className="z-[999999999] relative" ref={ref}/>
        <ToasterWrapper wrapperRef={ref}/>
      </body>
    </html>
  );
}

const ToasterWrapper = ({wrapperRef}) => {
  if (!wrapperRef.current) return null;

  return createPortal(
    <ToastContainer
      position="bottom-right"
      autoClose={3000}
      hideProgressBar={true}
      newestOnTop={false}
      closeOnClick
      pauseOnHover
      draggable
      theme="dark" // also "dark" or "colored"
      closeButton={false}
    />,
    wrapperRef.current
  )
}

export default function App() {
  return (
    <SolanaProvider>
      <RouteGuard>
        <Outlet />
      </RouteGuard>
    </SolanaProvider>
  );
}

export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
  let message = "Oops!";
  let details = "An unexpected error occurred.";
  let stack: string | undefined;

  if (isRouteErrorResponse(error)) {
    message = error.status === 404 ? "404" : "Error";
    details =
      error.status === 404
        ? "The requested page could not be found."
        : error.statusText || details;
  } else if (import.meta.env.DEV && error && error instanceof Error) {
    details = error.message;
    stack = error.stack;
  }

  return (
    <main className="pt-16 p-4 container mx-auto">
      <h1>{message}</h1>
      <p>{details}</p>
      {stack && (
        <pre className="w-full p-4 overflow-x-auto">
          <code>{stack}</code>
        </pre>
      )}
    </main>
  );
}

