import React from 'react'
import Navbar from '../components/navbar'
import Footer from '../components/footer'
import { BrowserRouter } from 'react-router-dom'

import HeroSection from '../components/HeroSection'

const HomePage = () => {
  return (
    <div>
      <Navbar/>
      <HeroSection/>
      <Footer/>
      
      
    </div>
  )
}

export default HomePage

