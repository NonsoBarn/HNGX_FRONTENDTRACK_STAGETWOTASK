import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Layout = () => {
  return (
    <div className="flex flex-col h-screen justify-between bg-slate-50 text-slate-900 font-raleway">
      <div className="lg:hidden bg-black">
        <Navbar />
      </div>
      <main className="">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
