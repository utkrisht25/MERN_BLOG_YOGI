import TopBar from "../components/Topbar.jsx";
import { AppSidebar } from "../components/AppSidebar.jsx";
import { SidebarProvider } from "../components/ui/sidebar";
import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer.jsx";

const Layout = () => {
  return (
    //navbar
    <SidebarProvider>
      <TopBar />
      <AppSidebar />
      <main className="w-full">
        <div className="w-full min-h-[calc(100vh-64px)] pt-28 px-10">
          <Outlet />
        </div>
        <Footer />
      </main>
    </SidebarProvider>
  );
};

export default Layout;
