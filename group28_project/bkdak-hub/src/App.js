import React, { Component } from 'react';
import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Nav from './components/Nav';
import Home from './components/Home';
import PropsRoute from './routing/PropsRoute';
import GuardedRoute from './routing/GuardedRoute';

function App(){
  return (
    <div>
      <BrowserRouter>
        <Nav />
        <Routes>
        <Route path="/" element={<Home />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
    
  );
}

export default App;
