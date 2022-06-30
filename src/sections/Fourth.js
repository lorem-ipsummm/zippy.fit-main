import React from 'react'
import { Link } from 'react-router-dom';
import "./second.css"
function Fourth() {
    return (

        <div className='grind'>
 <div className='text2'>
            <span>
            runners need to
            </span> <br/>
            <span className='title'>
                grind
            </span>
            <span style={{marginTop:'20px', textAlign: 'center'}}> to unlock progressive NFT elements such as avatars, <br/>upperwears and bottomwears to participate in ZIPPY’s<br/>open and persistent world. </span>
            </div>
           <img id='grind-gif' src='grind.gif' alt=''  style={{ height:'450',marginTop:'1vh'}}></img>
           <Link to={{ pathname: "/whitelist", }}>
           <button className='btn'  href="#">Whitelist Me</button></Link>
            <br/>
        </div>
    );
}


export default Fourth;