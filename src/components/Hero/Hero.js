import React from "react";
import "./hero.css";
import photographer from "../../assets/images/photographer.svg";

function Hero() {
  return (
    <div className="container flex flex-col-reverse md:flex-row items-center md:justify-between px-6 mx-auto mt-10 space-y-0 md:space-y-0">
      <div className="flex flex-col mb-32 space-y-12 md:w-1/2 md:mt-32">
        <h1 className="font-bold text-4xl text-center md:text-6xl md:text-left">
          Where Every Frame Tells a Story Your AV Experience Starts Here.
        </h1>
        <p className=" text-center text-slate-500 md:text-left">
          Embark on a journey where technology and imagination converge. Your AV
          experience starts here —discover the possibilities today.
        </p>
        <div className="flex justify-center md:justify-start">
          <a href="#_" class="relative inline-block text-lg group">
            <span class="relative z-10 block px-8 py-3 overflow-hidden font-medium leading-tight text-white transition-colors duration-300 ease-out border-2 border-gray-900 group-hover:text-slate-900">
              <span class="absolute inset-0 w-full h-full px-5 py-3 r bg-slate-900"></span>
              <span class="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-white group-hover:-rotate-180 ease"></span>
              <span class="relative">Get a Quote</span>
            </span>
            <span
              class="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-white group-hover:mb-0 group-hover:mr-0"
              
            ></span>
          </a>
        </div>
      </div>
      <div id="hero-pic" className="hidden md:block">
        <img src={photographer} alt="" />
      </div>
    </div>
  );
}

export default Hero;
