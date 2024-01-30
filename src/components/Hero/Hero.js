import React from "react";
import "./hero.css";
import avsbg from "../../assets/images/avsbg.png";

function Hero() {
  return (
    <div className="flex md:flex-col-reverse items-center justify-between flex-col-reverse lg:flex-row pt-8">
      <div className="pt-3 flex flex-col">
        <h1 className="text-5xl sm:text-3xl md:text-3xl lg:text-5xl xl:text-5xl flex flex-col">
          Where Every Frame Tells a Story
          {/* <br /> */}
          <span className="pt-3">Your AV Experience Starts Here.</span>
        </h1>
        <p className="pt-8 text-2xl text-slate-600"> 
        Explore our range of features, from crystal-clear visuals to immersive audio, 
        <br/>
        and embark on a journey where technology and imagination converge.
        <br/>
         Your AV experience starts here —discover the possibilities today.</p>
         <div className="flex justify-center md:justify-start pt-8">
            <a href="#" className="hidden md:block baseline rounded-full bg-green-500 p-3 px-6 pt-2 ">
          Get Started
        </a></div>
         
      </div>
      <div className="pt-3">
        <img src={avsbg} alt="" />
      </div>
    </div>
  );
}

export default Hero;
