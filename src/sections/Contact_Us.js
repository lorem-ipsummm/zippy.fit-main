import React, { useEffect, useState } from 'react'
import "./Contact_Us.css"
import Footer from './Footer'
import { APIUrl } from "./../api";
import Navbar from './Navbar'
import { isEmpty, validateEmail } from "./helper";
import "./Whitelist.css"
import axios from "axios";
import async from 'hbs/lib/async';
import { Toaster } from 'react-hot-toast';
import toast from 'react-hot-toast';
import { useRef } from 'react';
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

 const nameinp = useRef();
 const emailinp = useRef();
 const msginp = useRef();


    const onSubmit =async () => {
 
       if (!isEmpty(name)){
 
         nameinp.current.reportValidity();
         return;
         }

         else if(!validateEmail(email)){ 
emailinp.current.reportValidity();
return;

          }
                      
                    else  if (!isEmpty(message)){
           

                        msginp.current.reportValidity();
                   return;
                                  }

else {
       var data = new FormData();
        data.append('email',email);
    
        {const response = await axios.post(`${APIUrl}/api/v1/app/contact`, {
            email:email,
            message:message,
            name: name
          })
    console.log(response)
          if (response.data.code === 2006) {
            toast.success(response.data.message);
          
          
          }
           else toast.error(response.data.message)
        
}

    
        

      
    
}


}
        // } else {
            // setContactLoader(true);
            // const response = await axios.post(`${APIUrl}/api/v1/app/contact`, {
            //   name,
            //   email,
            //   message,
            // });
            // if (response.data.status && response.data.code === 2006) {
            //   alert("Message sent succesfully")
            //   setName("");
            //   setEmail("");
            //   setMessage("");
            
            // }
          
        // }



    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);


    return (
        <>
            <Navbar />
            <div><Toaster/></div>
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
                        <input required ref={nameinp} value={name} onChange={onNameChange} placeholder='Name' type='text' />
                        <input required ref={emailinp} type="email" onChange={onEmailChange}
                            value={email} placeholder='Email address'  />
                        <input required ref={msginp} value={message}
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