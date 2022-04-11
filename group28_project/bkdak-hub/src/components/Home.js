import React, { Component } from 'react';
import './Home.css';
import snap from './images/snapchat.png';
import insta from './images/Instagram_icon.png';
import lyft from './images/lyft.png';
import uber from './images/uber.png';
import crush from './images/c_crush.png';
import tinder from './images/tinder.png';
import faceb from './images/facebook.png';
import tiktok from './images/tiktok.png';
import mario from './images/mario.png';
import netflix from './images/netflix.png';
import spotify from './images/spotify.png';
import pool from './images/pool.png';

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
                    <li><a href="#" class="link-dark rounded">Featured</a></li>
                    <li><a href="#" class="link-dark rounded">Recommended</a></li>
                    <li><a href="#" class="link-dark rounded">Favorites</a></li>
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
            <div>
              <ul class="list-group list-group-flush">
                <li class="list-group-item pb-4 pt-4" id='l1'>
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
                        <img src={insta} class="card-img-top" alt="instagram-image"></img>
                          <div className='card-body'>
                            <h5 className="card-title">Instagram</h5>
                            <p class="card-text">Instagram (from Facebook) allows you to create and share your photos, stories, and videos with the friends and followers you care about.</p>
                            <div className='d-flex justify-content-evenly'>
                              <a href="#" class="btn btn-primary">Share</a>
                              <a href="#" class="btn btn-primary">Review</a>
                            </div>
                          </div>
                      </div>

                      <div className='card' style={{width: "16rem"}}>
                      <img src={lyft} class="card-img-top" alt="lyft-image"></img>
                          <div className='card-body'>
                            <h5 className="card-title">Lyft</h5>
                            <p class="card-text">Count on Lyft to take you where you need to go with safety first. If it gets you there, it’s on the app.</p>
                            <div className='d-flex justify-content-evenly'>
                              <a href="#" class="btn btn-primary">Share</a>
                              <a href="#" class="btn btn-primary">Review</a>
                            </div>
                          </div>
                      </div>

                      <div className='card' style={{width: "16rem"}}>
                      <img src={uber} class="card-img-top" alt="lyft-image"></img>
                          <div className='card-body'>
                            <h5 className="card-title">Uber</h5>
                            <p class="card-text">We’re committed to your safety at Uber. We’ve established a Door-to-Door Safety Standard to help you feel safe every time you ride.</p>
                            <div className='d-flex justify-content-evenly'>
                              <a href="#" class="btn btn-primary">Share</a>
                              <a href="#" class="btn btn-primary">Review</a>
                            </div>
                          </div>
                      </div>

                    </div>
                    </li>
                    <li class="list-group-item pt-4 pb-4" id='l2'>
                    <div className='d-flex justify-content-around'>
                      <div className='card' style={{width: "16rem"}}>
                        <img src={crush} class="card-img-top" alt="candy_crush-image"></img>
                        <div className='card-body'>
                          <h5 className="card-title">Candy Crush</h5>
                          <p class="card-text">Start playing Candy Crush Saga today – a legendary puzzle game loved by millions of players around the world.</p>
                          <div className='d-flex justify-content-evenly'>
                            <a href="#" class="btn btn-primary">Share</a>
                            <a href="#" class="btn btn-primary">Review</a>
                          </div>
                        </div>
                      </div>

                      <div className='card' style={{width: "16rem"}}>
                        <img src={faceb} class="card-img-top" alt="facebook-image"></img>
                          <div className='card-body'>
                            <h5 className="card-title">Facebook</h5>
                            <p class="card-text">Keeping up with friends is faster and easier than ever. Share updates and photos, engage with friends and Pages, and stay connected to communities important to you.</p>
                            <div className='d-flex justify-content-evenly'>
                              <a href="#" class="btn btn-primary">Share</a>
                              <a href="#" class="btn btn-primary">Review</a>
                            </div>
                          </div>
                      </div>

                      <div className='card' style={{width: "16rem"}}>
                      <img src={tinder} class="card-img-top" alt="tinder-image"></img>
                          <div className='card-body'>
                            <h5 className="card-title">Tinder </h5>
                            <p class="card-text">🔥You can be here for a good time, and a long time, too.🔥 With 30 billion matches to date, Tinder® is the🔝 top dating app🔝, making it the place to be to meet new people.</p>
                            <div className='d-flex justify-content-evenly'>
                              <a href="#" class="btn btn-primary">Share</a>
                              <a href="#" class="btn btn-primary">Review</a>
                            </div>
                          </div>
                      </div>

                      <div className='card' style={{width: "16rem"}}>
                      <img src={tiktok} class="card-img-top" alt="tiktok-image"></img>
                          <div className='card-body'>
                            <h5 className="card-title">TikTok</h5>
                            <p class="card-text">TikTok is THE destination for mobile videos. On TikTok, short-form videos are exciting, spontaneous, and genuine. </p>
                            <div className='d-flex justify-content-evenly'>
                              <a href="#" class="btn btn-primary">Share</a>
                              <a href="#" class="btn btn-primary">Review</a>
                            </div>
                          </div>
                      </div>

                    </div>
                    </li>
                    <li class="list-group-item pt-4 pb-4" id='l3'>
                    <div className='d-flex justify-content-around'>
                      <div className='card' style={{width: "16rem"}}>
                        <img src={netflix} class="card-img-top" alt="netflix-image"></img>
                        <div className='card-body'>
                          <h5 className="card-title">Netflix</h5>
                          <p class="card-text">Looking for the most talked about TV shows and movies from the around the world? They’re all on Netflix. We’ve got award-winning series, movies, documentaries, and stand-up specials. </p>
                          <div className='d-flex justify-content-evenly'>
                            <a href="#" class="btn btn-primary">Share</a>
                            <a href="#" class="btn btn-primary">Review</a>
                          </div>
                        </div>
                      </div>

                      <div className='card' style={{width: "16rem"}}>
                        <img src={spotify} class="card-img-top" alt="spotify-image"></img>
                          <div className='card-body'>
                            <h5 className="card-title">Spotify</h5>
                            <p class="card-text">With Spotify, you can listen to music and play millions of songs and podcasts for free. Stream music and podcasts you love and find music - or your next favorite song - from all over the world.</p>
                            <div className='d-flex justify-content-evenly'>
                              <a href="#" class="btn btn-primary">Share</a>
                              <a href="#" class="btn btn-primary">Review</a>
                            </div>
                          </div>
                      </div>

                      <div className='card' style={{width: "16rem"}}>
                      <img src={mario} class="card-img-top" alt="mario-image"></img>
                          <div className='card-body'>
                            <h5 className="card-title">Super Mario Run</h5>
                            <p class="card-text">A new kind of Mario game that you can play with one hand. You control Mario by tapping as he constantly runs forward.  You time your taps to pull off stylish jumps, midair spins, and wall jumps to gather coins and reach the goal!</p>
                            <div className='d-flex justify-content-evenly'>
                              <a href="#" class="btn btn-primary">Share</a>
                              <a href="#" class="btn btn-primary">Review</a>
                            </div>
                          </div>
                      </div>

                      <div className='card' style={{width: "16rem"}}>
                      <img src={pool} class="card-img-top" alt="lyft-image"></img>
                          <div className='card-body'>
                            <h5 className="card-title">8 Ball Pool</h5>
                            <p class="card-text">Do you want to play in the world of pool games? 8 Ball Pool is an addictive challenging game based on real 3D pool games, where you will challenge your friends online. Become a master of the pool!</p>
                            <div className='d-flex justify-content-evenly'>
                              <a href="#" class="btn btn-primary">Share</a>
                              <a href="#" class="btn btn-primary">Review</a>
                            </div>
                          </div>
                      </div>

                    </div>
                    </li>
                  </ul>
              </div>
          </div>
        </div>
      </div>
    )
  }
}
