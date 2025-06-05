import { Outlet } from "react-router";
import Header from "~/components/Header";
import Footer from "~/components/Footer";

export default function Layout() {
  return (
    <div className="flex flex-col max-w-[1334px] mx-auto">
      <Header />
      <main className="grow px-4">
        <Outlet />
      </main>
      <Footer/>
    </div>
  )
}