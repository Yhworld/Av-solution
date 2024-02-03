import React from "react";
import logo from "../../assets/images/logo.webp";
import './navbar.css'

function Navbar() {
  return (
    <div className="flex items-center justify-between">
      <img src={logo} alt="" className="logo" />
      <div className="hidden space-x-8 md:flex">
        <a href="/" className="hover:text-slate-500">
          Home
        </a>
        <a href="/about" className="hover:text-slate-500">
         About
        </a>
        <a href="/services" className="hover:text-slate-500">
          Services
        </a>
        <a href="/contact" className="hover:text-slate-500">
          Contact
        </a>
      </div>
      <a href="#_" class="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 bg-gray-900 rounded-full hover:bg-gray-500 focus:shadow-outline focus:outline-none">
    Get a Quotation
</a>
    </div>
  );
}

export default Navbar;
