import React from "react";
// import communication from "../../assets/images/communication.svg";
import "../About/About.css";
import AnimatedNumberSection from "./AnimatedNumberSection";

const About = () => {
  return (
    <section id="manage">
      <div className="container flex flex-col px-4 mt-10 mx-auto space-y-12 md:flex-row md:space-y-0">
        <div className="flex flex-col space-y-12 md:w-1/2">
          <h2 className="text-4xl font-bold text-center md:text-left">
            Why choose us
          </h2>
          <p className="text-center text-slate-500 md:text-left max-w-md">
            Manage provides all the functionality your team needs,without the
            complexity.Our software is tailor-made for modern digital product
            teams.
          </p>
          <div>
            <AnimatedNumberSection title="Customer Satisfaction" targetValue={100}/>
          </div>
        </div>
        <div className="flex flex-col space-y-8 md:w-1/2">
          <div className="flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row">
            <div className="rounded-l-full bg-brightRedSupLight md:bg-transparent">
              <div className="flex items-center space-x-2">
                <div className="px-4 py-2 text-white rounded-full md:py-1 bg-slate-900">
                  01
                </div>
                <h3 className="text-base font-bold md:mb-4 md:hidden">
                  Comprehensive Audio Solutions
                </h3>
              </div>
            </div>

            <div>
              <h3 className="hidden mb-4 text-lg font-bold md:block">
                Comprehensive Audio Solutions
              </h3>
              <p className="text-slate-500">
                Experience tailored audio system consultation and installation
                services for homes, businesses, and events.
              </p>
            </div>
          </div>

          <div className="flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row">
            <div className="rounded-l-full bg-brightRedSupLight md:bg-transparent">
              <div className="flex items-center space-x-2">
                <div className="px-4 py-2 text-white rounded-full md:py-1 bg-slate-900">
                  02
                </div>
                <h3 className="text-base font-bold md:mb-4 md:hidden">
                  Advanced built-in reports
                </h3>
              </div>
            </div>

            <div>
              <h3 className="hidden mb-4 text-lg font-bold md:block">
                Cutting-Edge Video Production
              </h3>
              <p className="text-slate-500">
                Benefit from our expertise in crafting compelling visual
                narratives, from promotional videos to documentaries and event
                coverage.
              </p>
            </div>
          </div>

          <div className="flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row">
            <div className="rounded-l-full bg-brightRedSupLight md:bg-transparent">
              <div className="flex items-center space-x-2">
                <div className="px-4 py-2 text-white rounded-full md:py-1 bg-slate-900">
                  03
                </div>
                <h3 className="text-base font-bold md:mb-4 md:hidden">
                  Technological Expertise
                </h3>
              </div>
            </div>

            <div>
              <h3 className="hidden mb-4 text-lg font-bold md:block">
                Technological Expertise
              </h3>
              <p className="text-slate-500">
                Access advanced technology and creative solutions from our team
                of experts dedicated to enhancing your audiovisual experience.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
