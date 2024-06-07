import React from 'react'
import { TopNavbar } from './TopNavbar'
import { HeroSection } from './HeroSection'
import { AboutSection } from './AboutSection'
import { ServiceSection } from './ServiceSection'
import { Footer } from './Footer'

export const Home = () => {
  return (
    <>
     <TopNavbar/>
     <HeroSection/>
     <AboutSection/>
     <ServiceSection/>
     <Footer/>
    </>
   
  )
}
