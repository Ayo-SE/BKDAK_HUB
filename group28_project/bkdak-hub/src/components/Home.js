/*
PURPOSE OF THIS PAGE:
This is the code for the home page of our website, it displays all the apps we have listed and the side nav on the home page
 */
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

import Firebase from '../firebase/firebase';
import { Link } from 'react-router-dom';

const auth = Firebase.instance().auth;
const db = Firebase.instance().db;


export default class Home extends Component {
    constructor(props) {
      super(props);
      this.state = {
          user: null,
          review: "",
          downloads: 0,
      };
  }

  componentDidMount() {
    auth.onAuthStateChanged((user) => {
      this.setState({ user: user, loading: false });
      if (user !== null) {
        this.getDownloaded(user.uid);
      }
    });
  }

  async getAppReview(appName) {
    const snap = await db.collection('apps').where('name', '==', appName).get();
    snap.forEach((doc) => {
      const review = doc.data().review;
      this.setState({
        review: review,
      });
    });
  }

  async getDownloaded(userUid) {
    const snap = await db.collection('users').where('userId', '==', userUid).get();
    snap.forEach((doc) => {
      const downloads = doc.data().downloads;
      this.setState({
        downloads: downloads,
      });
    });
  }

  async updateDownload(downloads) {
    try {
      if (this.state.role === 'users') {
        await this.db.collection('users').doc().set({
          downloads: downloads + 1,
        })
      }
    } catch(err) {
      this.setState({error: err.message});
    }
  }


  render() {
    const {downloads, review} = this.state;
    return (
      <div className='back-color'>
        <div className='sidenav'>
          <div className="flex-shrink-0 p-3 bg-white">
            <ul className="list-unstyled ps-0">
              <li className="mb-1">
                <button className="btn btn-toggle align-items-center rounded collapsed" data-bs-toggle="collapse" data-bs-target="#home-collapse" aria-expanded="false">
                  Home
                </button>
                <div className="collapse" id="home-collapse" >
                  <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                    <li><a href="#" className="link-dark rounded">Featured</a></li>
                    <li><a href="#" className="link-dark rounded">Recommended</a></li>
                    <li><a href="#" className="link-dark rounded">Favorites</a></li>
                  </ul>
                </div>
              </li>
              <li className="mb-1">
                <button className="btn btn-toggle align-items-center rounded collapsed" data-bs-toggle="collapse" data-bs-target="#dashboard-collapse" aria-expanded="false">
                  Genres
                </button>
                <div className="collapse" id="dashboard-collapse" >
                  <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                    <li><a href="#" className="link-dark rounded">Action</a></li>
                    <li><a href="#" className="link-dark rounded">Adventure</a></li>
                    <li><a href="#" className="link-dark rounded">Puzzle</a></li>
                    <li><a href="#" className="link-dark rounded">Lifestyle</a></li>
                  </ul>
                </div>
              </li>
              <li className="mb-1">
                <Link className="" to="/account">
                  Account{' '}
                </Link>
              </li>
              <li className="mb-1"><Link className="" to="/help">
                    Help{' '}
                  </Link>
              </li>
              
            </ul>
          </div>
        </div>

        <div className='p-5 main'>
          <div className='top-pads'>
            <div>
              <ul className="list-group list-group-flush">
                <li className="list-group-item pb-4 pt-4" id='l1'>
                    <div className='d-flex justify-content-around'>
                      <div className='card' style={{width: "16rem"}}>
                        <img src={snap} className="card-img-top" alt="snapchat-image"></img>
                        <div className='card-body'>
                          <h5 className="card-title">Snapchat</h5>
                          <p className="card-text">Snapchat is a fast and fun way to share the moment with your friends and family.</p>
                          <div className='d-flex justify-content-evenly'>
                            {/* <form onSubmit={(e) => this.updateDownload(e)}> */}
                              <a href="https://play.google.com/store/apps/details?id=com.snapchat.android&hl=en_US&gl=US" target="_blank" rel="noopener noreferrer" className="btn btn-primary" onClick={this.updateDownload({downloads})}>Download</a>
                            {/* </form> */}
                            
                            {/* <a href="#" className="btn btn-primary" >Reviews</a> */}

                            <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                              Reviews
                            </button>
                            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                              <div class="modal-dialog">
                                <div class="modal-content">
                                  <div class="modal-header">
                                    <h5 class="modal-title" id="exampleModalLabel">Snapchat Review</h5>
                                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                  </div>
                                  <div class="modal-body">
                                    "I love snap chat, but lately it keeps shutting down for no reason. Can't open any messages or take any pictures because the app is immediately crashing. Another problem is that when I'm recording a video, the recording stops after a few seconds. Hopefully theee problems can be fixed. I am unable to access any features of this app at the moment."
                                  </div>
                                  <div class="modal-footer">
                                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className='card' style={{width: "16rem"}}>
                        <img src={insta} className="card-img-top" alt="instagram-image"></img>
                          <div className='card-body'>
                            <h5 className="card-title">Instagram</h5>
                            <p className="card-text">Instagram (from Facebook) allows you to create and share your photos, stories, and videos with the friends and followers you care about.</p>
                            <div className='d-flex justify-content-evenly'>
                              <a href="https://play.google.com/store/apps/details?id=com.instagram.android&hl=en_US&gl=US" target="_blank" rel="noopener noreferrer" className="btn btn-primary">Download</a>
                              <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                              Reviews
                            </button>
                            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                              <div class="modal-dialog">
                                <div class="modal-content">
                                  <div class="modal-header">
                                    <h5 class="modal-title" id="exampleModalLabel">Instagram Review</h5>
                                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                  </div>
                                  <div class="modal-body">
                                  "There's this strange bug that's been happening recently where when I get off of my data and move back to my home wifi at the end of the day, Insta just stops working. It doesn't happen on my iPad, just my phone. For some reason when I return to my wifi, insta won't load posts of any kind, the pfps of anyone I follow, and it refuses to send any messages I try to type. The only way I have found to fix it is to delete the app and then reinstall it. Hope this gets fixed soon."
                                  </div>
                                  <div class="modal-footer">
                                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                  </div>
                                </div>
                              </div>
                            </div>
                            </div>
                          </div>
                      </div>

                      <div className='card' style={{width: "16rem"}}>
                      <img src={lyft} className="card-img-top" alt="lyft-image"></img>
                          <div className='card-body'>
                            <h5 className="card-title">Lyft</h5>
                            <p className="card-text">Count on Lyft to take you where you need to go with safety first. If it gets you there, it’s on the app.</p>
                            <div className='d-flex justify-content-evenly'>
                              <a href="https://play.google.com/store/apps/details?id=me.lyft.android&hl=en_US&gl=US" target="_blank" rel="noopener noreferrer" className="btn btn-primary">Download</a>
                              <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                              Reviews
                            </button>
                            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                              <div class="modal-dialog">
                                <div class="modal-content">
                                  <div class="modal-header">
                                    <h5 class="modal-title" id="exampleModalLabel">Lyft Review</h5>
                                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                  </div>
                                  <div class="modal-body">
                                    "Beware! Pricing is not accurate! The app functions well enough and is easy to use, but if you use be sure to take screen captures of the prices offered for rides because sometimes the price actually charged ends up being two or three times the original price cited, and the built-in feature to dispute the fare is pointless."
                                  </div>
                                  <div class="modal-footer">
                                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                  </div>
                                </div>
                              </div>
                            </div>
                            </div>
                          </div>
                      </div>

                      <div className='card' style={{width: "16rem"}}>
                      <img src={uber} className="card-img-top" alt="lyft-image"></img>
                          <div className='card-body'>
                            <h5 className="card-title">Uber</h5>
                            <p className="card-text">We’re committed to your safety at Uber. We’ve established a Door-to-Door Safety Standard to help you feel safe every time you ride.</p>
                            <div className='d-flex justify-content-evenly'>
                              <a href="https://play.google.com/store/apps/details?id=com.ubercab&hl=en_US&gl=US" target="_blank" rel="noopener noreferrer" className="btn btn-primary">Download</a>
                              <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                              Reviews
                            </button>
                            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                              <div class="modal-dialog">
                                <div class="modal-content">
                                  <div class="modal-header">
                                    <h5 class="modal-title" id="exampleModalLabel">Uber Review</h5>
                                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                  </div>
                                  <div class="modal-body">
                                    "For the most part I've not had major issues w/the app & most drivers are great. But I mistakenly billed an old company card because the app reset it as my default biz profile payment & still won't let me delete the old credit card after weeks of trying (so, it's likely it may happen again). 🤦🏾‍♀️ Making it all the more frustrating is the lack of an actual customer svc team to help. You can't automate everything. It will eventually impact the customer's experience negatively as it has mine."
                                  </div>
                                  <div class="modal-footer">
                                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                  </div>
                                </div>
                              </div>
                            </div>
                            </div>
                          </div>
                      </div>

                    </div>
                    </li>
                    <li className="list-group-item pt-4 pb-4" id='l2'>
                    <div className='d-flex justify-content-around'>
                      <div className='card' style={{width: "16rem"}}>
                        <img src={crush} className="card-img-top" alt="candy_crush-image"></img>
                        <div className='card-body'>
                          <h5 className="card-title">Candy Crush</h5>
                          <p className="card-text">Start playing Candy Crush Saga today – a legendary puzzle game loved by millions of players around the world.</p>
                          <div className='d-flex justify-content-evenly'>
                            <a href="https://play.google.com/store/apps/details?id=com.king.candycrushsaga&hl=en_US&gl=US" target="_blank" rel="noopener noreferrer" className="btn btn-primary">Download</a>
                            <a href="#" className="btn btn-primary">Reviews</a>
                          </div>
                        </div>
                      </div>

                      <div className='card' style={{width: "16rem"}}>
                        <img src={faceb} className="card-img-top" alt="facebook-image"></img>
                          <div className='card-body'>
                            <h5 className="card-title">Facebook</h5>
                            <p className="card-text">Keeping up with friends is faster and easier than ever. Download updates and photos, engage with friends and Pages, and stay connected to communities important to you.</p>
                            <div className='d-flex justify-content-evenly'>
                              <a href="https://play.google.com/store/apps/details?id=com.facebook.katana&hl=en_US&gl=US" target="_blank" rel="noopener noreferrer" className="btn btn-primary">Download</a>
                              <a href="#" className="btn btn-primary">Reviews</a>
                            </div>
                          </div>
                      </div>

                      <div className='card' style={{width: "16rem"}}>
                      <img src={tinder} className="card-img-top" alt="tinder-image"></img>
                          <div className='card-body'>
                            <h5 className="card-title">Tinder </h5>
                            <p className="card-text">🔥You can be here for a good time, and a long time, too.🔥 With 30 billion matches to date, Tinder® is the🔝 top dating app🔝, making it the place to be to meet new people.</p>
                            <div className='d-flex justify-content-evenly'>
                              <a href="https://play.google.com/store/apps/details?id=com.tinder&hl=en_US&gl=US" target="_blank" rel="noopener noreferrer" className="btn btn-primary">Download</a>
                              <a href="#" className="btn btn-primary">Reviews</a>
                            </div>
                          </div>
                      </div>

                      <div className='card' style={{width: "16rem"}}>
                      <img src={tiktok} className="card-img-top" alt="tiktok-image"></img>
                          <div className='card-body'>
                            <h5 className="card-title">TikTok</h5>
                            <p className="card-text">TikTok is THE destination for mobile videos. On TikTok, short-form videos are exciting, spontaneous, and genuine. </p>
                            <div className='d-flex justify-content-evenly'>
                              <a href="https://play.google.com/store/apps/details?id=com.zhiliaoapp.musically&hl=en_US&gl=US" target="_blank" rel="noopener noreferrer" className="btn btn-primary">Download</a>
                              <a href="#" className="btn btn-primary">Reviews</a>
                            </div>
                          </div>
                      </div>

                    </div>
                    </li>
                    <li className="list-group-item pt-4 pb-4" id='l3'>
                    <div className='d-flex justify-content-around'>
                      <div className='card' style={{width: "16rem"}}>
                        <img src={netflix} className="card-img-top" alt="netflix-image"></img>
                        <div className='card-body'>
                          <h5 className="card-title">Netflix</h5>
                          <p className="card-text">Looking for the most talked about TV shows and movies from the around the world? They’re all on Netflix. We’ve got award-winning series, movies, documentaries, and stand-up specials. </p>
                          <div className='d-flex justify-content-evenly'>
                            <a href="https://play.google.com/store/apps/details?id=com.netflix.mediaclient&hl=en_US&gl=US" target="_blank" rel="noopener noreferrer" className="btn btn-primary">Download</a>
                            <a href="#" className="btn btn-primary">Reviews</a>
                          </div>
                        </div>
                      </div>

                      <div className='card' style={{width: "16rem"}}>
                        <img src={spotify} className="card-img-top" alt="spotify-image"></img>
                          <div className='card-body'>
                            <h5 className="card-title">Spotify</h5>
                            <p className="card-text">With Spotify, you can listen to music and play millions of songs and podcasts for free. Stream music and podcasts you love and find music - or your next favorite song - from all over the world.</p>
                            <div className='d-flex justify-content-evenly'>
                              <a href="https://play.google.com/store/apps/details?id=com.spotify.music&hl=en_US&gl=US" target="_blank" rel="noopener noreferrer" className="btn btn-primary">Download</a>
                              <a href="#" className="btn btn-primary">Reviews</a>
                            </div>
                          </div>
                      </div>

                      <div className='card' style={{width: "16rem"}}>
                      <img src={mario} className="card-img-top" alt="mario-image"></img>
                          <div className='card-body'>
                            <h5 className="card-title">Super Mario Run</h5>
                            <p className="card-text">A new kind of Mario game that you can play with one hand. You control Mario by tapping as he constantly runs forward.  You time your taps to pull off stylish jumps, midair spins, and wall jumps to gather coins and reach the goal!</p>
                            <div className='d-flex justify-content-evenly'>
                              <a href="https://play.google.com/store/apps/details?id=com.nintendo.zara&hl=en_US&gl=US" target="_blank" rel="noopener noreferrer" className="btn btn-primary">Download</a>
                              <a href="#" className="btn btn-primary">Reviews</a>
                            </div>
                          </div>
                      </div>

                      <div className='card' style={{width: "16rem"}}>
                      <img src={pool} className="card-img-top" alt="lyft-image"></img>
                          <div className='card-body'>
                            <h5 className="card-title">8 Ball Pool</h5>
                            <p className="card-text">Do you want to play in the world of pool games? 8 Ball Pool is an addictive challenging game based on real 3D pool games, where you will challenge your friends online. Become a master of the pool!</p>
                            <div className='d-flex justify-content-evenly'>
                              <a href="https://play.google.com/store/apps/details?id=com.miniclip.eightballpool&hl=en_US&gl=US" target="_blank" rel="noopener noreferrer" className="btn btn-primary">Download</a>
                              <a href="#" className="btn btn-primary">Reviews</a>
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
