import React, {useState} from 'react';
import Footer from './Footer'; 
import Navbar from './Navbar';
import { useEffect } from 'react';
import "./Whitelist.css"
function WhiteList() {

    const [user, setUser] = useState({
        email: " ",
    });
    
    let name, value;

    const getUserData =(event) => {
        name= event.target.name;
        value= event.target.value;

        setUser({ ...user, [name]: value});
    };
    const postData = async(event) => {
        event.preventDefault();

        const {email } = user;
console.log(email);
        var data = new FormData();
        data.append('email',email);
console.log(data)    
        if(email){
            const res = await fetch("https://zippydata-2438f-default-rtdb.firebaseio.com/zippydataform.json",{
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({email}),
        
        });

        if(res){
            setUser({
                email:"",
            });

            alert("Whitelisted Successfully");
            }
        }
        else{
            alert("Enter the email!");
        }

        
    };



    return (
<>
<Navbar/>

<div className='whitelist-cont'>

<div className='whitelist-img'>
    <img src='whitelist.png' alt=''></img>

</div>
<div className='whitelist-info'>
    <div className='titlex'>
        join other 2567<br/>
        runners globally.
    </div>
    <span>
        <br/>Hey there! so glad to have you part of our growing community.
        Please click the link below so that we know you are, well, you!</span>
    <form method='POST'>
        <input type="text" name= "email" placeholder='adam.smith@example.com'
        value={user.email}
        onChange={getUserData} 
        autoComplete='off'
        required/>
        <button type='submit' onClick={postData}> Get WhiteListed </button>
    </form>
    <div className='whitelist-icons'>
        <span>
            bump me up on the whitelist
        </span>
        <div className='icons'>
            <div className='icon-child'>
                <img height={10} src='DISCORD-BLUE.svg' alt=''></img>
                <span>Join Our Discord </span>
            </div>
            <div className='icon-child'>
                <img height={10} src='TWITTER-BLUE.png' alt=''></img>
                <span>tweet about us</span>
            </div>                        <div className='icon-child'>
                <img height={10} src='REFER-BLUE.png' alt=''></img>
                <span>Join Our Discord </span>
            </div>
        </div>

    </div>
</div>
</div>
< Footer/>


</>

    )
}

export default WhiteList