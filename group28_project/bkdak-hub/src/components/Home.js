import React, { Component } from 'react';
import './Home.css';
import snap from './images/snapchat.png';

export default class Home extends Component {
  render() {
    return (
      <div className='p-5'>
        <div className='top-pads'>
        <div className='d-flex justify-content-around'>
        <div className='card' style={{width: "19rem"}}>
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

          <div className='card' style={{width: "19rem"}}>
            <div className='card-body'>
              <h5 className="card-title">Card title</h5>
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content. bleh</p>
            </div>
          </div>

          <div className='card' style={{width: "19rem"}}>
            <div className='card-body'>
              <h5 className="card-title">Card title</h5>
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content. bleh</p>
            </div>
          </div>

          <div className='card' style={{width: "19rem"}}>
            <div className='card-body'>
              <h5 className="card-title">Card title</h5>
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
          </div>

          <div className='card' style={{width: "19rem"}}>
            <div className='card-body'>
              <h5 className="card-title">Card title</h5>
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
          </div>

          </div>
        </div>
      </div>
    )
  }
}
