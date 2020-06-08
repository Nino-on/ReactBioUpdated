import React from 'react';
import Navbar from '../Navbar.js';
import Banner from '../Banner.js';
import AboutMe from '../AboutMe.js';


function About (){
    return (
     
        <div className="container">
        <Navbar/>
        <br></br>
        <Banner></Banner>
        <br></br>
        <AboutMe></AboutMe>
      
        </div>

    );
  }

export default About;