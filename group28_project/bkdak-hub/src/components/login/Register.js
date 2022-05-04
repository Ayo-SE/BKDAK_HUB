/*
PURPOSE OF THIS PAGE:
This page serves as the register page for users to register with "The Hub"
 */

import React, { Component } from 'react';
import './styles.css';
import Firebase from '../../firebase/firebase';
import ShowIf from '../ShowIf';
const auth = Firebase.instance().auth;


export default class Register extends Component {

  constructor(props) {
    super(props);

    if (this.props.user) {
      this.props.history.push('/');
    }

    this.auth = Firebase.instance().auth;
    this.db = Firebase.instance().db;

    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      role: 'users',
    };
  }
  onNameChanged(e) {
    this.setState({
      firstName: e.target.value,
    });
  }
  onLastNameChanged(e) {
    this.setState({
      lastName: e.target.value,
    });
  }
  onEmailChanged(e) {
    this.setState({
      email: e.target.value,
    });
  }

  onPasswordChanged(e) {
    this.setState({
      password: e.target.value,
    });
  }

  async register(e) {
    e.preventDefault();

    try {
      const {email, password} = this.state;
      await auth.createUserWithEmailAndPassword(email, password);

      await this.db.collection('user-roles').doc().set({
          userId: this.auth.currentUser.uid,
          role: this.state.role,
      });

      if (this.state.role === 'users') {
        await this.db.collection('users').doc().set({
          userId: this.auth.currentUser.uid,
          firstName: this.state.firstName,
          lastName: this.state.lastName,
          downloads: 0,
          apps: '',
        });
      }

      this.props.history.push('/'); // subject to change
    } catch(err) {
      this.setState({ error: err.message });
      
    }
  }

  render() {
    const {error} = this.state;
    return (
      <div className="container col-7 mt-2">
        <div className="p-5"></div>
        <div className="card card-body text-center">
          <form onSubmit={(e) => this.register(e)}>
            <h1 className="h3 mt-3 text-center">Please Register</h1>
            <div className="p-3 body">
              <input
                value={this.state.firstName}
                onChange={(e) => this.onNameChanged(e)}
                type="text"
                className="form-control"
                placeholder="First Name"
              />
            </div>
            <div className="p-3 body">
              <input
                value={this.state.lastName}
                onChange={(e) => this.onLastNameChanged(e)}
                type="text"
                className="form-control"
                placeholder="Last Name"
              />
            </div>
            <div className="p-3 body">
              <input
                value={this.state.email}
                onChange={(e) => this.onEmailChanged(e)}
                type="email"
                className="form-control"
                placeholder="Email Address"
              />
            </div>
            <div className="p-3 body">
              <input
                value={this.state.password}
                onChange={(e) => this.onPasswordChanged(e)}
                type="password"
                className="form-control"
                placeholder="Password"
              />
            </div>

            <ShowIf isTrue={error}>
              <div className="alert alert-danger mt-4">
                  {error}
              </div>
            </ShowIf>
            
            <div className="text-center mt-4 body">
              <button className="btn btn-primary px-5" type="submit">
                Register
              </button>
            </div>
          </form>
        </div>

        <div className="p-5"></div>
      </div>
    );
  }
}
