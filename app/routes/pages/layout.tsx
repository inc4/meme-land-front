import type { ReactNode } from "react";
import { Outlet } from "react-router";
import Header from "~/components/Header";
import Footer from "~/components/Footer";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="max-w-[1334px] mx-auto">
      <Header />
      <Outlet />
      {children}
      <Footer/>
    </div>
  )
}