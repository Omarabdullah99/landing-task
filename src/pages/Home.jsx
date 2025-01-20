import React from 'react'
import Banner from '../components/Home/Banner'
import Aboout from '../components/Home/About'
import Services from '../components/Home/Services'
import ServicesSection from '../components/ServicesCopy'
import Featured from '../components/Home/Featured'
import ClientsSay from '../components/Home/ClientsSay'
import Work from '../components/Home/Work'
import Process from '../components/Home/Process'
import OurTeam from '../components/Home/OurTeam'
import Blog from '../components/Home/Blog'


const Home = () => {
  return (
    <div>
      <Banner />
      <Aboout />
      <Services />
      <Work />
      <Featured />
      <Process />
      <Blog />
      <OurTeam />
      <ClientsSay />
    </div>
  )
}

export default Home