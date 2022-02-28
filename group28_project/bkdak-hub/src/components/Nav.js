/* PURPOSE OF THIS PAGE:
THIS CODE IS FOR THE NAVIGATION BAR ATOP ALL THE PAGES OF THE APP*/
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';
// import Firebase from '../firebase/firebase';
// const auth = Firebase.instance().auth;

export default class Nav extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: props.user
        };
    }

    // async logout() {
    //     try {
    //       await auth.signOut();
    //     } catch (err) {
    //       console.log(err);
    //     }
    //   }

    renderLogin() {
    if(this.props.user){return;}
    return <button className="btn btn-primary me-3" type="submit">
                <Link className="p-2 nav-link" to="/login" style={{ textDecoration: 'none' }}>
                    Login{' '}
                </Link>
            </button>
    }
    
    renderRegister() {
    if(this.props.user){return;}
    return <button className="btn btn-primary ml-3" type="submit">
                <Link className="p-2 nav-link" to="/register" style={{ textDecoration: 'none' }}>
                    Register{' '}
                </Link>
            </button>
    }

    renderLogout() {
        if (!this.props.user) { return; }
        return <div onClick={()=> this.logout()} className="btn btn-primary">Logout</div>
    }

    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="p-2 nav-link" to="/" style={{ textDecoration: 'none' }}>
                                Home{' '}
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="p-2 nav-link" to="/genres" style={{ textDecoration: 'none' }}>
                                Genres{' '}
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="p-2 nav-link" to="/popular" style={{ textDecoration: 'none' }}>
                                Popular{' '}
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="p-2 nav-link" to="/help" style={{ textDecoration: 'none' }}>
                                Help{' '}
                                </Link>
                            </li>
                        </ul>
                        <div className="infinite-pad">
                            <form className="d-flex">
                                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                                <button className="btn btn-outline-success" type="submit">Search</button>
                            </form>
                        </div>
                        <div className="pe-3">
                            {this.renderLogin()}
                            {this.renderRegister()}
                            {this.renderLogout()}
                        </div>
                    </div>
                </div>
            </nav>
        );
  }
}