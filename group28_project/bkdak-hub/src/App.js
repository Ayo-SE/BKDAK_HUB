import React, { Component } from 'react';
import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Nav from './components/Nav';
import Home from './components/Home';
// import Firebase from './firebase/firebase';
import PropsRoute from './routing/PropsRoute';
import GuardedRoute from './routing/GuardedRoute';

// const auth = Firebase.instance().auth;
// const db = Firebase.instance().db;

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
  // componentDidMount() {
  //   auth.onAuthStateChanged((user) => {
  //     this.setState({ user: user, loading: false });
  //     if (user !== null) {
  //       this.getUserRole(user.uid);
  //     }
  //   });
  // }

  // async getUserRole(userUid) {
  //   const snap = await db.collection('user-roles').where('userId', '==', userUid).get();
  //   snap.forEach((doc) => {
  //     const role = doc.data().role;
  //     this.setState({
  //       role: role,
  //     });
  //   });
  // }

  render() {
    // const { user, role, loading } = this.state;
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
