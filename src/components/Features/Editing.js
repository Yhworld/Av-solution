import React from 'react'
import './features.scss'
import Footer from '../Footer/Footer'
import Cta from '../CTA/Cta'
import { Link } from "react-router-dom";

function Editing() {
  return (
    <>
    <section id="editing-features" className="container flex flex-col items-center justify-center px-6 mx-auto space-y-0 md:space-y-0" loading="lazy">
      <div className="flex flex-col mb-32 space-y-12 md:w-1/2 mt-32">
        <h1 className="font-bold text-4xl text-white text-center md:text-6xl ">
         Pro Videography Services
        </h1>
        <p className=" text-center text-slate-200">
          Embark on a journey where technology and imagination converge. Your AV
          experience starts here —discover the possibilities today.
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
                    src="https://images.pexels.com/photos/8981847/pexels-photo-8981847.jpeg?auto=compress&cs=tinysrgb&w=600"
                    loading='lazy'
                    alt=""
                    className="w-full rounded-2xl"
                  />
                </div>
              </div>
              <div className="w-full px-3 sm:px-4 xl:w-1/2">
                <div className="relative z-10 my-4">
                  <img
                    src="https://images.pexels.com/photos/14783483/pexels-photo-14783483.png?auto=compress&cs=tinysrgb&w=600"
                    loading='lazy'
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
                 Filming
              </h2>
              <p className="mb-5 text-base text-body-color dark:text-dark-6">
              Capture the moment with our professional filming services. Our experienced team specializes in capturing high-quality footage that tells your story effectively. Whether it's for corporate events, weddings, commercials, or documentaries, we provide comprehensive filming services tailored to your needs. From planning and shooting to editing and post-production, we ensure your vision comes to life with cinematic excellence. Trust us to deliver exceptional results and bring your ideas to the screen with creativity and precision.
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
                    src="https://images.pexels.com/photos/16532515/pexels-photo-16532515/free-photo-of-tunnelblick.jpeg?auto=compress&cs=tinysrgb&w=600"
                    loading='lazy'
                    alt=""
                    className="w-full rounded-2xl"
                  />
                </div>
              </div>
              <div className="w-full px-3 sm:px-4 xl:w-1/2">
                <div className="relative z-10 my-4">
                  <img
                    src="https://images.pexels.com/photos/257904/pexels-photo-257904.jpeg?auto=compress&cs=tinysrgb&w=600"
                    loading='lazy'
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
                Editing and Post-Production Services
              </h2>
              <p className="mb-5 text-base text-body-color dark:text-dark-6">
              Refine your video content with our professional editing and post-production services. Our skilled team transforms raw footage into polished, captivating videos. From color correction to audio enhancement, we ensure your content meets the highest standards. Whether for corporate presentations or social media, trust us to bring your vision to life with professional results.
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
                    src="https://images.pexels.com/photos/1011437/pexels-photo-1011437.jpeg?auto=compress&cs=tinysrgb&w=600"
                    loading='lazy'
                    alt=""
                    className="w-full rounded-2xl"
                  />
                </div>
              </div>
              <div className="w-full px-3 sm:px-4 xl:w-1/2">
                <div className="relative z-10 my-4">
                  <img
                    src="https://images.pexels.com/photos/442587/pexels-photo-442587.jpeg?auto=compress&cs=tinysrgb&w=600"
                    loading='lazy'
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
                 Drone Videography
              </h2>
              <p className="mb-5 text-base text-body-color dark:text-dark-6">
                
Elevate your visuals with our professional drone videography services. Our expert team specializes in capturing stunning aerial footage that adds depth and perspective to your projects. From scenic landscapes to dynamic events, we provide creative and engaging aerial videography tailored to your needs. Whether it's for real estate, weddings, travel, or promotional content, we deliver high-quality drone footage that captivates your audience. Trust us to bring your vision to new heights with breathtaking aerial videography.
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
  )
}

export default Editing