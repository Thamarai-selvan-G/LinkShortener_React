import React from 'react'
import "./Footer.css"
import logo from "../../assets/logo.svg"
import { FaFacebookSquare } from "react-icons/fa";
import { GrTwitter } from "react-icons/gr";
import { FaPinterest } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
const Footer = () => {
  return (
    <>
    <div className="footParent">
        <div className="footer">

        <h2>Shortly</h2>
        <div className="parentAddres">
            <div className="features">
                <h3>Features</h3>
                <div className='anchors'>
                    <span>Link Shortening</span>
                    <span>Branded Links</span>
                    <span>Analytics</span>
                </div>
            </div>
            <div className="resources">
                <h3>Resources</h3>
                <div  className='anchors'>
                    <span>Blog</span>
                    <span>Developers</span>
                    <span>Support</span>
                </div>
            </div>
            <div className="company">
                <h3>Company</h3>
                <div className='anchors'>
                <span>About</span>
                <span>Our Team</span>
                <span>Careers</span>
                <span>Contact</span>
                </div>
            </div>
        </div>
        <div className="socialParent">
            <p><FaFacebookSquare /></p>
            <p><GrTwitter /></p>
            <p><FaPinterest /></p>
            <p><BsInstagram /></p>
        </div>

        </div>
    </div>
    </>
  )
}

export default Footer
