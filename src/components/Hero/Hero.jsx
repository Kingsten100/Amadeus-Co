import React from 'react'

const Hero = () => {
  return (
    <>
      <div className='hero-img-container'>
        <img className='hero-img' src="../../public/Heroimg.png" alt="" />
        <div className='hero-info-blob container'>
          <div className='hero-info '>
            <p className='orange-text'>Webbyrå</p>
            <h1 className='blue-text'>
              Din lokala webbyrå <br />
              med hjärta för design
            </h1>
            <p className='hero-info-text'>
              Vi hjälper företag att förverkliga sina digitala <br />
              visioner och bygga starka varumärken
            </p>
          </div>
        </div> 
      </div>
      
    </>
  )
}

export default Hero
