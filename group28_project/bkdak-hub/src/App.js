import React, { Component } from 'react';
import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Nav from './components/Nav';
import Home from './components/Home';
import PropsRoute from './routing/PropsRoute';
import GuardedRoute from './routing/GuardedRoute';


class App extends Component {
// edits
  constructor(props) {
    super(props);

    this.state = {
      user: null,
      loading: true,
      role: '',
    };
  }

  render() {
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
  
}

export default App;
