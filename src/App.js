
import React from 'react';
import First from './sections/First';
import Second from './sections/Second';
import Third from './sections/Third';
import Fourth from './sections/Fourth';
import Contact_Us from './sections/Contact_Us';
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
import TnC from './sections/TnC';
import Privacy_policy from './sections/Privacy_policy';
import { home } from 'fontawesome';
import {Navigate,useLocation} from "react-router-dom"
function App() {

  return (
    <>
   
   <BrowserRouter>
    <Routes>
    <Route exact path="/" element={<Navigate to="/home"/>} />

        <Route path="/Home" element={<Home />} />
        <Route path="/Whitelist" element={<WhiteList />} />
<Route path="/ContactUs" element={<Contact_Us/>}/>
<Route path="/TnCs" element={<TnC/>}/>
<Route path="/PrivacyPolicy" element={<Privacy_policy/>}/>
</Routes>
    </BrowserRouter>
   
   
    </>
   
  
  );
}

export default App;
