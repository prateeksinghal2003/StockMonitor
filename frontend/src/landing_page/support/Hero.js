import React from "react";

function Hero() {
  return (

    //container class would leave margin left and right 
    //so use container fluid
    <section className="container-fluid" id="supportHero">

      <div className="p-5 " id="supportWrapper">
        <h4>Support Portal</h4>
        <a href="">Track Tickets</a>
      </div>


      <div className="row p-5 m-3">

        <div className="col-6 p-3">

          <h1 className="fs-3">
            Search for an answer or browse help topics to create a ticket
          </h1>

         <div id="input-div">
           <input placeholder="Eg. how do I activate F&O" ></input>
          <img src="media/images/search-bar-icon.webp" width="25px" height="25px" loading="lazy" id="serach-bar"></img>

         </div>
        
          <br />
          <a href="" id="search-bar-a-tags">Track account opening</a>
          <a href=""  id="search-bar-a-tags">Track segment activation</a>
          <a href=""  id="search-bar-a-tags">Intraday margins</a>
          <a href=""  id="search-bar-a-tags">Kite user manual</a>
        </div>

        <div className="col-6 p-3">
          <h1 className="fs-3">Featured</h1>
          <ol>
            <li>
              <a href="">Current Takeovers and Delisting - January 2024</a>
            </li>
            <li id="list-id">
              <a href="">Latest Intraday leverages - MIS & CO</a>
            </li>
          </ol>
        </div>

      </div>
    </section>
  );
}

export default Hero;
