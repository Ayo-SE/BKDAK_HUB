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
            loading: 0,
        };
    }

    componentDidMount() {
      auth.onAuthStateChanged((user) => {
        this.setState({ user: user, loading: false });
        if (user !== null) {
          this.getUserInfo(user.uid);
        }
      });
    }

    async getUserInfo(userUid) {
      const snap = await db.collection('users').where('userId', '==', userUid).get();
      snap.forEach((doc) => {
        const firstName = doc.data().firstName;
        const lastName = doc.data().lastName;
        this.setState({
          firstName: firstName,
          lastName: lastName,
          loading: 1,
        });
      });
    }

  render() {
    const {lastName, firstName, loading} = this.state;
    return (
      <div>
        {loading == 0 ? (
          <div>
            You need to log in first.
          </div>
        ) : (
          <div>
            Welcome {firstName} {lastName}
          </div>
        )}
      </div>
    )
  }
}
