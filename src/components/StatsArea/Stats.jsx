import React from 'react'
import "./Stat.css"
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
                        <h1>hello</h1>
                        <h1>hello</h1>
                        <h1>hello</h1>
                        <h1>hello</h1>
                    </div>
            </div>
        </div>
   
   </>
  )
}

export default Stats
