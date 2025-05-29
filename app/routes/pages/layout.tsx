import type { ReactNode } from "react";
import { Outlet } from "react-router";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="max-w-[1334px] mx-auto">
      <Outlet />
      {children}
    </div>
  )
}