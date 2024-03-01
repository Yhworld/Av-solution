import React from 'react'
import './features.scss'
import Footer from '../Footer/Footer'
import Cta from '../CTA/Cta'

function Video() {
  return (
    <>
    <section id="video-features" className="container flex flex-col items-center justify-center px-6 mx-auto space-y-0 md:space-y-0" loading="lazy">
      <div className="flex flex-col mb-32 space-y-12 md:w-1/2 mt-32">
        <h1 className="font-bold text-4xl text-white text-center md:text-6xl ">
         Pro video production Services
        </h1>
        <p className=" text-center text-slate-200">
          Embark on a journey where technology and imagination converge. Your AV
          experience starts here —discover the possibilities today.
        </p>
        <div className="flex justify-center">
          <a
            href="#_"
            className="flex items-center justify-center px-16 py-4 text-base font-medium leading-6 text-gray-500 whitespace-no-wrap bg-white border-2 border-transparent rounded-full shadow-sm hover:bg-transparent hover:text-white hover:border-white focus:outline-none"
          >
            Get in Touch
          </a>
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
                    src="https://images.pexels.com/photos/7691691/pexels-photo-7691691.jpeg?auto=compress&cs=tinysrgb&w=600"
                    loading='lazy'
                    alt=""
                    className="w-full rounded-2xl"
                  />
                </div>
              </div>
              <div className="w-full px-3 sm:px-4 xl:w-1/2">
                <div className="relative z-10 my-4">
                  <img
                    src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
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
                Corporate Videos
              </h2>
              <p className="mb-5 text-base text-body-color dark:text-dark-6">
              Elevate your brand with our professional corporate video services. Our team specializes in creating compelling video content tailored to showcase your company's story, values, and products. From concept development to production and editing, we deliver high-quality corporate videos that engage and captivate your audience. Whether you need promotional videos, training materials, or event coverage, we provide customized solutions to meet your specific needs. Trust us to bring your brand to life with dynamic visuals and impactful storytelling.
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
                    src="https://images.pexels.com/photos/16716948/pexels-photo-16716948/free-photo-of-fireworks-over-the-water-in-front-of-a-crowd.jpeg?auto=compress&cs=tinysrgb&w=600"
                    loading='lazy'
                    alt=""
                    className="w-full rounded-2xl"
                  />
                </div>
              </div>
              <div className="w-full px-3 sm:px-4 xl:w-1/2">
                <div className="relative z-10 my-4">
                  <img
                    src="https://images.unsplash.com/photo-1550005809-91ad75fb315f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHdlZGRpbmd8ZW58MHwwfDB8fHww"
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
                Event Coverage
              </h2>
              <p className="mb-5 text-base text-body-color dark:text-dark-6">
              Capture every moment of your event with our professional event coverage services. From corporate conferences to weddings and concerts, we specialize in documenting key highlights and behind-the-scenes action. With photography, videography, live streaming, and social media coverage, we ensure comprehensive and engaging event documentation. Trust us to preserve the memories and showcase the success of your event with dynamic coverage.
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
                    src="https://images.pexels.com/photos/4515793/pexels-photo-4515793.jpeg?auto=compress&cs=tinysrgb&w=600"
                    loading='lazy'
                    alt=""
                    className="w-full rounded-2xl"
                  />
                </div>
              </div>
              <div className="w-full px-3 sm:px-4 xl:w-1/2">
                <div className="relative z-10 my-4">
                  <img
                    src="https://images.pexels.com/photos/802024/pexels-photo-802024.jpeg?auto=compress&cs=tinysrgb&w=600"
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
                Promotional Videos
              </h2>
              <p className="mb-5 text-base text-body-color dark:text-dark-6">
              Boost your brand with captivating promotional videos tailored to your needs. Our expert team specializes in crafting engaging video content that showcases your products, services, and brand story. From concept development to production and editing, we create high-quality videos that resonate with your target audience. Whether it's for social media, website, or marketing campaigns, we deliver compelling promotional videos that drive engagement and conversions. Trust us to bring your vision to life and elevate your brand with impactful storytelling and stunning visuals.
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

export default Video