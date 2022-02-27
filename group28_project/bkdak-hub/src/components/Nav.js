/* PURPOSE OF THIS PAGE:
THIS CODE IS FOR THE NAVIGATION BAR ATOP ALL THE PAGES OF THE APP*/
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';

export default class Nav extends Component {

  render() {
    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="container-fluid">
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
                            Filler{' '}
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="p-2 nav-link" to="/about" style={{ textDecoration: 'none' }}>
                            Filler{' '}
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="p-2 nav-link" to="/product" style={{ textDecoration: 'none' }}>
                            Filler{' '}
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="p-2 nav-link" to="/resources" style={{ textDecoration: 'none' }}>
                            Filler{' '}
                            </Link>
                        </li>
                    </ul>
                    <form class="d-flex">
                        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button class="btn btn-outline-success" type="submit">Search</button>
                    </form>
                </div>
            </div>
        </nav>
    );
  }
}
