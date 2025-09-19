import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    
      <nav className='navbar-container container'>
        <div className='navbar-logo'>
          <NavLink to={'/'}>
            <img src="../../public/Logotype.svg" alt="" />

          </NavLink>
        </div>
        
        <div className='navbar-links-list desktop'>
          <ul className='navbar-ul'>
            <li className='navbar-li'>Våra tjänster</li>
            <li><NavLink to={'om-oss'} className='navbar-link-btn'>Om oss</NavLink></li>
            <li><NavLink to={'/kundservice'} className='navbar-link-btn'>Kundservice</NavLink></li>
            <li><NavLink to={'/priser'} className='navbar-link-btn'>Priser</NavLink></li>
            <li><NavLink to={'blogg'} className='navbar-link-btn'>Blogg</NavLink></li>
            <li><NavLink to={'kontakt'} className='navbar-link-btn'>Kontakt</NavLink></li>
          </ul>
          <button className='navbar-offert'>Få fri offert</button>
        </div>
        <div className='hamburger-menu'>
          <button>Ham</button>
          <button className='navbar-offert'>Få fri offert</button>
        </div>
      </nav>


  )
}

export default Navbar
