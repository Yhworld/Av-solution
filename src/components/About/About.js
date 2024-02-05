import React from "react";
import aboutimg1 from "../../assets/images/aboutimg1.jpg";
import "../About/About.css";
import Counter from "./Counter";

const About = () => {
  return (
    <section id="manage" className="container relative mx-auto p-4">
      <h2 className="text-3xl font-bold text-center md:text-6xl md:mt-24">
        SCALE YOUR EXPERIENCE
        <br />
        WITH AV SOLUTIONS
        <br />
        FOR<span>LASTING SUCCESS</span>.
      </h2>
      <div
        id="about-sub"
        className="container flex flex-col-reverse px-4 md:mt-28 md:items-center md:justify-between mx-auto space-y-12 md:flex-row md:space-y-0"
      >
        <div id="feature" className="flex flex-col space-y-10">
          {/* <h2 className="text-4xl pt-8 md:text-4xl font-bold">
            CUTTING EDGE SOLUTIONS
          </h2> */}
          <p id="about-text" className="md:text-2xl text-gray-500 text-start">
            AV Solutions offers top-notch audio system consultation and
            installation services for diverse settings. we excel in crafting
            engaging visual content through our video production services,
            spanning promotional videos, documentaries, and event coverage..
          </p>
          <div>
            <a
              href="#_"
              class="inline-flex items-center font-bold justify-center h-12 px-6 tracking-wide text-white transition duration-200 bg-gray-900 rounded-full hover:bg-gray-500 focus:shadow-outline focus:outline-none"
            >
              Discover More
            </a>
          </div>
        </div>
        <div id="aboutimg" className="md:w-1/2">
          <img
            src={aboutimg1}
            width="1002"
            height="668"
            alt=""
            loading="lazy"
            className="gunther"
          />
        </div>
      </div>
      <div className="flex flex-col justify-around items-center mt-24 md:flex-row">
        <div className="flex flex-row items-center space-x-8 md:space-x-64">
          {" "}
          <Counter number={100} title="Customers Ratings" />
          <Counter number={6} title="Years of Experience" />
        </div>
        <div className="flex flex-row space-x-8 md:space-x-64">
          <Counter number={200} title="Succesful Events" />
          <Counter number={20} title="Team Members" />
        </div>
      </div>
    </section>
  );
};

export default About;
