import React from 'react'
import Navbar from '../components/Navbar.jsx'
import Footer from '../components/Footer.jsx'
import AboutSection from '../components/AboutSection.jsx'
import HeroSection from '../components/HeroSection'

const HomePage = () => {
  return (
    <div>
      <Navbar/>
      <HeroSection/>
      <AboutSection/>
      <Footer/>  
    </div>
  )
}

export default HomePage

