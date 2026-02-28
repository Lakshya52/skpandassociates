import React from 'react'
import Hero from '../components/landing/Hero'
import Intro from '../components/landing/Intro'
import CoreValues from '../components/landing/CoreValues'
import HeroNew from '../components/landing/HeroNew'
import HeroBanner from "../components/landing/HeroBanner"


const Landing = () => {
  return (
    <>

      <HeroBanner />
      {/* <HeroNew /> */}
      {/* <Hero /> */}
      <Intro />
      <CoreValues />

    </>
  )
}

export default Landing