import React, { useState } from 'react';
import "./sixth.css";
function Sixth() {
  const [indoor, setindoor] = useState(true)
  const inorout = indoor ? (<>
   <div className='ph-child'>
            <img height={50} src="mobile.png" alt=''></img>
            <span>
              Download Zippy App on your iOS or Android phone
            </span>

          </div>
          <div className='ph-child'>
            <img height={50} src="octicon_sign.png" alt=''></img>
            <span>
              Setup your account with easy crypto and fiat on ramps

            </span>

          </div>
          <div className='ph-child'>
            <img height={50} src="nftimage.png" alt=''></img>
            <span>
              Get NFT elements
              (Lucky few get Airdrops)
            </span>

          </div>
          <div className='ph-child'>
            <img height={50} src="tabler_run.png" alt=''></img>
            <span>
              Run, have fun, meet friends and earn cool bucks (in this order)
            </span>

          </div>
          </>) : (<>
   <div className='ph-child'>
            <img height={50} src="treadmill_icon.png" alt=''></img>
            <span>
            Step on any treadmill.
            </span>

          </div>
          <div className='ph-child'>
            <img height={50} src="bluetooth_icon.png" alt=''></img>
            <span>
              Treadmill not Bluetooth enabled.
Don't have compatible hardware.
{/* Don't worry, we got you covered */}
            </span>

          </div>
        
          <div className='ph-child'>
            <img height={50} src="mobile.png" alt=''></img>
            <span>
              Fire up Zippy on any iOS or Android device and stream the app on your Smart TV, Laptop, iPad, Andoid Tablet or Smartphone.
            </span>

          </div>
          </>);
  return (
    <>
      <div className='main' id="howitworks" >

        <b>How it works</b>
        <div className='.btn-cont'>

          <button className='btn' id={indoor ? "" : "outline"} onClick={() => setindoor(true)} href="#">Outdoor running</button>
          <button className='btn1' id={!indoor ? "" : "outline"} onClick={() => setindoor(false)} href="#">Indoor running</button>
        </div>
        <div className='ph'>

          {inorout}

  
          <img style={{width:'80vw'}} src={indoor?"sixth.png":"devices.gif"} alt=''></img>

{!indoor?(<>

<div className='title' style={{textAlign:'center',textTransform:'lowercase',width:"100%"}}>
<br/>Zippy gets you running on all devices
</div>
<br/>

</>):""}
<div>
<button className='btn dev'> Refer a friend</button>

</div>
        </div>


      </div>
      <div>


      </div>
      <div className="photo">
      coming soon
      </div>
    </>
  )
}

export default Sixth;