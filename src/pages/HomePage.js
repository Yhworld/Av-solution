import React from 'react'
import Hero from '../components/Hero/Hero'
import About from '../components/About/About'
import Services from '../components/Services/Services'
import Testimonial from '../components/Testimonial/Testimonial'
import Footer from '../components/Footer/Footer'
import Contact from '../components/Footer/Contact/Contact'

function HomePage() {
  return (
    <div>
      <Hero />
      <About />
      <Services/>
      <Testimonial />
      <Contact />
      <Footer />
      
    </div>
  )
}

export default HomePage