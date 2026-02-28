import SideBar from "@/components/layout/sideBar";
import TopBar from "@/components/layout/topBar";
import React from "react";

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <SideBar />
      <TopBar />
      {children}
    </>
  );
}
