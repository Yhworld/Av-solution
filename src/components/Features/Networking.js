import React from "react";
import "./features.scss";
import Footer from "../Footer/Footer";
import Cta from "../CTA/Cta";
import { Link } from "react-router-dom";

function Networking() {
  return (
    <>
      <section
        id="networking-features"
        className="container flex flex-col items-center justify-center px-6 mx-auto space-y-0 md:space-y-0"
        loading="lazy"
      >
        <div className="flex flex-col mb-32 space-y-12 md:w-1/2 mt-32">
          <h1 className="font-bold text-4xl text-white text-center md:text-6xl ">
            Pro Networking Solutions
          </h1>
          <p className=" text-center text-slate-200">
            Embark on a journey where technology and imagination converge. Your
            AV experience starts here —discover the possibilities today.
          </p>
          <div className="flex justify-center">
            <Link
              to="/contact"
              className="flex items-center justify-center px-16 py-4 text-base font-medium leading-6 text-gray-500 whitespace-no-wrap bg-white border-2 border-transparent rounded-full shadow-sm hover:bg-transparent hover:text-white hover:border-white focus:outline-none"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </section>
      <section className="overflow-hidden pt-20 pb-12 lg:pt-[120px] lg:pb-[90px] bg-white dark:bg-dark">
        <div className="container relative mx-auto">
          <div className="flex flex-wrap items-center justify-between -mx-4">
            <div className="w-full px-4 lg:w-6/12">
              <div className="flex items-center -mx-3 sm:-mx-4">
                <div className="w-full px-3 sm:px-4 xl:w-1/2">
                  <div className="py-3 sm:py-4">
                    <img
                      src="https://images.pexels.com/photos/343457/pexels-photo-343457.jpeg?auto=compress&cs=tinysrgb&w=600"
                      loading="lazy"
                      alt=""
                      className="w-full rounded-2xl"
                    />
                  </div>
                </div>
                <div className="w-full px-3 sm:px-4 xl:w-1/2">
                  <div className="relative z-10 my-4">
                    <img
                      src="https://images.pexels.com/photos/159304/network-cable-ethernet-computer-159304.jpeg?auto=compress&cs=tinysrgb&w=600"
                      loading="lazy"
                      alt=""
                      className="w-full rounded-2xl"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="px-4 pl-8 lg:w-1/2 xl:w-5/12">
              <div className="mt-10 lg:mt-0">
                <span className="block mb-4 text-lg font-semibold text-primary">
                  01
                </span>
                <h2 className="mb-5 text-3xl font-bold text-dark  sm:text-[40px]/[48px]">
                  Network Installation
                </h2>
                <p className="mb-5 text-base text-body-color dark:text-dark-6">
                  Improve your connectivity with our expert network installation
                  services. We design and implement robust network solutions
                  tailored to your business needs. From small offices to large
                  enterprises, we provide comprehensive installation services
                  for wired and wireless networks. Trust us to streamline your
                  operations and empower your business with reliable and secure
                  connectivity.
                </p>
                <p className="mb-8 text-base text-body-color dark:text-dark-6"></p>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap items-center justify-between -mx-4 md:flex-row-reverse mt-16 mb-16">
            <div className="w-full px-4 lg:w-6/12">
              <div className="flex items-center -mx-3 sm:-mx-4">
                <div className="w-full px-3 sm:px-4 xl:w-1/2">
                  <div className="py-3 sm:py-4">
                    <img
                      src="https://images.pexels.com/photos/15012251/pexels-photo-15012251/free-photo-of-photo-of-a-young-man-sitting-by-a-gray-wall-and-looking-at-a-smart-phone.jpeg?auto=compress&cs=tinysrgb&w=600"
                      loading="lazy"
                      alt=""
                      className="w-full rounded-2xl"
                    />
                  </div>
                </div>
                <div className="w-full px-3 sm:px-4 xl:w-1/2">
                  <div className="relative z-10 my-4">
                    <img
                      src="https://images.pexels.com/photos/2881229/pexels-photo-2881229.jpeg?auto=compress&cs=tinysrgb&w=600"
                      loading="lazy"
                      alt=""
                      className="w-full rounded-2xl"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="px-4 pl-8 lg:w-1/2 xl:w-5/12">
              <div className="mt-10 lg:mt-0">
                <span className="block mb-4 text-lg font-semibold text-primary">
                  02
                </span>
                <h2 className="mb-5 text-3xl font-bold text-dark  sm:text-[40px]/[48px]">
                  Wired and Wireless Networking Solutions
                </h2>
                <p className="mb-5 text-base text-body-color dark:text-dark-6">
                  Optimize your connectivity with our comprehensive wired and
                  wireless networking solutions. Our expert team specializes in
                  designing and implementing reliable network infrastructures
                  tailored to your specific needs. From wired Ethernet setups to
                  cutting-edge wireless configurations, we provide seamless
                  connectivity solutions for businesses of all sizes. Trust us
                  to enhance your network performance and empower your
                  operations with our professional networking services.
                </p>
                <p className="mb-8 text-base text-body-color dark:text-dark-6"></p>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap items-center justify-between -mx-4 mt-12">
            <div className="w-full px-4 lg:w-6/12">
              <div className="flex items-center -mx-3 sm:-mx-4">
                <div className="w-full px-3 sm:px-4 xl:w-1/2">
                  <div className="py-3 sm:py-4">
                    <img
                      src="https://images.pexels.com/photos/18037566/pexels-photo-18037566/free-photo-of-guitar-pick-box-mixed-guitar-picks.jpeg?auto=compress&cs=tinysrgb&w=600"
                      loading="lazy"
                      alt=""
                      className="w-full rounded-2xl"
                    />
                  </div>
                </div>
                <div className="w-full px-3 sm:px-4 xl:w-1/2">
                  <div className="relative z-10 my-4">
                    <img
                      src="https://images.pexels.com/photos/4059469/pexels-photo-4059469.jpeg?auto=compress&cs=tinysrgb&w=600"
                      loading="lazy"
                      alt=""
                      className="w-full rounded-2xl"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="px-4 pl-8 lg:w-1/2 xl:w-5/12">
              <div className="mt-10 lg:mt-0">
                <span className="block mb-4 text-lg font-semibold text-primary">
                  03
                </span>
                <h2 className="mb-5 text-3xl font-bold text-dark  sm:text-[40px]/[48px]">
                  Security and Access Control
                </h2>
                <p className="mb-5 text-base text-body-color dark:text-dark-6">
                  Enhance security with our tailored access control solutions.
                  We design and implement robust systems, including surveillance
                  cameras and intrusion detection. Trust us to safeguard your
                  premises effectively, ensuring peace of mind and protection
                  for your assets.
                </p>
                <p className="mb-8 text-base text-body-color dark:text-dark-6"></p>
              </div>
            </div>
          </div>
        </div>
        <Cta />
      </section>
      <Footer />
    </>
  );
}

export default Networking;
