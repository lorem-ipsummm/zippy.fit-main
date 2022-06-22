import * as React from 'react';
import { Link } from 'react-router-dom';
// import './lastthird.css';
// import { styled } from '@mui/material/styles';
// import Grid from '@mui/material/Grid';
// import Paper from '@mui/material/Paper';
// import Box from '@mui/material/Box';
// import Typography from '@mui/material/Typography';
// import { display } from '@mui/system';
import "./stats.css"


function Lastthird() {


    return (
        <>
            <div className='stats'>

                <h4 style={{ marginTop: "5%", marginLeft: "9%" }}>we've completed</h4>
                <div className='stat-child'>
                    <div className='stat-info'>
                        <span >12.5k</span>
                        <span>white
                            <br />listed</span>
                    </div>
                    <div className='stat-info'>
                        <span>1.2k</span>

                        <span>down<br />loads</span>
                    </div>
                </div>
                
             
                                <div className='stat-star'>
                    &#9733;
                    &#9733;
                    &#9733;
                    &#9733;
                    &#9733;
                    <br />
                    <span>
                        “zippy is a great app for tracking & mapping all your runs & make it easy to track distance,<br/>time, speed, elevations & calories burned- all the stats that matter. The right app which acts <br/>as a virtual trainer or training partner to keep you motivated & accountable.”
                    </span>
                    <span style={{fontWeight: '600'}}>
                        shweta sharma
                    </span>
                    <br/>
                    <Link to={{ pathname: "/whitelist", }}>
                    <button className='btn'>
                        Whitelist Me
                    </button>
                    </Link>
                   

                </div>
            </div>



        </>
    );
}


export default Lastthird;
