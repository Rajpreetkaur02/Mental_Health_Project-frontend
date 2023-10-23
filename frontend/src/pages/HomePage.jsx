import React from 'react'
import Navbar from '../components/Navbar.jsx'
import Footer from '../components/Footer.jsx'
import AboutSection from '../components/AboutSection.jsx'
import HeroSection from '../components/HeroSection'
import TestSection from '../components/TestSection.jsx'
import ResourcesSection from '../components/ResourcesSection.jsx'
import SubscriptionSection from '../components/SubscriptionSection.jsx'
import QuestionsSection from '../components/QuestionsSection.jsx'

const HomePage = () => {
  return (
    <div>
      <Navbar/>
      <HeroSection/>
      <AboutSection/>
      <TestSection/>
      <ResourcesSection/>
      <SubscriptionSection/>
      <QuestionsSection/>
      <Footer/>  
    </div>
  )
}

export default HomePage

