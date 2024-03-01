import React, { useState } from "react";
import logo from "../../assets/images/logo.webp";
import "./navbar.css";
import data from "./data2";
import { NavLink } from "react-router-dom";

function Navbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="container  mx-auto  bg-white border-gray-200 sticky top-0 z-10">
    <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
      <NavLink href="#" className="" to="/">
        <img
          src={logo}
          id="logo"
          loading="lazy"
          alt="Flowbite Logo"
        />
      </NavLink>
      <button
        data-collapse-toggle="navbar-dropdown"
        type="button"
        className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
        aria-controls="navbar-dropdown"
        aria-expanded={isMenuOpen ? "true" : "false"}
        onClick={toggleMenu}
      >
        <span className="sr-only">Open main menu</span>
        <svg
          className="w-5 h-5"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 17 14"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M1 1h15M1 7h15M1 13h15"
          />
        </svg>
      </button>
      <div
        className={`${
          isMenuOpen ? "block" : "hidden"
        } w-full md:block md:w-auto`}
        id="navbar-dropdown"
      >
        <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white">
          <li>
            <NavLink
              className="block py-2 px-3 text-black bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500 dark:bg-blue-600 md:dark:bg-transparent"
              to="/"
              aria-current="page"
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0  md:dark:hover:text-blue-500 dark:hover:bg-gray-700  md:dark:hover:bg-transparent"
            >
              About
            </NavLink>
          </li>
          <li>
            <div className="relative">
              <button
                id="dropdownNavbarLink"
                data-dropdown-toggle="dropdownNavbar"
                className="flex items-center justify-between w-full py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto md:dark:hover:text-blue-500 dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent"
                onClick={toggleDropdown}
              >
                Services{" "}
                <svg
                  className="w-2.5 h-2.5 ms-2.5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    strokeWidth="2"
                    d="m1 1 4 4 4-4"
                  />
                </svg>
              </button>
              <div
                id="dropdownNavbar"
                className={`absolute z-10 ${
                  isDropdownOpen ? "block" : "hidden"
                } font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44`}
              >
                <ul
                  className="py-2 text-sm text-black"
                  aria-labelledby="dropdownLargeButton"
                >
                  <li>
                    <NavLink
                      to="/audioservice"
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Audio Services
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/videoservice"
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Video Production
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/editing" 
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Videography & Editing
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/networking"
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Networking
                    </NavLink>
                  </li>
                </ul>
              </div>
            </div>
          </li>
          <li>
            <NavLink
              to="/contact"
              className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:hover:bg-gray-700 md:dark:hover:bg-transparent"
            >
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
           <NavLink
         to="/contact"
         className="hidden md:inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 bg-gray-900 rounded-full hover:bg-gray-500 focus:shadow-outline focus:outline-none"
        >
        Get a Quotation
        </NavLink>
    </div>
  </nav>

    // <div className="container  mx-auto  sticky top-0 z-10 p-4 bg-white">
    //   <div className="flex items-center justify-between">
    //     <NavLink to="/">
    //       <img src={logo} alt="Logo" className="logo" />
    //     </NavLink>
    //     <div className="hidden space-x-8 md:flex">
    //       {data.map((navigation) => {
    //         return (
    //           <NavLink
    //             to={navigation.link}
    //             className="nav-link font-medium"
    //             style={{ cursor: "pointer" }}
    //           >
    //             {navigation.name}
    //           </NavLink>
    //         );
    //       })}
    //     </div>
    //     <NavLink
    //       href="#_"
    //       className="hidden md:inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 bg-gray-900 rounded-full hover:bg-gray-500 focus:shadow-outline focus:outline-none"
    //     >
    //       Get a Quotation
    //     </NavLink>
    //     <button
    //       id="menu-btn"
    //       className={`pr-8 block hamburger md:hidden focus:outline-none ${
    //         isOpen ? "open" : ""
    //       }`}
    //       onClick={toggleMenu}
    //     >
    //       <span className="hamburger-top"></span>
    //       <span className="hamburger-middle"></span>
    //       <span className="hamburger-bottom"></span>
    //     </button>
    //   </div>
    //   {isOpen && (
    //     <div className="md:hidden">
    //       <div
    //         id="menu"
    //         className="relative inset-0 z-50 flex flex-col items-center justify-center bg-white font-bold py-8 space-y-6 drop-shadow-md"
    //       >
    //         <NavLink
    //           to="Home"
    //           spy={true}
    //           smooth={true}
    //           duration={800}
    //           className="nav-link"
    //           style={{ cursor: "pointer" }}
    //         >
    //           Home
    //         </NavLink>
    //         <NavLink
    //           to="About"
    //           spy={true}
    //           smooth={true}
    //           duration={800}
    //           className="nav-link"
    //           style={{ cursor: "pointer" }}
    //         >
    //           About
    //         </NavLink>
    //         <NavLink
    //           to="services"
    //           spy={true}
    //           smooth={true}
    //           duration={800}
    //           className="nav-link"
    //           style={{ cursor: "pointer" }}
    //         >
    //           Services
    //         </NavLink>
    //         <NavLink
    //           to="contact"
    //           spy={true}
    //           smooth={true}
    //           duration={800}
    //           className="nav-link"
    //           style={{ cursor: "pointer" }}
    //         >
    //           Contact
    //         </NavLink>
    //       </div>
    //     </div>
    //   )}
    // </div>
  );
}

export default Navbar;
