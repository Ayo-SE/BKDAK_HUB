import React, { Component } from 'react'
import Firebase from '../firebase/firebase'
const auth = Firebase.instance().auth;

export default class Account extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: props.user
        };
    }

  render() {
    return (
      <div>
          Account
          {console.log(this.user)}
      </div>
    )
  }
}
