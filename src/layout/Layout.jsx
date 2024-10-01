import React from 'react'
import Nav from "../components/Navbar/Nav"
import Landing from '../components/LandingPage/Landing'
import Footer from '../components/Footer/Footer'
import Stats from '../components/StatsArea/Stats'

const Layout = () => {
  return (
    <div>
        <Nav/>
        <Landing/>
        <Stats/>
        {/* <Footer/> */}
    </div>
  )
}

export default Layout
