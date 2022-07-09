
import React from 'react';
import Contact_Us from './sections/Contact_Us';
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Home"
import WhiteList from './sections/WhiteList';
import TnC from './sections/TnC';
import Privacy_policy from './sections/Privacy_policy';
import {Navigate} from "react-router-dom"
import Ref from './sections/Ref';
function App() {
  // var ip = require("ip");
  // console.dir ( ip.address() );
  return (
    <>
   
   <BrowserRouter>
    <Routes>
    <Route exact path="/" element={<Navigate to="/home"/>} />
    <Route path="/refer" element={<Ref />} />

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
