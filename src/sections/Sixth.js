import React, { useState } from 'react';
import "./sixth.css";
import Ref from './Ref';
import { Toaster } from 'react-hot-toast';

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
        Connect your treadmill to Zippy App through fitness wearables (Coming Soon)
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
      <div><Toaster/></div>
   
        <div className='btn-cont'>

          <button className='btn1' id={indoor ? "" : "outline"} onClick={() => setindoor(true)} href="#">Outdoor running</button>
          <button className='btn1' id={!indoor ? "" : "outline"} onClick={() => setindoor(false)} href="#">Indoor running</button>
        </div>
        <div className='ph'>

          {inorout}


          <img style={{ width: '80vw' }} src={indoor ? "sixth.png" : "devices.gif"} alt=''></img>

          {!indoor ? (<>

            <div className='title' style={{ textAlign: 'center', textTransform: 'lowercase', width: "100%" }}>
              <br />Zippy gets you running on all devices
            </div>
            <br />

          </>) : ""}
          <div>
            <br />
            <button onClick={() => {
              var modal = document.getElementById("myModal2");
              modal.style.display = "block";
              var x=window.scrollX;
    var y=window.scrollY;
    window.onscroll=function(){window.scrollTo(x, y);};
              
            }} className='btn add' id='referf'> Refer a friend</button>

          </div>
        </div>


      </div>
      <div>


      </div>
      <div className="photo">
       
      </div>
      <div id="myModal2" class="modal">

        <div class="modal-content">
  
          <span onClick={() => {
            var modal = document.getElementById("myModal2");
            window.onscroll=function(){};

            modal.style.display = "none";
          }} class="close">&times;</span>
          <img className='refer' src='whitelist.png' alt=''>
          </img><br /><br />
          <p>Spread the word.</p>
          <br />
          <div>
            Your 3 months subscription is on us. When you refer your friend - you get
            additional 1 month complimentary and your friend gets 3 months.
            thanks to you!
          </div> <br />
          <Ref/>
          {/* <i className="fas fa-spinner fa-spin"></i> */}
        </div>

      </div>
    </>
  )
}

export default Sixth;