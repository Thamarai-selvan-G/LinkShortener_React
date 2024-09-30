import React from 'react'
import "./Stat.css"
import pic from "../../assets/icon-brand-recognition.svg"
import pic2 from "../../assets/icon-fully-customizable.svg"
import pic3 from "../../assets/icon-detailed-records.svg"
import { useState } from 'react'
const Stats = () => {

    const [url,setUrl] = useState("");
    const [err,setErr] = useState(false)


  function getData(event) {
    setUrl(event.target.value)
    setErr(false)
  }
  function checkInput() {
    if (url==="") {
       return setErr(true)
    }
  }
  return (
   <>
        <div className="statParent">
            <div className="statArea">
                <div className="convertArea">
                    <input type="text" placeholder='Shorten a link here ...' onChange={getData} />
                    <span onClick={checkInput}>Shorten It!</span>
                {err && <p className='error'>Plese add a link</p>}
                </div>
                    <div className="head">
                        <h1>Advanced Statistics</h1>
                        <p>Track how your links are performing across the web with our advanced statistics dashboard</p>
                    </div>
          
                    <div className="cards">
                       <div className="card1">
                        <div className="cardContent">
                            <h2>Brand Recognition</h2>
                            <p>Boost your brand recognition with each click. Generic links don't mean a thing.Branding links help instill confidence in your content</p>
                        </div >
                        <div className="brand">
                            <img src={pic} alt="" />
                        </div>
                       </div>
                       <div className='line'></div>
                       <div className="card2">
                       <div className="cardContent">
                            <h2>Detailed Records</h2>
                            <p>Boost your brand recognition with each click. Generic links don't mean a thing.Branding links help instill confidence in your content</p>
                        </div>
                        <div className="brand">
                            <img src={pic3} alt="" />
                        </div>
                       </div>
                       <div className='line'></div>
                       <div className="card3">
                       <div className="cardContent">
                            <h2>Fully Customizable</h2>
                            <p>Boost your brand recognition with each click. Generic links don't mean a thing.Branding links help instill confidence in your content</p>
                        </div>
                        <div className="brand">
                            <img src={pic2} alt="" />
                        </div>
                       </div>
                    </div>
            </div>
        </div>
   
   </>
  )
}

export default Stats
