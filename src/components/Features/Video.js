import React from 'react'
import './features.scss'

function Video() {
  return (
    <section id="video-features" className="container relative mx-auto p-4 mt-4 flex flex-col items-center justify-center px-6 space-y-0 md:space-y-0" loading="lazy">
      <div className="flex flex-col items-center justify-center md:flex-col space-y-12 md:w-1/2 md:mt-8">
        <h1 className="font-bold text-4xl text-white text-center md:text-6xl ">
         Video Production
        </h1>
        <div className="flex justify-center">
          <a
            href="#_"
            class="flex items-center justify-center px-16 py-4 text-base font-medium leading-6 text-gray-500 whitespace-no-wrap bg-white border-2 border-transparent rounded-full shadow-sm hover:bg-transparent hover:text-white hover:border-white focus:outline-none"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  )
}

export default Video