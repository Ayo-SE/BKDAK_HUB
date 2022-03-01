import React, { Component } from 'react';
import './Home.css';

export default class Home extends Component {
  render() {
    return (
      <div className='p-5'>
        <div className='top-pads'>
        <div className='d-flex justify-content-around'>
          <div className='card' style={{width: "19rem"}}>
            <div className='card-body'>
              <h5 className="card-title">Card title</h5>
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content. </p>
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
