import React from 'react'
import { Link } from 'react-router-dom'

const ServiceCard = () => {
  return (
    <div className='service-card-container'>
      <div className='slider-img-container'>
        <img className='slider-img' src="../../public/Webbdesignimg.png" alt="" />
      </div>
      <div className='service-card-info-container'>
        <div>
          <h3 className='service-card-title'>Webbdesign</h3>
        </div>
        <div>
          <p className='service-card-text'>
            Vi designar användarvänliga och responsiva webbplatser som inte bara ser bra ut utan också ger en positiv upplevelse för dina besökare och omvandlar dem till kunder.
          </p>
        </div>
        <div>
          <Link to='/tjanster/webbdesign'className='service-card-link'>UTFORSKA WEBBDESIGN <img src="../../public/ArrowRight.svg" alt="" /></Link>
        </div>

      </div>
    </div>
  )
}

export default ServiceCard
