import React, { useEffect } from 'react'
import "./Contact_Us.css"
import Footer from './Footer'
import Navbar from './Navbar'
import "./Whitelist.css"

function Contact_Us() {


    useEffect(() => {
        window.scrollTo(0, 0);
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
                    <span> We would love to hear from you!</span>
                    <form>
                        <input placeholder='Name' type='text' />
                        <input placeholder='Email address' type='text' />

                        <input placeholder='Message' type='text' />
                        <button className='btn' type='submit'>Send</button>
                    </form>
                    <span> Or write us on</span>
                    <div className='icons'>
                        <div className='icon-child'>
                            <a href='https://discord.com/invite/2FT6R5n52e' target="_blank"><img src='discordblue.svg' style={{ height: '30px', width: '30px' }}></img></a>
                            {/* <span>Join Our Discord </span> */}
                        </div>
                        <div className='icon-child'>
                            <a href='https://discord.com/invite/2FT6R5n52e' target="_blank"><img src='twitterblue.svg' style={{ height: '30px', width: '30px' }}></img></a>
                            {/* <span>Join Our Discord </span> */}
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