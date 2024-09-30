import React, { useState } from 'react'
import "./Nav.css"
import logo from "../../assets/logo.svg"
import { IoMenu } from "react-icons/io5";
const Nav = () => {

  const [mobCss,setMobcss] = useState(false)

  return (
  <>
    <div className="navParent">
        <div className="nav">
          <div className="logo">
            <img src={logo} alt="" />
              
              <div className="menuBar">
                <span> Freatures</span>
                <span>Pricing</span>
                <span>Resources</span>
              </div>

          </div>

          <div className="user">
            <span>Login</span>
            <span>sign Up</span>
          </div>
            
        </div>

        <div className="mobMenu">
          <img src={logo} alt="" />
          <span onClick={()=>setMobcss(!mobCss)}><IoMenu /></span>
        </div>

        <div className={`menuList ${mobCss ? "active" : ""}`}>
          <div className="list">
                <span> Freatures</span>
                <span>Pricing</span>
                <span>Resources</span>
          </div>
                
          <div className="mobUser">
            <span>Login</span>
            <span>Sign Up</span>
          </div>
        </div>
    </div>
  
  </>
  )
}

export default Nav
