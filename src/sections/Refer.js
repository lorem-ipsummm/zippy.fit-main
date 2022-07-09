import { memo, useCallback, useEffect, useState } from "react"
import joinwaitlist from "../../assets/images/joinwaitlist.svg"


import { validateEmail } from "../helper/index"

import "./style.css"
import axios from "axios"
import { APIUrl } from "../../api"
import toast, { Toaster } from 'react-hot-toast';

const notify = () => toast('Here is your toast.');
// toast.configure();
function Refer() {

  const [joinEmail, setJoinEmail] = useState("")
  const [referYourEmail, setReferYourEmail] = useState("")
  const [referFriendEmail, setReferFriendEmail] = useState("")
  const [joinLoader, setJoinLoader] = useState(false)
  const [referLoader, setReferLoader] = useState(false)

  const [showReferButton, setShowReferButton] = useState(false)

  const [joinEmailError, setJoinEmailError] = useState("")
  // const [referYourEmailError, setReferYourEmailError] = useState("");
  // const [referFriendEmailError, setReferFriendEmailError] = useState("");

  const onChangeReferYourEmail = useCallback((e) => {
    setReferYourEmail(e.target.value)
  }, [])

  const onChangeReferFriendEmail = useCallback((e) => {
    setReferFriendEmail(e.target.value)
  }, [])

  const onChangeJoinEmail = useCallback((e) => {
    setJoinEmail(e.target.value)
  }, [])

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const onJoinWaitlistClick = async () => {
    if (validateEmail(joinEmail).length !== 0) {
      setJoinEmailError(validateEmail(joinEmail))
      return
    } else {
      setJoinEmailError("")
      setJoinLoader(true)
      const response = await axios.post(`${APIUrl}/api/v1/app/join-waitlist`, {
        email: joinEmail,
      })
      setJoinLoader(false)
      if (response.data.status && response.data.code === 2000) {
        // toast(response.data.message, { type: "success", theme: "colored" })
        setJoinEmail("")
      }
      if (response.data.status && response.data.code === 2001) {
        // toast(response.data.message, { type: "error", theme: "colored" })
      }
    }
  }

  const onReferClick = async () => {
    if (
      validateEmail(referFriendEmail).length !== 0 ||
      validateEmail(referYourEmail).length !== 0
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
        // toast(response.data.message, { type: "success", theme: "colored" })
        setReferFriendEmail("")
        setReferYourEmail("")
        setShowReferButton(false)
      }
      if (response.data.status && response.data.code === 2004) {
        // toast(response.data.message, { type: "error", theme: "colored" })
      }
    }
  }

  const onNextClick = () => {
    if (validateEmail(referFriendEmail).length !== 0) {
      // setReferFriendEmailError(validateEmail(referFriendEmail));
      return
    } else {
      setShowReferButton(true)
    }
  }

  return (
  
    <div className="refer-wrapper">
   
    
      <div className="input-refer">
        <div className="input-label">
          Refer a friend <span></span>{" "}
        </div>
        <div className="input-base">
          <div className="input-style">
            <Input
              value={referFriendEmail}
              onChangeInput={onChangeReferFriendEmail}
              placeholder="Friend's email"
            />
          </div>
          {!showReferButton && (
            <button
              style={{
                background: "#F57600",
                color: "white",
                padding: "15px 50px",
                borderRadius: "15px",
                height: "60px",
              }}
              className="zippy-button"
              onClick={onNextClick}
            >
              <div className="inside-button">
                <div className="inside-button-text">Next</div>
              </div>
            </button>
          )}
        </div>
        {showReferButton && (
          <div className="input-base">
            <div className="input-style">
              <Input
                value={referYourEmail}
                onChangeInput={onChangeReferYourEmail}
                placeholder="Your Email"
              />
            </div>

            <button
              style={{
                background: "#F57600",
                color: "white",
                padding: "15px 35px",
                borderRadius: "15px",
                height: "60px",
              }}
              className="zippy-button"
              disabled={referLoader}
              onClick={
                // onReferClick
                notify
               }
            >
              <div className="inside-button">
                <div className="inside-button-text">Refer</div>
                <div className="inside-button-image">
                  {!referLoader ? (
                    <img src={send} alt="send" />
                  ) : (
                    <i className="fas fa-spinner fa-spin"></i>
                  )}
                </div>
              </div>
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

export default Refer