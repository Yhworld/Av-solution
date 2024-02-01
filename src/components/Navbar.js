import React from "react";
import logo from "../assets/images/logo.webp";

function Navbar() {
  return (
    <div className="flex items-center justify-between">
      <img src={logo} alt="" />
      <div className="hidden space-x-8 md:flex">
        <a href="/" className="hover:text-slate-500">
          Home
        </a>
        <a href="/pricing" className="hover:text-slate-500">
          Pricing
        </a>
        <a href="/community" className="hover:text-slate-500">
          Community
        </a>
        <a href="/services" className="hover:text-slate-500">
          Services
        </a>
      </div>
      <a href="#_" class="relative hidden md:block px-4 py-2 font-medium group">
        <span class="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
        <span class="absolute inset-0 w-full h-full bg-white border-2 border-black group-hover:bg-black"></span>
        <span class="relative text-black group-hover:text-white">
          Getting Started
        </span>
      </a>
    </div>
  );
}

export default Navbar;
