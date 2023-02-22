import React, { Component } from 'react';
import "./Login.css"
 function Login() {
    return ( 
        <div>
            <div id="chung-login-screen">
        <div id="chung-login-form-container">
           
            <h2 class="chung-header">Sign In FLIXGO</h2>
            <div class="chung-error" id="server-error-message"></div>
            <form id="chung-login-form">
                <div class="chung-form-first-part">
                    <input type="text" name="email" placeholder="Email Đăng Nhập"/>
                    <div class="chung-error" id="email-error-message"></div>
                    <input type="password" name="password" placeholder="Mật Khẩu"/>
                    <div class="chung-error" id="password-error-message"></div> 
                    <div id = 'chung-reset-password-link'>Quên mật khẩu?</div>                      
                    <input type="submit" value="Đăng Nhập"/>
                </div>                    
            </form>
            <div id="chung-sign-up">
                <p id = 'chung-register-link'>Chưa có tài khoản  <span>ĐĂNG KÝ NGAY</span></p>                
               
            </div>
        </div>
    </div>
        </div>
     );
 }
 
 export default Login;