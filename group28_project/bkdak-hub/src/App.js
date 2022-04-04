import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Nav from './components/Nav';
import Home from './components/Home';
import Firebase from './firebase/firebase';
import Login from './components/login/Login';
import Register from './components/login/Register';
import PropsRoute from './components/routing/PropsRoute';
import Help from './components/Help';
import GuardedRoute from './components/routing/GuardedRoute';

const auth = Firebase.instance().auth;
const db = Firebase.instance().db;

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: null,
      loading: true,
      role: '',
    };
  }

  componentDidMount() {
    auth.onAuthStateChanged((user) => {
      this.setState({ user: user, loading: false });
      if (user !== null) {
        this.getUserRole(user.uid);
      }
    });
  }

  async getUserRole(userUid) {
    const snap = await db.collection('user-roles').where('userId', '==', userUid).get();
    snap.forEach((doc) => {
      const role = doc.data().role;
      this.setState({
        role: role,
      });
    });
  }

  render() {
    const { user, role, loading } = this.state;
    return (
      <div>
        {loading ? (
          <div>Loading</div>
        ) : (
          <BrowserRouter>
              <Nav user={user} />
              <Route path="/" exact component={Home} />
              <PropsRoute path="/login" exact component={Login} user={user} />
              <PropsRoute path="/register" exact component={Register} user={user} />
              <Route path="/help" exact component={Help} />
          </BrowserRouter>
        )}
      </div>
    );
  }
}

export default App;
