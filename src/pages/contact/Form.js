import { useState } from "react";
// import axios from "axios";

// styles
import "./loadingSpinner.css";
import "./form.css";

export default function Rsvp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [verification, setVerification] = useState("");
  const [showNotification, setShowNotification] = useState(false);
  const [thirdNotification, setThirdNotification] = useState(false);
  const [fifthNotification, setFifthNotification] = useState(false);
  const [submitError, setSubmitError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      console.log({
        name,
        email,
        message,
        verification,
      });
      if (verification !== "") {
        setName("");
        setEmail("");
        setMessage("");
        return;
      }
      const axiosConfig = {
        method: "post",
        url: "http://localhost:3000/",
        data: {
          name,
          email,
          message,
          verification,
        },
      };
      //   const response = await axios(axiosConfig);
      // console.log(response.data, response.status);
      await new Promise((resolve) => setTimeout(resolve, 2000));

      setShowSuccessMessage(true);
    } catch (err) {
      console.error(err);
      setSubmitError(true);
    } finally {
      setIsLoading(false);
      setName("");
      setEmail("");
      setMessage("");
    }
  };

  const handleFirstBlur = () => {
    if (name === "") {
      setShowNotification(true);
    } else {
      setShowNotification(false);
    }
  };

  const handleThirdBlur = () => {
    if (email === "") {
      setThirdNotification(true);
    } else {
      setThirdNotification(false);
    }
  };

  const handleFifthBlur = () => {
    if (message === "") {
      setFifthNotification(true);
    } else {
      setFifthNotification(false);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="form">
        <h2 className="con">Contact Us</h2>

        <label>
          <span>Name:</span>
          <input
            required
            type="text"
            onChange={(e) => setName(e.target.value)}
            onBlur={handleFirstBlur}
            value={name}
          />
          {showNotification && <p className="notification">Name required</p>}
        </label>
        <label>
          <span>Email:</span>
          <input
            required
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            onBlur={handleThirdBlur}
            value={email}
          />
          {thirdNotification && <p className="notification">Email required</p>}
        </label>
        <label>
          <span className="small"> Message:</span>
          <textarea
            required
            type="textarea"
            onBlur={handleFifthBlur}
            onChange={(e) => setMessage(e.target.value)}
            value={message}
          />
          {fifthNotification && (
            <p className="notification">Message required</p>
          )}
        </label>
        <label className="honeypot">
          <span className="small">What is 12 minus 6?</span>
          <input
            type="text"
            onChange={(e) => setVerification(e.target.value)}
            value={verification}
            className="verification"
          />
        </label>
        <div className="load">
          {submitError ? (
            <button disabled className="btnFail">
              Failed to Submit
            </button>
          ) : isLoading || showSuccessMessage ? null : (
            <button
              className={`${"btn"} ${isLoading ? "loading" : null}`}
              type="submit"
              disabled={isLoading || showSuccessMessage}
            >
              <div className="loaded">Send</div>
            </button>
          )}

          {isLoading ? (
            <div class="lds-ring">
              <div></div>
            </div>
          ) : null}
          {showSuccessMessage && (
            <p className="successMessage">
              Your submission was successful! <br></br> We will get back to you
              as soon as possible.
            </p>
          )}
        </div>
      </form>
    </>
  );
}
