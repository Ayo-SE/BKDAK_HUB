import React, { Component } from 'react'
import Firebase from '../firebase/firebase'
import './Account.css'

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
        const downloads = doc.data().downloads;
        this.setState({
          firstName: firstName,
          lastName: lastName,
          downloads: downloads,
          loading: 1,
        });
      });
    }

  render() {
    const {lastName, firstName, loading, downloads} = this.state;
    return (
      <div>
        {loading == 0 ? (
          <div className='position relative div-height' style={{backgroundColor: 'black'}}>
            <div className="alert alert-danger d-flex align-items-center" role="alert">
              <div>
                
              <div class="position-absolute top-50 start-50 translate-middle">
                <i className='bi bi-exclamation-triangle-fill flex-shrink-0 me-2'></i>
                You need to log in first.
              </div>
                
              </div>
            </div>
          </div>
        ) : (
          <div className='p-5'>
            Welcome {firstName} {lastName} You have {downloads} downloads on your account.
          </div>
        )}
      </div>
    )
  }
}
