import React, { useState } from 'react'
import './Login.css'
import { FaRegUser } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";


const Login = () => {
    const [action, setAction] = useState('');

    const registerLink = () =>{
        setAction('active')
    }

    const loginLink = () =>{
        setAction('')
    }

  return (
    <div className={`wrapper ${action}`}>
        <div className="form-box login">
            <form action="">
                <h1>Login</h1>
                <div className="imput-box">
                    <input type="text"  placeholder='UserName' required/>
                    <FaRegUser className="icon"/>   
                </div>
                <div className="imput-box">
                    <input type="password"  placeholder='Password' required/>
                    <FaLock className="icon"/>
                </div>
               <div className="remember-forget">
                <label><input type="checkbox" /> Remember me?</label>
                <a href="#">forget password</a>
               </div>
               <button>Login</button>
               <div className="Register-link">
                <p>Don't Have Account ? <a href="#" onClick={registerLink}>Register</a></p>
               </div>
            </form>
        </div>
        <div className="form-box register">
            <form action="">
                <h1>Register</h1>
                <div className="imput-box">
                    <input type="text"  placeholder='UserName' required/>
                    <FaRegUser className="icon"/>   
                </div>
                <div className="imput-box">
                    <input type="email"  placeholder='Email' required/>
                    <AiOutlineMail className="icon"/>
                </div>
                <div className="imput-box">
                    <input type="password"  placeholder='Password' required/>
                    <FaLock className="icon"/>
                </div>
               <div className="remember-forget">
                <label><input type="checkbox" />I agree to terms and conditions </label>
               </div>
               <button>Register</button>
               <div className="Register-link">
                <p>Already Have Account ?  <a href="#" onClick={loginLink}>Login</a></p>
               </div>
            </form>
        </div>
    </div>
  )
}

export default Login
