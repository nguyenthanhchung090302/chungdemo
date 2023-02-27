import React, { Component } from "react";

import "./App.css";
import Homepage from "./components/Homepage";
import Login from "./components/login/Login";
import { Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className='App'>
      
      <Routes>
      <Route path='/' element={<Homepage />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
