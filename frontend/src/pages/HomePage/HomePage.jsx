import React from 'react'
import Navbar from '../../components/Navbar/Navbar.jsx'
import Footer from '../../components/Footer/Footer.jsx'
import AboutSection from '../../components/AboutSection/AboutSection.jsx'
import HeroSection from '../../components/HeroSection/HeroSection.jsx'
import TestSection from '../../components/TestSection/TestSection.jsx'
import ResourcesSection from '../../components/ResourcesSection/ResourcesSection.jsx'
import SubscriptionSection from '../../components/SubscriptionSection/SubscriptionSection.jsx'
import QuestionsSection from '../../components/QuestionsSection/QuestionsSection.jsx'

const HomePage = () => {
  return (
    <div>
      <Navbar isHomePage = {true}/>
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

