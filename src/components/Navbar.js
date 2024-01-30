import React from "react";
import logo from '../assets/images/logo.webp'

function Navbar() {
  return (
      <div className="flex items-center justify-between">
        <img src={logo} alt="" />
        <div className="hidden space-x-8 md:flex">
          <a href="#" className="hover:text-slate-500">
            Home
          </a>
          <a href="#" className="hover:text-slate-500">
            pricing
          </a>
          <a href="#" className="hover:text-slate-500">
            community{" "}
          </a>
          <a href="#" className="hover:text-slate-500">
            services
          </a>
        </div>
        <a href="#" className="hidden md:block baseline rounded-full bg-green-500 p-3 px-6 pt-2 ">
          Get Started
        </a>
      </div>
  );
}

export default Navbar;
