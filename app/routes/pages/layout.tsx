import { useLocation, Outlet } from "react-router";
import Header from "~/components/Header";
import Footer from "~/components/Footer";
import Breadcrumbs from "~/components/Breadcrumbs";
import { HOME_PAGE } from "~/utils/constants";

export default function Layout() {
  const { pathname } = useLocation();

  return (
    <div className="flex flex-col max-w-[1334px] mx-auto">
      <Header />
      {pathname !== HOME_PAGE && <Breadcrumbs />}
      <main className="grow px-4">
        <Outlet />
      </main>
      <Footer/>
    </div>
  )
}