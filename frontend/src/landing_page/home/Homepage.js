import React from 'react'
import Hero from './hero'
import Awards from './Awards'
import Stats from './Stats'
import Education from './Education'
import Pricing from './Pricing'
import Navbar from "../Navbar";
import "./HomePage.css";

import Footer from '../Footer'
import {Link} from "react-router-dom"
function HomePage() {

    return (
        <>
     <Navbar></Navbar>
            <Hero></Hero>
              <section class="intro-icons">
               <h2 class="homepageheading">Explore Stocks Monitor</h2>
<div class="row">
  <div class="three columns" >
  <Link className="item" to="/" style={{ backgroundColor: "#77B4F2" }}>
    <span>
        <img src="https://zerodha.com/varsity/wp-content/themes/varsity2/images/ico-modules.svg" alt="img"/>
        <strong>Home page</strong>
      </span>
  </Link>
  </div>

   <div class="three columns" >
      <Link className="item" to="/about" style={{ backgroundColor: "#77B4F2" }}>
    <span>
        <img src="https://zerodha.com/varsity/wp-content/themes/varsity2/images/ico-blog.svg"></img>
        <strong>About</strong>
      </span>
  </Link>
  </div>

  <div class="three columns" >
     <Link className="item" to="videos" style={{ backgroundColor: "#77B4F2" }}>
    <span>
        <img src="https://zerodha.com/varsity/wp-content/themes/varsity2/images/ico-videos.svg"></img>
        <strong>Videos</strong>
      </span>
  </Link>
  </div>

  <div class="three columns" >
    <Link className="item" to="junior" style={{ backgroundColor: "#77B4F2" }}>
    <span>
        <img src="https://zerodha.com/varsity/wp-content/themes/varsity2/images/ico-junior.svg"></img>
        <strong>Junior</strong>
      </span>
  </Link>
  </div>

   <div class="three columns" >
    <Link className="item" to="/" style={{ backgroundColor: "#77B4F2" }}>
    <span>
        <img src="	https://zerodha.com/varsity/wp-content/themes/varsity2/images/ico-certified.svg"></img>
        <strong>Dashboard</strong>
      </span>
  </Link>
  </div>





</div>

              </section>
           
          
        </>
      );
}

export default HomePage;