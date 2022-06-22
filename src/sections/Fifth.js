import React from 'react'
import "./fifth.css"
function Fifth() {
  return (
    <div className="d1 fifth" style={{ background: "#0086FB" }}>
      <div className='text'>
        <span className='title' style={{ marginLeft: "64px" }}>
          run is now
          <br />
          rewarding

        </span><br />
        <span style={{ marginLeft: "64px" }}>
          Every step you take, every move you make - we will be rewarding you with rare NFTs and in-metaverse tokens that gets deposited to your crypto wallet automatically
        </span>
        <button className='btn' style={{ marginLeft: "64px" }} href="#">Know More</button>
      </div>
      <div className='img-fifth'>
        <img src="fifth.png" alt='' />
      </div>
    </div>
  );
}


export default Fifth;