import React, { Component } from 'react';
import "./Login.css"
 function Login() {
    return ( 
        <div className='chung'>
         <div className="tongform1">
        <div className="taito1">
          <div className="logo-2">
            <img src="http://flixgo.volkovdesign.com/main/img/logo.svg" alt="" />
          </div>
            <div className="input1">
              <input type="email" name="user" placeholder="Email" />
            </div>
            <div className="input2">
              <input type="password" name="password" placeholder="Password" id="password" />
            </div>
            <div className="chatbook">
              <input type="checkbox" name="" id="" />
              <label>Remember Me</label>
            </div>
            <div className="signin-1">
              <button>SIGN IN</button>
            </div>
          <div className="dont">
            <p>Don't have an account?</p>
            <a href="/sign">Sign up!</a>
          </div>
          <div className="forgot">
            <a href="/resetemail">Forgot password?</a>
          </div>
        </div>
      </div>
        </div>
     );
 }
 
 export default Login;