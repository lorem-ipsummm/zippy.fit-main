import React, { useState } from 'react'
import "./HeroSection.css"
function HeroSection() {
  const [version, setversion] = useState(false);
    return (
    <div className='hero-cont' style={{ backgroundImage: `url(${version?"./demo1.png":"demo4.png"})` }} onClick={()=>setversion(!version)}>
      <span className='hero-title'>
      revolutionizing <br/>
      running for<br/>
     {version?" indoor ":" outdoor "}
        runners.
      </span>
      <span>
      Zippy is world’s first move to earn metaverse focused on outdoor and indoor runners, joggers and walkers.
      </span>
     <a href='#howitworks'>
     <button className='btn' > How it works</button></a> 
        </div>
  )
}

export default HeroSection