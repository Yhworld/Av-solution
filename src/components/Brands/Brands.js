import React from 'react'
import sponsor8 from '../../assets/images/Testimonial/sponsor8.png'
import sponsor2 from '../../assets/images/Testimonial/sponsor2.png'
import sponsor7 from '../../assets/images/Testimonial/sponsor7.png'
import sponsor9 from '../../assets/images/Testimonial/sponsor9.png'
import './brands.css'

function Brands() {
  return (
    <div id='test' className='flex items-center justify-between md:mt-6 space-x-8 overflow-x-auto md:overflow-x-hidden '>
        <img src={sponsor8} alt="" loading='lazy' />
        <img src={sponsor2} alt="" loading='lazy' />
        <img src={sponsor7} alt="" loading='lazy' />
        <img src={sponsor9} alt="" loading='lazy'/>
    </div>
    
  )
}

export default Brands