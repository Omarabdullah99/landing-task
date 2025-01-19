import React from 'react'
import Banner from '../components/Home/Banner'
import Aboout from '../components/Home/About'
import Services from '../components/Home/Services'
import ServicesSection from '../components/ServicesCopy'

const Home = () => {
  return (
    <div>
      <Banner />
      <Aboout />
      <Services />
    </div>
  )
}

export default Home