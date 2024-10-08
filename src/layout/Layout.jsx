import React from 'react'
import Nav from "../components/Navbar/Nav"
import Landing from '../components/LandingPage/Landing'
import Footer from '../components/Footer/Footer'
import Stats from '../components/StatsArea/Stats'
import Footer2 from '../components/Footer2/Footer2'

const Layout = () => {
  return (
    <div>
        <Nav/>
        <Landing/>
        <Stats/>
        <Footer2/>
        <Footer/>
    </div>
  )
}

export default Layout
