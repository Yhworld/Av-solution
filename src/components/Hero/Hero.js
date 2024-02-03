import React from "react";
import "./hero.css";
import photographer from "../../assets/images/photographer.svg";
import Testimonial from "../Testimonial/Testimonial";

function Hero() {
  return (
    <div
      id="hero"
      className="flex flex-col items-center justify-center px-6 mx-auto space-y-0 md:space-y-0"
    >
      <div className="flex flex-col mb-32 space-y-12 md:w-1/2 mt-32">
        <h1 className="font-bold text-4xl text-white text-center md:text-6xl ">
          IMMERSE YOURSELF IN SOUND AND VISION
        </h1>
        <p className=" text-center text-slate-200">
          Embark on a journey where technology and imagination converge. Your AV
          experience starts here —discover the possibilities today.
        </p>
        <div className="flex justify-center">
          <a
            href="#_"
            class="flex items-center justify-center px-16 py-4 text-base font-medium leading-6 text-gray-500 whitespace-no-wrap bg-white border-2 border-transparent rounded-full shadow-sm hover:bg-transparent hover:text-white hover:border-white focus:outline-none"
          >
            Learn More
          </a>
        </div>
      </div>
      <Testimonial />
    </div>
  );
}

export default Hero;
