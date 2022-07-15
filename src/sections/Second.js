import React from 'react'
import "./fifth.css"
function Second() {
  return (
    <div className="d1 center" >
      <div className='text'>
        <span className='title' style={{ marginLeft: "50px" }}>
          run is now
          <br />
          immersive

        </span><br />
        <span style={{ marginLeft: "48px" }}>
          listen to the world's best athletes, runners and storytellers. Get a inside view of their mental models- how they train, think and win. Or run across world's leading running circuits or scenic environments such as Beach Run, Jungle Safari or Mountain Trail along with ambient soundscapes
        </span>
        <button className='btn' style={{ marginLeft: "48px" }} href="#">Know More</button>
      </div>
      <div className='img-fifth'>
        <img id='second' src="second.png" alt='' />
      </div>
    </div>
  );
}


export default Second;