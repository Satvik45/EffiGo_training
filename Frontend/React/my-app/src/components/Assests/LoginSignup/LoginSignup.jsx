import React, { useState } from "react";
import "./loginSignup.css";
import email from "./email.png";
import password from "./password.png";
import person from "./person.png";
import authService from "../../authService";

const LoginSignup = () => {
  const [action, setAction] = useState("Sign Up");
  const [name, setName] = useState("");
  const [emailValue, setEmailValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");
  const [error, setError] = useState("");

  const handleFormSubmit = async () => {
    try {
      if (action === "Login") {
        await authService.login(emailValue, passwordValue);
        console.log("Login successful");
      } else {
        await authService.signup(name, emailValue, passwordValue);
        console.log("Signup successful");
      }
      setError(""); // Reset error state on successful submission
    } catch (error) {
      setError(error.message);
      console.error("Authentication error", error);
    }
  };

  return (
    <div className="container">
      <div className="header">
        <div className="text">{action}</div>
        <div className="underline"></div>
      </div>
      <div className="inputs">
        {action === "Login" ? (
          <div> </div>
        ) : (
          <div className="input">
            <img src={person} alt="" />
            <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
        )}

        <div className="input">
          <img src={email} alt="" />
          <input
            type="email"
            placeholder="Email Id"
            value={emailValue}
            onChange={(e) => setEmailValue(e.target.value)}
          />
        </div>
        <div className="input">
          <img src={password} alt="" />
          <input
            type="password"
            placeholder="Password"
            value={passwordValue}
            onChange={(e) => setPasswordValue(e.target.value)}
          />
        </div>
        <div className="forgot-password">
          Forgot Password? <span> Click Here!</span>
        </div>
        <div className="submit-container">
          <div
            className={action === "Login" ? "submit gray" : "submit"}
            onClick={() => {
              setAction("Sign Up");
              handleFormSubmit();
            }}
          >
            Sign Up
          </div>
          <div
            className={action === "Sign Up" ? "submit gray" : "submit"}
            onClick={() => {
              setAction("Login");
              handleFormSubmit();
            }}
          >
            Login
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginSignup;
