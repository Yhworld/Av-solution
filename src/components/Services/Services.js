import React from 'react'
import data from './data'
import './services.scss'


function Services() {
  return (
    <section className="container relative mx-auto p-4 pb-36 mt-32">
    <div className='flex flex-col items-center'>
    <h2 className="text-center text-4xl  tracking-tight text-gray-900 sm:text-5xl">
      Our<span>Services</span>
    </h2>
    <p className='text-gray-400 mt-6 text-center'>Explore Our Diverse Range of Tailored Audiovisual Solutions Designed to Suit Your Every Need</p>
    </div>

    <div
        id="about-sub"
        className="container mt-8 flex flex-col md:mt-40 md:items-center md:space-x-8 md:justify-between mx-auto space-y-12 md:flex-row md:space-y-0"
      >
{data.map(service => { return (

<div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-white">
    <a href="#">
        <img id='card-img' class="rounded-t-lg" src={service.image} alt="" loading='lazy' />
    </a>
    <div class="p-5" id='cards'>
        <a href="#">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-black">{service.title}</h5>
        </a>
        <p class="mb-3 font-normal text-gray-00 dark:text-slate-500">{service.description}.</p>
        <a href="#" id='card-button' class="inline-flex items-center py-2 text-sm font-bold text-center text-black focus:outline-none">
            Read more
             <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
        </a>
    </div>
</div>)})}

      </div>
    
    </section>
  )
}

export default Services