import React, { useState } from 'react';
import logo from "../../assets/images/logo.webp";
import './navbar.css';
import data from './data2'

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="container  mx-auto  sticky top-0 z-10 p-4 bg-white">
      <div className="flex items-center justify-between">
        <img src={logo} alt="Logo" className="logo" />
        <div className="hidden space-x-8 md:flex">
          {data.map(navigation => { return (<a href="/" className="hover:text-slate-500">{navigation.name}</a>)})}
          
          {/* Add more navigation links here */}
        </div>
        <a href="#_" className="hidden md:inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 bg-gray-900 rounded-full hover:bg-gray-500 focus:shadow-outline focus:outline-none">
          Get a Quotation
        </a>
        <button id="menu-btn" className={`pr-8 block hamburger md:hidden focus:outline-none ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
          <span className="hamburger-top"></span>
          <span className="hamburger-middle"></span>
          <span className="hamburger-bottom"></span>
        </button>
      </div>
      {isOpen && (
        <div className="md:hidden">
          <div id="menu" className="relative inset-0 z-50 flex flex-col items-center justify-center bg-white font-bold py-8 space-y-6 drop-shadow-md">
            <a href="#" className="hover:text-darkGrayishBlue">Pricing</a>
            <a href="#" className="hover:text-darkGrayishBlue">Product</a>
            <a href="#" className="hover:text-darkGrayishBlue">About Us</a>
            <a href="#" className="hover:text-darkGrayishBlue">Careers</a>
            <a href="#" className="hover:text-darkGrayishBlue">Community</a>
          </div>
        </div>
      )}
      {/* <div className={`menu-container ${isOpen ? 'open' : ''}`}>
        <div className={`menu ${isOpen ? 'open' : ''}`}>
          <div className="absolute flex flex-col items-center self-end py-8 mt-10 space-y-6 font-bold bg-white sm:w-auto sm:self-center left-6 right-6 drop-shadow-md">
            <a href="#" className="hover:text-darkGrayishBlue">Pricing</a>
            <a href="#" className="hover:text-darkGrayishBlue">Product</a>
            <a href="#" className="hover:text-darkGrayishBlue">About Us</a>
            <a href="#" className="hover:text-darkGrayishBlue">Careers</a>
            <a href="#" className="hover:text-darkGrayishBlue">Community</a>
          </div>
        </div>
      </div> */}
    </div>
  );
}

export default Navbar;
