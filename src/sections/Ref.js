import React from 'react'
import { memo, useCallback, useEffect, useState } from "react"
import validateEmail from "./helper"
import toast, { Toaster } from 'react-hot-toast';
import {APIUrl}from "../api"
import axios from 'axios';
function Ref() {
    const notify = () => toast.success('Here is your toast.');
  const [joinEmail, setJoinEmail] = useState("")
  const [referYourEmail, setReferYourEmail] = useState("")
  const [referFriendEmail, setReferFriendEmail] = useState("")
  const [joinLoader, setJoinLoader] = useState(false)
  const [referLoader, setReferLoader] = useState(false)
  const [showReferButton, setShowReferButton] = useState(false)
  const onNextClick = () => {
    if (!validateEmail(referFriendEmail)) {
      // setReferFriendEmailError(validateEmail(referFriendEmail));
      return
    } else {
      setShowReferButton(true)
    }
  }
  const onChangeReferYourEmail = useCallback((e) => {
    setReferYourEmail(e.target.value)
  }, [])
  
  const onChangeReferFriendEmail = useCallback((e) => {
    setReferFriendEmail(e.target.value)
  }, [])

  const onChangeJoinEmail = useCallback((e) => {
    setJoinEmail(e.target.value)
  }, [])
  const onReferClick = async () => {
    if (
      !validateEmail(referFriendEmail) &&
      !validateEmail(referYourEmail)
    ) {
      // setReferFriendEmailError(validateEmail(referFriendEmail));
      // setReferYourEmailError(validateEmail(referYourEmail));
      return
    } else {
      // setReferFriendEmailError("");
      // setReferYourEmailError("");
      setReferLoader(true)

      const response = await axios.post(`${APIUrl}/api/v1/app/refer`, {
        refer_to: referFriendEmail,
        refer_by: referYourEmail,
        base_url: window.location.origin,
      })
      setReferLoader(false)
      if (response.data.status && response.data.code === 2005) {
        toast.success(response.data.message)
        setReferFriendEmail("")
        setReferYourEmail("")
        setShowReferButton(false)
      }
      if (response.data.status && response.data.code === 2004) {
        toast.error(response.data.message)
      }
    }
  }

  return (
    <div className="refer-wrapper">
        <div><Toaster/></div>
   {/* <button className="btn2" type="submit" onClick={()=>toast.success("hello")}>sadas</button> */}

    <div className="input-refer">
      <div className="input-label">
        Refer a friend <span></span>{" "}
      </div>
      <div className="input-base">
        <div className="input-style">
          <input
          className='inp'
            value={referFriendEmail}
            onChange={onChangeReferFriendEmail}
            placeholder="Friend's email"
          />
        </div>
        {!showReferButton && (
          <button
           
            className="btn2"
            onClick={()=>onNextClick()}
          >
            <div className="inside-button">
            Next
            </div>
          </button>
        )}
      </div>
      {showReferButton && (
        <div className="input-base">
          <div className="input-style">
            <input
            className='inp'
              value={referYourEmail}
              onChange={onChangeReferYourEmail}
              placeholder="Your Email"
            />
          </div>

          <button
          
            className="btn2"
            disabled={referLoader}
            onClick={
              onReferClick
            //   notify
             }
          >
            <div className="inside-button">
              
            
                  Refer
                {!referLoader ? (
                  <img src="send.svg" alt="send" />
                ) : (
                    <img height={30} src='loading.gif'/>
                )}
         
            </div>
          </button>
        </div>
      )} 
      
    </div>
  </div>
  )
}

export default Ref