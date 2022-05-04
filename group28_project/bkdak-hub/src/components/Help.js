/*
PURPOSE OF THIS PAGE:
The code on this page is for the help page for "The Hub", it lists our mission satement, contact information, and support information.
*/

import React, { Component } from 'react'
import './Help.css';

export default class Help extends Component {
  render() {
    return (

        
        <div className ="general">
            {/* Side bar that allows users to navigate to a spcific 
            section on the healp page  */}
            <div className="menu"> 
                <a href="#BKDAK Inc"> BKDAK LLC. </a>
                <a href="#mission"> Mission  </a>
                <a href="#Contact"> Contact </a>
                <a href="#Support"> Support </a>
            </div> 

            <div className="body"> 
                <div>
                    <h2 id= "BKDAK Inc"> BKDAK Inc.</h2>
                    <hr></hr>
                     
                    {/* Brief statement about the history of the company  */}
                    <p> Who are we? We are a small company founded in 2017 in Chicago Illinois. We strive in creating efficient 
                    software that meets our all of our customers needs and wants. Our mission, Spirit, values and behavior 
                    are what separates us from other companies. We are committed to building and cultivating postive, long
                    term relationships with all our clients.  </p>
                </div>


                <div> 
                    <h2 id="mission"> Mission Statement </h2>
                    <hr></hr>

                    {/* Our Brief mission statement  */}
                    <p> Our mission here at BKDAK LLC is to make technology an asset to you not a hassle. 
                        We strive to build the technology you deserve around your needs and remove assets that are 
                        deemed unnecessary in your business environment. To prove to you that our software development
                        progress is going smoothly we have a ton of information to cover and a demo of what the current 
                        application looks like
                    </p>


                </div>
                
                {/* List of contacts of all developers  */}
                <div>
                    <h2 id="Contact"> Contact </h2>
                    <hr></hr>
                    
                    <p> Project Manager: Brandon Truong <br></br> 
                        Email: truongbm@miamioh.edu 
                        <br></br>
                        <br></br>

                        Technical Manager: Dillon Khanna <br></br>
                        Email: khannadf@miamioh.edu 
                        <br></br>
                        <br></br>
                       
                        <div> 
                        Software Developer: Ayo Obisesan <br></br>
                        Email: obisesa2@miamioh.edu 
                        <br></br>
                        <br></br>
                        
                        Software Developer: Kaitlyn Swearingen <br></br>
                        Email: swearikj@miamioh.edu 
                        <br></br>
                        <br></br>
                        
                        Software Developer: Kwabena Darkwa <br></br>
                        Email: Darkwak@miamioh.edu 
                        
                        </div>
                        
                    </p>
                </div>

                {/* Support contact list  */}
                <div>
                    <h2 id="Support"> Support </h2>
                    <hr></hr>

                    <p> For assistance with any products or software, please feel free to send us an email provided 
                        below or contact our hotline.
                        <br></br>
                        <br></br> 
                        1-800-BKDAKHELP 
                        <br></br>
                        <br></br>
                        BKDAK@gmail.com 
                        </p> 

                        

                </div>


            </div>

        </div>

        

        
      
      



        





    )
  }
}
