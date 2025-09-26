import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import ScrollToTop from "../components/Scrolltotop";

const MainLayout = () => {
  return (
    <div className="min-h-screen flex flex-col bg-light-bg">
      <header className="sticky top-0 z-50 bg-light-bg/90 backdrop-blur border-b border-gray-200">
        <Header />
      </header>
      <ScrollToTop />
      <main className="flex-grow px-4 md:px-8 py-6">
        <Outlet />
      </main>
    </div>
  );
};

export default MainLayout;
