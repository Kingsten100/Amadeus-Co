import React from 'react'

import Hero from '../components/Hero/Hero'
import HeroText from '../components/HeroText/HeroText'

import ServiceCard from '../components/ServiceCard/ServiceCard'
import ServiceSlider from '../components/ServiceSlider/ServiceSlider'

import { VscGraph } from "react-icons/vsc";
import { TbPigMoney } from "react-icons/tb";
import { IoMdTime } from "react-icons/io";
import { PiNotePencilBold } from "react-icons/pi";



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

        {/* Varför välja oss sektion */}
        <section>
        <div>
          <h3 className='choose-us-section'>Varför välja oss</h3>
          <div className='choose-us-row'>
            <div className='choose-us-card'>
              <div className='icon-container'>
                <div>
                <div className='icon-container'>
                  <VscGraph size={50}/>
                </div>
              </div>
              </div>
              <div className='choose-us-info'>
                <h4 className='choose-us-title'>Resultatinriktat arbete</h4>
                <p className='choose-us-content'>Vi fokuserar på lösningar som inte bara ser bra ut, utan också levererar mätbara resultat för din verksamhet.</p>
              </div>
            </div>

            <div className='choose-us-card'>
              <div className='icon-container'>
                <div>
                <div className='icon-container'>
                  <PiNotePencilBold size={50}/>
                </div>
              </div>
              </div>
              <div className='choose-us-info'>
                <h4 className='choose-us-title'>Skräddarsydda lösningar</h4>
                <p className='choose-us-content'>Vi anpassar våra tjänster efter ditt företags unika behov och mål – inga standardmallar, bara unika lösningar.</p>
              </div>
            </div>
          </div>
        </div>

         <div className='choose-us-row-2'>
            <div className='choose-us-card'>
              <div>
                <div className='icon-container'>
                  <TbPigMoney size={50}/>
                </div>
              </div>
              <div className='choose-us-info'>
                <h4 className='choose-us-title'>Prisvärd kvalitet</h4>
                <p className='choose-us-content'>Våra tjänster är anpassade för företag som söker högkvalitativa lösningar utan att spräcka budgeten.</p>
              </div>
            </div>

            <div className='choose-us-card'>
              <div className='icon-container'>
                <div>
                <div className='icon-container'>
                  <IoMdTime size={50}/>
                </div>
              </div>
              </div>
              <div className='choose-us-info'>
                <h4 className='choose-us-title'>Långsiktig partner</h4>
                <p className='choose-us-content'>Vårt arbete slutar inte vid lansering – vi erbjuder support och rådgivning för att säkerställa att din digitala närvaro fortsätter att växa.</p>
              </div>
            </div>
          </div>
        </section>

       

      </div>
    </>
  )
}

export default HomePage
