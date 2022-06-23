import React from "react";
// import Box from "@mui/material/Box";
// import { Container } from "@mui/material";
// import Typography from '@mui/material/Typography';
// import Button from '@mui/material/Button';
// import { Grid } from "@mui/material";
import demo1 from '../images/demo1.png'
import demo4 from '../images/demo4.png'
import "./About.css"


function Lastsecond() {

  const [indoor, setIndoor] = React.useState(false);


  return (
    <>
      <div className="abt-cont">
        <div className="footer-info" id="about">
          <div className="title">
            zippy is
            our passion. that's really about us!
          </div>
          <div className="foot-para">
            We are a team of 'Athletes First' and 'Technologists Later'. At Zippy - Our only job is to make fitness and all things around it simple, sustainable and sticking for our users. We achieve this by combining the principles of technology including AI, blockchain, gamification fused with behavioral & nudge economics and deeper subject matter expertise on fitness and wellness. 
            <br /><br />
              Our core team comprises serial entrepreneurs with decades of experience in building category leading ventures, technologists with decades of experience in building complex state of the art tech products and medical professionals with decades of experience in wellness and fitness ventures. 
            <span>
              <br /><br />At Zippy- <br />
              Our vision is to make running as immersive and entertaining as playing a console game; yet at the same time as scientific and effective as an Olympians' prep work.

            </span>
          </div>
        </div>

        <div className="profiles-cont">
          <div className="profile-card">
            <div className="profile-img">
              <span style={{ width: '250px'}}>
              <br/>Sunny is a serial entrepreneur with 14 years of experience in building technology focused businesses in new categories. <br/><br/>At Zippy - Sunny is focused on building a strong fitness focused venture.
              </span>
              <img src="sunny.jpg"></img>

            </div>
            <div className="profile-info" >
              <div >
                <span style={{ fontSize: '1.2rem', fontWeight: '700' }}>Sunny Makroo</span>
                <br />
                <span> Founder</span>
              </div>
              <a href="https://www.linkedin.com/in/sunnymakroo/" target="_blank"><img height={30} src="linkedin.png"></img></a>
            </div>
          </div>
          <div className="profile-card">
            <div className="profile-img">
              <span>
                Ravi is a prolific Investor and a Serial Entrepreneur and has successfully built companies and has helped speed scale multiple technology startups. Through his Family Office - he has invested in start-ups & venture funds that span interests in Technology investments, Real estates, education institutes & infrastructure. He is a pro athlete and a swimming champion.

              </span>
              <img src="RaviReddy.png"></img>

            </div>
            <div className="profile-info" >
              <div >
                <span style={{ fontSize: '1.2rem', fontWeight: '700' }}> Ravi Reddy</span>
                <br />
                <span>Advisor & Investor </span>
              </div>
              <a href="https://www.linkedin.com/in/ravi-reddy-investor/" target="_blank"><img height={30} src="linkedin.png"></img></a>
            </div>
          </div>


          <div className="profile-card">
            <div className="profile-img">
              <span >
                <br/>Dr. Rath is an astute investor, Physician-Scientist, Behavioral Expert. He specializes in building innovative health solutions at the intersection of modern technology and the deep domain of medical sciences. Dr. Rath brings his deep expertise as well as innovation expertise to build great products with deeper consumer insights at Zippy.

              </span>
              <img src="SatishRath.jpg"></img>

            </div>
            <div className="profile-info" >
              <div >
                <span style={{ fontSize: '1.2rem', fontWeight: '700' }}>Dr. Satish Rath</span>
                <br />
                <span>Advisor</span>
              </div>
              <a href="https://www.linkedin.com/in/dr-satish-prasad-rath-abb3404b/" target="_blank"><img height={30} src="linkedin.png"></img></a>
            </div>
          </div>
        </div>
        <br /><br /><br />
      </div>
    </>
  )
}

export default Lastsecond;
