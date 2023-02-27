import React, { Component } from 'react';
import "./register.css"

function Register() {
    return ( 
        <>
       <div className="tongform1">
                <div className="taito">
                    <div className="logo">
                        <img src="http://flixgo.volkovdesign.com/main/img/logo.svg" alt="" />
                    </div>
                    <form >
                        <div className="input1">
                            <input type="text" name="name" placeholder="Name" />
                        </div>
                        <div className="input2">
                            <input type="email" name="email" placeholder="Email" />
                        </div>
                        <div className="input3">
                            <input type="password" name="password" placeholder="Password" />
                        </div>
                        <div className="chatbook1">
                            <input type="checkbox" name="" id="" />
                            <div className="proactiti">
                                <label>I agree to the !</label>
                                <p>Privacy Policy</p>
                            </div>
                        </div>
                        <div className="signin">
                            <button>SIGN IN</button>
                        </div>
                    </form>
                    <div className="dont">
                        <p>Already have an account?</p>
                        <a href="/login">Sign up!</a>
                    </div>
                </div>
            </div>
        </>

    );
}

export default Register;