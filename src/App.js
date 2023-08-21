import './App.css';
import Nav from './Components/Nav';
import React from 'react';
import {Routes,Route} from 'react-router-dom';
import Home from './Components/Home';
import About from './Components/About';
import Contact from './Components/Contact';
// import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      {/* navbar */}
      <Nav />
      
      <Routes>
        <Route path='/home' Component={Home}></Route>
        <Route path='/about' Component={About}></Route>
        <Route path='/contact' Component={Contact}></Route>
      </Routes>
    </div>
  );
}

export default App;
