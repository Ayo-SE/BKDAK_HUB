import React, { Component } from 'react';
import './Home.css';
import snap from './images/snapchat.png';
import { Link } from 'react-router-dom';

export default class Home extends Component {
  render() {
    return (
      <div className='back-color'>
        <div className='sidenav'>
          <div class="flex-shrink-0 p-3 bg-white">
            {/* <a href="/" class="d-flex align-items-center pb-3 mb-3 link-dark text-decoration-none border-bottom">
              <span class="fs-5 fw-semibold">Collapsible</span>
            </a> */}
            <ul class="list-unstyled ps-0">
              <li class="mb-1">
                <button class="btn btn-toggle align-items-center rounded collapsed" data-bs-toggle="collapse" data-bs-target="#home-collapse" aria-expanded="false">
                  Home
                </button>
                <div class="collapse" id="home-collapse" >
                  <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                    <li><a href="#" class="link-dark rounded">Overview</a></li>
                    <li><a href="#" class="link-dark rounded">Updates</a></li>
                    <li><a href="#" class="link-dark rounded">Reports</a></li>
                  </ul>
                </div>
              </li>
              <li class="mb-1">
                <button class="btn btn-toggle align-items-center rounded collapsed" data-bs-toggle="collapse" data-bs-target="#dashboard-collapse" aria-expanded="false">
                  Genres
                </button>
                <div class="collapse" id="dashboard-collapse" >
                  <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                    <li><a href="#" class="link-dark rounded">Action</a></li>
                    <li><a href="#" class="link-dark rounded">Adventure</a></li>
                    <li><a href="#" class="link-dark rounded">Puzzle</a></li>
                    <li><a href="#" class="link-dark rounded">Lifestyle</a></li>
                  </ul>
                </div>
              </li>
              <li class="mb-1">
                <Link className="" to="/account">
                  Account{' '}
                </Link>
              </li>
              <li class="mb-1">
                {/* <button class="btn btn-toggle align-items-center rounded collapsed" data-bs-toggle="collapse" data-bs-target="#orders-collapse" aria-expanded="false"> */}
                  <Link className="" to="/help">
                    Help{' '}
                  </Link>
                {/* </button> */}
              </li>
              {/* <li class="nav-item">
                <a href="#" class="nav-link active" aria-current="page">
                  
                </a>
              </li> */}
                
                {/* <button class="btn btn-toggle align-items-center rounded collapsed" data-bs-toggle="collapse" data-bs-target="#account-collapse" aria-expanded="false">
                  Account
                </button>
                <div class="collapse" id="account-collapse" >
                  <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                    <li><a href="#" class="link-dark rounded">New...</a></li>
                    <li><a href="#" class="link-dark rounded">Profile</a></li>
                    <li><a href="#" class="link-dark rounded">Settings</a></li>
                    <li><a href="#" class="link-dark rounded">Sign out</a></li>
                  </ul>
                </div> */}
              
            </ul>
          </div>
        </div>

        <div className='p-5 main'>
          <div className='top-pads'>
            <div className='d-flex justify-content-around'>
              <div className='card' style={{width: "16rem"}}>
                <img src={snap} class="card-img-top" alt="snapchat-image"></img>
                <div className='card-body'>
                  <h5 className="card-title">Snapchat</h5>
                  <p class="card-text">Snapchat is a fast and fun way to share the moment with your friends and family.</p>
                  <div className='d-flex justify-content-evenly'>
                    <a href="#" class="btn btn-primary">Share</a>
                    <a href="#" class="btn btn-primary">Review</a>
                  </div>
                </div>
              </div>

              <div className='card' style={{width: "16rem"}}>
                <div className='card-body'>
                  <h5 className="card-title">Card title</h5>
                  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content. bleh</p>
                </div>
              </div>

              <div className='card' style={{width: "16rem"}}>
                <div className='card-body'>
                  <h5 className="card-title">Card title</h5>
                  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content. bleh</p>
                </div>
              </div>

              <div className='card' style={{width: "16rem"}}>
                <div className='card-body'>
                  <h5 className="card-title">Card title</h5>
                  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    )
  }
}
