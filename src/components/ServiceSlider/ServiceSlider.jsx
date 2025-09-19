import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react'
import image1 from '../../../public/Webbdesignimg.png'
import image2 from '../../../public/Marketingimg.png'
import image3 from '../../../public/Brandingimg.png'
import 'swiper/css'

const ServiceSlider = () => {
  const [index, setIndex] = useState(0)

  const cards = [
    { 
      id: 1, 
      image: image1,
      title: 'Webbdesign', 
      text: 'Vi designar användarvänliga och responsiva webbplatser som inte bara ser bra ut utan också ger en positiv upplevelse för dina besökare och omvandlar dem till kunder.', 
      linkText: 'UTFORSKA WEBBDESIGNEN',
      link: 'webbdesign' 
    },
    {
      id: 2,
      image: image2,
      title: 'Grafisk design & branding',
      text: 'Vi skapar visuella identiteter och designlösningar som effektivt kommunicerar ditt varumärkes kärna och bygger förtroende hos dina kunder.',
      linkText: 'UTFORSKA GRAFISK DESIGN & BRANDING',
      link: 'branding'
    },
    {
      id: 3,
      image: image3,
      title: 'Marknadsföring',
      text: 'Vi skapar visuella identiteter och designlösningar som effektivt kommunicerar ditt varumärkes kärna och bygger förtroende hos dina kunder.',
      linkText: 'UTFORSKA MARKNADSFÖRING',
      link: 'marknadsforing'

    }
  ]

  return (
    <>
    <Swiper 
      spaceBetween={20} 
      slidesPerView={2.1}
      centeredSlides={false}
      loop={false}
    >
      {cards.map((card) => (
        <SwiperSlide key={card.id}>
          <div className='slide-card slide-card-container'>
            <img src={card.image} alt="" />
            <h3 className='service-card-title'>{card.title}</h3>
            <p className='service-card-text'>{card.text}</p>
            <Link className='service-card-link'>{card.linkText} <img src="../../public/ArrowRight.svg" alt="" /></Link>
          </div>
        </SwiperSlide>
      ))}

    </Swiper>
    </>
  )
}

export default ServiceSlider
