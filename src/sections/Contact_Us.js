import React, { useEffect, useState } from 'react'
import "./Contact_Us.css"
import Footer from './Footer'
import { APIUrl } from "./../api";
import Navbar from './Navbar'
import { isEmpty, validateEmail } from "./helper";
import "./Whitelist.css"
import axios from "axios";
import async from 'hbs/lib/async';
function Contact_Us() {
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [message, setMessage] = useState("");

    const [emailError, setEmailError] = useState("");
    const [nameError, setNameError] = useState("");
    const [messageError, setMessageError] = useState("");
    const [contactLoader, setContactLoader] = useState(false);

    const onEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const onNameChange = (e) => {
        setName(e.target.value);
    };

    const onMessageChange = (e) => {
        setMessage(e.target.value);
    };

 

    const onSubmit =async () => {
    //    console.log(email + name +message)

        //   if (!validateEmail(email) || !isEmpty(name) || !isEmpty(message)) {
          
   
        //     return;

        //   } else {
        //     setContactLoader(true);
        //     const response = await axios.post(`${APIUrl}/api/v1/app/contact`, {
        //       name,
        //       email,
        //       message,
        //     });
        //     if (response.data.status && response.data.code === 2006) {
        //       alert("Message sent succesfully")
        //       setName("");
        //       setEmail("");
        //       setMessage("");
            
        //     }
          
        // }
    };

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);


    return (
        <>
            <Navbar />
            
            <div className='contact' style={{ backgroundImage: 'url("Map.png")' }}>
                <div className='title'>
                    contact <br /> us.
                </div>

                <div className='contact-child'>
                    <span className='title'>
                        get in touch
                    </span>
                    <span> We would love to hear from you!</span>
                    <form>
                        <input value={name} onChange={onNameChange} placeholder='Name' type='text' />
                        <input type="email" onChange={onEmailChange}
                            value={email} placeholder='Email address'  />
                        <input value={message}
                            onChange={onMessageChange} placeholder='Message' type='text' />
                        <button type="submit" className='btn' onClick={(e) =>{e.preventDefault(); onSubmit()}}>Send</button>
                    </form>
                    <span> Or write us on</span>
                    <div className='icons'>
                        <div className='icon-child'>
                            <a href='https://discord.com/invite/2FT6R5n52e' target="_blank"><img src='discordblue.svg' style={{ height: '30px', width: '30px' }}></img></a>

                        </div>
                        <div className='icon-child'>
                            <a href='https://discord.com/invite/2FT6R5n52e' target="_blank"><img src='twitterblue.svg' style={{ height: '30px', width: '30px' }}></img></a>

                        </div>
                        <div className='icon-child'>
                            <a href=''><img src='emailblue.svg' style={{ height: '30px', width: '30px' }} onClick={() => {
                                window.location.assign("mailto:sunny@zippy.fit");
                            }} ></img></a>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Contact_Us