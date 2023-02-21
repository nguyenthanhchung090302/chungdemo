import React, { Component } from "react";
import "./Navbar.css";
import logo from "./assets/Capture.PNG"


function Navbar() {
  return (
    <div className='nav-bar'>
      <nav className='navbar navbar-expand-lg bg-body-tertiary'>
        <div className='container-fluid'>
          <a className='navbar-brand' href='#'>
            <img src={logo} alt="" width="150px" />
          </a>
          <button
            className='navbar-toggler'
            type='button'
            data-bs-toggle='collapse'
            data-bs-target='#navbarNavDropdown'
            aria-controls='navbarNavDropdown'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            <span className='navbar-toggler-icon'></span>
          </button>
          <div className='collapse navbar-collapse' id='navbarNavDropdown'>
            <ul className='navbar-nav'>
            <li className='nav-item dropdown'>
                <a
                  className='nav-link dropdown-toggle'
                  href='#'
                  role='button'
                  data-bs-toggle='dropdown'
                  aria-expanded='false'
                >
                  Home
                </a>
                <ul className='dropdown-menu'>
                  <li>
                    <a className='dropdown-item' href='#'>
                      Home slideshow bg
                    </a>
                  </li>
                  <li>
                    <a className='dropdown-item' href='#'>
                      Home static bg
                    </a>
                  </li>
                  
                </ul>
              </li>
              <li className='nav-item dropdown'>
                <a
                  className='nav-link dropdown-toggle'
                  href='#'
                  role='button'
                  data-bs-toggle='dropdown'
                  aria-expanded='false'
                >
                  CATALOG
                </a>
                <ul className='dropdown-menu'>
                  <li>
                    <a className='dropdown-item' href='#'>
                      Catalog Grid
                    </a>
                  </li>
                  <li>
                    <a className='dropdown-item' href='#'>
                      Catalog List
                    </a>
                  </li>
                  <li>
                    <a className='dropdown-item' href='#'>
                      Details Movie
                    </a>
                  </li>
                  <li>
                    <a className='dropdown-item' href='#'>
                      Details TV Series
                    </a>
                  </li>
                </ul>
              </li>
              <li className='nav-item'>
                <a className='nav-link' href='#'>
                  PRICING PLAN
                </a>
              </li>
              <li className='nav-item'>
                <a className='nav-link' href='#'>
                  HELP
                </a>
              </li>
              <li className='nav-item dropdown'>
                <a
                  className='nav-link'
                  href='#'
                  role='button'
                  data-bs-toggle='dropdown'
                  aria-expanded='false'
                  color="white"
                >
                  . . .
                </a>
                <ul className='dropdown-menu'>
                  <li>
                    <a className='dropdown-item' href='#'>
                      About
                    </a>
                  </li>
                  <li>
                    <a className='dropdown-item' href='#'>
                      Proflie
                    </a>
                  </li>
                  <li>
                    <a className='dropdown-item' href='#'>
                      Sign In
                    </a>
                  </li>
                  <li>
                    <a className='dropdown-item' href='#'>
                      Sign Up
                    </a>
                  </li>
                  <li>
                    <a className='dropdown-item' href='#'>
                      Forgot Password
                    </a>
                  </li>
                  <li>
                    <a className='dropdown-item' href='#'>
                      Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a className='dropdown-item' href='#'>
                      Contacts
                    </a>
                  </li>
                  <li>
                    <a className='dropdown-item' href='#'>
                      A404 Page
                    </a>
                  </li>
                </ul>
              </li>
              <li className='nav-item dropdown'>
                <a
                  className='nav-link'
                  href='#'
                  role='button'
                  data-bs-toggle='dropdown'
                  aria-expanded='false'
                  color="white"
                >
                  <i class="fa-solid fa-magnifying-glass"></i>
                </a>
                <ul className='dropdown-menu'>
                  <li>
                    <a className='dropdown-item' href='#'>
                      <input type="text" placeholder="tìm kiếm"/>
                    </a>
                  </li>
                </ul>
              </li>
              <li className='nav-item dropdown'>
                <a
                  className='nav-link'
                  href='#'
                  role='button'
                  data-bs-toggle='dropdown'
                  aria-expanded='false'
                  color="white"
                >
                  EN
                </a>
                <ul className='dropdown-menu'>
                  <li>
                    <a className='dropdown-item' href='#'>
                      English
                    </a>
                  </li>
                  <li>
                    <a className='dropdown-item' href='#'>
                      Spanish
                    </a>
                  </li>
                  <li>
                    <a className='dropdown-item' href='#'>
                      Russian
                    </a>
                  </li>
                 
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
