import React from 'react'

import Hero from '../components/Hero/Hero'
import HeroText from '../components/HeroText/HeroText'

import ServiceCard from '../components/ServiceCard/ServiceCard'
import ServiceSlider from '../components/ServiceSlider/ServiceSlider'

const HomePage = () => {
  return (
    <>
      <div>
        <Hero />
      </div>
      <div>
        <HeroText />
      </div>
      <div className='container'>
        <div className='service-info-container'>
          <p className='service-title'>VÅRA TJÄNSTER</p>
          <h2 className='service-question'>Hur kan vi hjälpa dig?</h2>
        </div>
        <div className='service-slider-container'>
          <ServiceSlider />
        </div>

      </div>
    </>
  )
}

export default HomePage
