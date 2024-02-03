import React from "react";
import aboutimg1 from "../../assets/images/aboutimg1.jpg";
import "../About/About.css";
import Counter from "./Counter";

const About = () => {
  return (
    <section id="manage" className="container relative mx-auto p-4">
      <h2 className="text-3xl font-bold md:text-center md:text-5xl text-start">
        SCALE YOUR TEAM
        <br />
        WITH SENIOR ENGINEERS
        <br />
        FOR LASTING SUCCESS.
      </h2>
      <div
        id="about-sub"
        className="container flex flex-col-reverse px-4 mt-10 md:items-center md:justify-between mx-auto space-y-12 md:flex-row md:space-y-0"
      >
        <div className="flex flex-col space-y-10">
          <h2 className="text-4xl pt-8 md:text-4xl font-bold">
            CUTTING EDGE SOLUTIONS
          </h2>
          <p id="about-text" className=" text-gray-500 text-start">
            Explore a comprehensive suite of audio visual services designed to
            meet your needs from start to finish. Benefit from our expert
            consultation and tailored installation solutions
          </p>
          <div>
            <a
              href="#_"
              class="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 bg-gray-900 rounded-full hover:bg-gray-500 focus:shadow-outline focus:outline-none"
            >
              Get a Quotation
            </a>
          </div>
        </div>
        <div id="aboutimg" className="md:w-1/2">
          <img
            src={aboutimg1}
            width="1002"
            height="668"
            alt=""
            className="gunther"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
