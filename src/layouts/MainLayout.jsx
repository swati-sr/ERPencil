import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header"; // make sure this path is correct
import Footer from "../components/Footer"; // make sure this path is correct

const MainLayout = () => {
  return (
    <div className="min-h-screen flex flex-col bg-light-bg">
      <header className="sticky top-0 z-50 bg-light-bg/90 backdrop-blur border-b border-gray-200">
        <Header />
      </header>
      <main className="flex-grow px-4 md:px-8 py-6">
        <Outlet />
      </main>
      <footer className="bg-light-bg border-t border-gray-200">
        <Footer />
      </footer>
    </div>
  );
};

export default MainLayout;
