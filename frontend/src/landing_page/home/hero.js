import React from 'react'
import {Link} from "react-router-dom"

function Hero() {
    return ( 
       <div className="container p-5 mb-5">

       {/* 1 row class has 12 columns */}
      <div className="row text-center">
        <img
          src="media/images/homeHero.png"
          alt="Hero Image"
          className="mb-5"
        />
        <h1 className="mt-5">Learn Stock Marketing here</h1>

        <p>
          Online platform to learn in stocks and trading.
        </p>

        <Link to="/videos">
           <button
          className="p-2 btn btn-primary fs-5 mb-5"
          style={{ width: "20%", margin: "0 auto" }}
        >
          Learn Now
        </button>
        </Link>

       
        
      </div>


    </div>
     );
}

export default Hero;
