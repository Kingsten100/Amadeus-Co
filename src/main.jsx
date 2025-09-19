import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import App from './App.jsx'

import './index.css'
import './components/Navbar/NavbarStyles.css'
import './components/Hero/HeroStyles.css'
import './components/HeroText/HeroTextStyles.css'
import './components/ServiceCard/ServiceCardStyles.css'


import HomePage from './pages/HomePage.jsx'
import BloggPage from './pages/BloggPage.jsx'
import Layout from './Layouts/Layout.jsx'
import AboutPage from './pages/AboutPage.jsx'
import SupportPage from './pages/SupportPage.jsx'
import PricePage from './pages/PricePage.jsx'
import ContactPage from './pages/ContactPage.jsx'
import ServiceWebbdesign from './pages/ServiceWebbdesign.jsx'
import ServiceBranding from './pages/ServiceBranding.jsx'
import ServiceMarketing from './pages/ServiceMarketing.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <Routes>
      <Route element={<Layout />}>
        <Route path='/' element={<HomePage />}/>
        <Route path='/om-oss' element={<AboutPage />}/> 
        <Route path='/kundservice' element={<SupportPage />}/> 
        <Route path='/priser' element={<PricePage />}/> 
        <Route path='/blogg' element={<BloggPage />}/>
        <Route path='/kontakt' element={<ContactPage/>}/>
        <Route path='/tjanster/webbdesign' element={<ServiceWebbdesign />}/>
        <Route path='/tjanster/branding' element={<ServiceBranding />}/>
        <Route path='/tjanster/marknadsforing' element={<ServiceMarketing/>}/>
      </Route>
    </Routes>
    </BrowserRouter>
  </StrictMode>,
)
