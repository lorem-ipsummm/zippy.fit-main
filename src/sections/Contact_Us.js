import React, { useEffect } from 'react'
import "./Contact_Us.css"
import Footer from './Footer'
import Navbar from './Navbar'
import "./Whitelist.css"

function Contact_Us() {
    

    useEffect(()=>{
        window.scrollTo(0,0);
    })

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
                <span> feel free to drop us a line!</span>
                <form>
                    <input placeholder='name' type='text' />
                    <input placeholder='email address' type='text' />

                    <input placeholder='message' type='text' />
                    <button className='btn' type='submit'>send</button>
                </form>
                <div className='icons'>
                    <div className='icon-child'>
                        <img src='discord.svg'></img>
                        {/* <span>Join Our Discord </span> */}
                    </div>
                    <div className='icon-child'>
                        <img src='discord.svg'></img>
                        {/* <span>Join Our Discord </span> */}
                    </div>
                    <div className='icon-child'>
                        <img src='discord.svg'></img>
                    </div>
                </div>
            </div>
        </div>
        <Footer/>
        </>
    )
}

export default Contact_Us