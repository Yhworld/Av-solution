// import React from 'react'
// import { SiAudiomack } from "react-icons/si";
// import data from './data'

// function Services() {
//   return (
//     <section class="bg-white dark:bg-gray-900">
//     <div class="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6 md:flex md:items-center space-x-8">
//         <div class="max-w-screen-md mb-8 lg:mb-16">
//             <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Designed for business teams like yours</h2>
//             <p class="text-gray-500 sm:text-xl dark:text-gray-400">Here at Flowbite we focus on markets where technology, innovation, and capital can unlock long-term value and drive economic growth.</p>
//         </div>

        
//         <div class="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-2 md:gap-12 md:space-y-0 pl-12">
//            {data.map(service => {
//         return( <div>
//                 <div class="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                
//                 </div>
//                 <h3 class="mb-2 text-xl font-bold dark:text-white">{service.title}</h3>
//                 <p class="text-gray-500 dark:text-gray-400">{service.description}</p>
//                 <a href="#" class="inline-flex items-center py-2 text-sm font-bold text-center mt-4 text-white focus:outline-none">
//             Read more
//              <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
//                 <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
//              </svg>
//          </a>
//             </div>)})}
//         </div>
//     </div>
//   </section>
//   )
// }

// export default Services
















import React from 'react'
import data from './data'
import './services.css'


function Services() {
  return (
    <section className="container relative mx-auto p-4 pb-28 mt-20">
    <div className='flex flex-col items-center'>
    <h2 className="text-2xl text-center font-medium md:text-6xl mt-12 md:mt-4">
      Our<span>Services</span>
    </h2>
    <p className='text-gray-400 mt-6 text-center'>Explore Our Diverse Range of Tailored Audiovisual Solutions Designed to Suit Your Every Need</p>
    </div>

    <div
        id="about-sub"
        className="container mt-8 flex flex-col md:mt-28 md:items-center md:space-x-8 md:justify-between mx-auto space-y-12 md:flex-row md:space-y-0"
      >
{data.map(service => { return (

<div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-white">
    <a href="#">
        <img id='card-img' class="rounded-t-lg" src={service.image} alt="" />
    </a>
    <div class="p-5">
        <a href="#">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-black">{service.title}</h5>
        </a>
        <p class="mb-3 font-normal text-gray-00 dark:text-slate-600">{service.description}.</p>
        <a href="#" class="inline-flex items-center py-2 text-sm font-bold text-center text-black focus:outline-none">
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