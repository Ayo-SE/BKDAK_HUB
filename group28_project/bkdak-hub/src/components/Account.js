import React, { Component } from 'react'
import Firebase from '../firebase/firebase'

const auth = Firebase.instance().auth;
const db = Firebase.instance().db;

export default class Account extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: null,
            firstName: '',
            lastName: '',
            downloads: 0,
        };
    }

    componentDidMount() {
      auth.onAuthStateChanged((user) => {
        this.setState({ user: user, loading: false });
        if (user !== null) {
          this.getUserName(user.uid);
        }
      });
    }

    async getUserName(userUid) {
      const snap = await db.collection('users').where('userId', '==', userUid).get();
      snap.forEach((doc) => {
        const firstName = doc.data().firstName;
        const lastName = doc.data().lastName;
        this.setState({
          firstName: firstName,
          lastName: lastName,
        });
      });
    }

  render() {
    const {lastName, firstName} = this.state;
    return (
      <div>
          Account
          {lastName}
          {firstName}
      </div>
    )
  }
}
