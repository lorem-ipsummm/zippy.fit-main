
import React from 'react';
import First from './sections/First';
import Second from './sections/Second';
import Third from './sections/Third';
import Fourth from './sections/Fourth';
import Fifth from './sections/Fifth';
import Sixth from './sections/Sixth';
// import Seventh from './sections/seventh';
import HeroSection from './sections/HeroSection';
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import Firstwhite from './sections/Firstwhite';
import "./App.css";
import Home from "./Home"
import Lastsecond from './sections/About';
import Lastthird from './sections/Lastthird';
import Footer from './sections/Footer';
import Cards from './sections/Cards';
import Navbar from './sections/Navbar';
import WhiteList from './sections/WhiteList';
import { home } from 'fontawesome';
import {Navigate} from "react-router-dom"
function App() {
  return (
    <>
   
   <BrowserRouter>
    <Routes>
    <Route path="/" element={<Navigate to="/home"/>} />

        <Route path="/Home" element={<Home />} />
        <Route path="/Whitelist" element={<WhiteList />} />

        {/* /contact-us */}
     {/* </Route> */}


{/* 
<Route path='/' element={ <Navbar/>} >
<Route path='home' element={  <WhiteList/>}/>

    <Route path='/h' element={  <HeroSection/>}/> */}


{/* </Route> */}
    
{/*   
    
  <Footer/> */}

    </Routes></BrowserRouter>
   
   
    </>
   
  
  );
}

export default App;
