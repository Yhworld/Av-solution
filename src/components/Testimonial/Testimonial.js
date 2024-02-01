import React from 'react'
import sponsor1 from '../../assets/images/Testimonial/sponsor1.png'
import sponsor2 from '../../assets/images/Testimonial/sponsor2.png'
import sponsor3 from '../../assets/images/Testimonial/sponsor3.png'
import sponsor4 from '../../assets/images/Testimonial/sponsor4.png'
import './testimonial.css'

function Testimonial() {
  return (
    <div id='test' className='flex items-center justify-between md:mt-6 space-x-8 overflow-x-auto md:overflow-x-hidden '>
        <img src={sponsor1} alt="" loading='lazy' />
        <img src={sponsor2} alt="" loading='lazy' />
        <img src={sponsor3} alt="" loading='lazy' />
        <img src={sponsor4} alt="" loading='lazy'/>
    </div>
    
  )
}

export default Testimonial