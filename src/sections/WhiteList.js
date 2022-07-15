import React, {useState} from 'react';
import Footer from './Footer'; 
import Navbar from './Navbar';
import { useEffect } from 'react';
import "./Whitelist.css"
import { wind } from 'fontawesome';
import axios from "axios"
import { APIUrl } from "../api"
import toast,{Toaster} from 'react-hot-toast';
import validateEmail from "./helper"
import { useRef } from 'react';
function WhiteList() {

    const [user, setUser] = useState({
        email: " ",
    });
    
    let name, value;

    const getUserData =(event) => {
        name= event.target.name;
        value= event.target.value;

        setUser({ ...user, [name]: value});
    };
    const postData = async(event) => {
        // toast.success("hello")
        event.preventDefault();

        const {email} = user;
        console.log(email);
        var data = new FormData();
        data.append('email',email);
        validateEmail(email)
        if(validateEmail(email))
        {const response = await axios.post(`${APIUrl}/api/v1/app/join-waitlist`, {
            email:email,
            base_url: window.location.origin,
          })
          console.log(response);
          if (response.data.code === 2000) {
            toast.success(response.data.message);
            setUser({
                email: " ",
            });
          
          }
           else toast.error(response.data.message)
            

          
        
    }
    else {eminp.current.reportValidity() ;
    }

}
    

const eminp = useRef();

    return (
<>
<Navbar/>

<div><Toaster/></div>
<div className='whitelist-cont'>
<div className='whitelist-img'>
    <img src='whitelist.png'  alt=''></img>

</div>
<div className='whitelist-info'>
    <div className='titlex'>
        join other 2567<br/>
        runners globally.
    </div>
    <span>
        <br/>Hey there! so glad to have you part of our growing community.
        Please click the link below so that we know you are, well you!</span> <br/>
    <form method='POST'>
        <input ref={eminp} type="email" name= "email" placeholder='adam.smith@example.com'
        value={user.email}
        onChange={getUserData} 
        autoComplete='off'
        required/>
        <button type='submit' onClick={postData}> Get WhiteListed</button>
    </form>


    <div className='whitelist-icons'>
        <br/>
        <span>
            bump me up on the whitelist
        </span>
        <br/>
        <div className='icons'>
            <div className='icon-child'>
                <a href="https://discord.com/invite/2FT6R5n52e" target="_blank"><img height={10} src='DISCORD-BLUE.svg' alt=''></img></a>
                <span>Join Our Discord </span>
            </div>
            <div className='icon-child'>
            <a href="https://twitter.com/zippy_fit" target="_blank"><img height={10} src='TWITTER-BLUE.png' alt=''></img></a>
                <span>Tweet about us</span>
            </div>                        <div className='icon-child'>
                <a href="#" onClick={() => {
              var modal = document.getElementById("myModal2");
              modal.style.display = "block";
            }}><img height={10} src='REFER-BLUE.png' alt=''></img></a>
                <span>Refer a friend</span>
            </div>
        </div>

    </div>
</div>
</div>
< Footer/>
<div id="myModal2" class="modal">

        <div class="modal-content">
          <span onClick={() => {
            var modal = document.getElementById("myModal2");

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
          {/* <button onClick={() => {
            window.location.assign("mailto:sunny@zippy.fit");
          }} className='btn add'> Write To Us</button> */}
          {/* <p>Get your club enlisted</p> */}
          <form method='POST'>
            <input className="inp" type="text" name="email" placeholder='adam.smith@example.com' required />
            <br/><button className='btn2' type='submit'> Add friend </button>
          </form>
        </div>

      </div>

</>

    )
}

export default WhiteList