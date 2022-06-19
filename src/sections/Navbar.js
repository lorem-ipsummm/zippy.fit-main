import React, { useState } from 'react'
import "./Navbar.css"
import { Outlet, Link,useNavigate } from "react-router-dom";
function Navbar() {
  const [linksopen, setlinksopen] = useState(true);
  // console.log();
  const nav=useNavigate();
const path=document.location.pathname
  return (
    <div className='navbar' >
      <div className='menu'>
      <img src='logowhite.svg' className='zippylogo'></img>
      <div className="bread" onClick={()=>setlinksopen(!linksopen)} >
        <img height={30} src='menu.svg'>
        </img>
      </div>
      </div>
      <div className={`links ${linksopen?"closed":""}`}>
        <a  onClick={(e)=>{setlinksopen(!linksopen)
     if(path=='/home')
      { document.querySelector("#howitworks")
    .scrollIntoView({ behavior: "smooth" });
  }
  else nav('/home#howitworks')
  
        
        }}>How it works</a>
        <a  onClick={()=>{setlinksopen(!linksopen)
         if(path=='/home')
         { document.querySelector("#about")
       .scrollIntoView({ behavior: "smooth" });
     }
     else nav('/home#about')
        }}>About Us</a>


<Link to={{pathname:"/whitelist",}}><a href='/contact-us' onClick={()=>setlinksopen(!linksopen)}>
          
          Contact Us
          
          </a></Link>
        

          <Link to={{pathname:"/whitelist",}}><a href='/contact-us' onClick={()=>setlinksopen(!linksopen)}>
          whitelist
          
          </a></Link>
       
        
        <a href='#' onClick={()=>setlinksopen(!linksopen)}>FAQs</a>
        <a href='# ' onClick={()=>setlinksopen(!linksopen)}>WhitePaper</a>

      </div>
<Outlet/>
      </div>
  )
}

export default Navbar;