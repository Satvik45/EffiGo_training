import React from "react";
import './loginSignup.css'
import email from './email.png'
import password from './password.png'
import person from './person.png'


const LoginSignup = ()=> {
    return (
        <div className="container">
            <div className="header">
                <div className="text">Sign Up</div>
                <div className="underline"></div>
            </div>
            <div className="inputs">
                <div className="input">
                    <img src={person} alt="" />
                    <input type="text" placeholder="Name"/>
                </div>
                <div className="input">
                    <img src={email} alt="" />
                    <input type="email" placeholder="Email Id"/>
                </div>
                <div className="input">
                    <img src={password} alt="" />
                    <input type="password" placeholder="Password"/>
                </div>
            </div>
            <div className="forgot-password">Forgot Password? <span> Cick Here!</span></div>
                <div className="submit-container">
                    <div className="submit">Submit</div>
                    <div className="login">Login</div>

                </div>
        </div>

            
    );
}

export default LoginSignup