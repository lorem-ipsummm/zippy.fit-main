import React from "react";
import HeroSection from "./sections/HeroSection";
import Second from "./sections/Second";
import Firstwhite from "./sections/Firstwhite";
import Third from "./sections/Third";
import Fifth from './sections/Fifth';
import Fourth from './sections/Fourth';
import Seventh from './sections/Fifth';

import Sixth from './sections/Sixth';
import Cards from "./sections/Cards";
import Lastsecond from './sections/About';
import Lastthird from './sections/Lastthird';
import {useLocation} from "react-router-dom"
import Footer from './sections/Footer';
// import Cards from './sections/Cards';
// import HeroSection from './sections/HeroSection';
import Navbar from './sections/Navbar';
import { useEffect } from "react";


function Home(){
 

return(
    <>
    <Navbar/>
    <HeroSection/>
    <Second/>
  
    <Firstwhite/>
    <Third/>
    <Fourth/>
  <Fifth/>

  <Sixth/>
  <Cards/>
<Lastthird/>
  <Lastsecond />
  <Footer/>
    </>
)
}
export default Home;