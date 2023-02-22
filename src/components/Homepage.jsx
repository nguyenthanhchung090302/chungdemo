import React, { Component } from 'react';
import Content from './Contentr/Content';
import Navbar from './navb-3/Navbar';
import Newfim from './newfim/Newfim';
import Cartintorn from './cartintorn/Cartintorn';
import Form from './form/Form';
import Login from './login/Login';

 function Homepage() {
    return ( 
      <div className="home">
         <Navbar/>
         <Content/>
         <Newfim/>
         <Cartintorn/>
         <Form/>
         {/* <Login/> */}

      </div>
     );
 }
 
 export default Homepage;