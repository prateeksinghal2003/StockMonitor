import React from "react";
import Typing from  "./Typing"

function Hero() {
  return (
    <div className="container">

      <Typing codeline1={"We simplified stock trading for beginners."} codeline2={"  Now, we're making market knowledge accessible to everyone."}></Typing>
      

      <div
        className="row p-5 mt-5 border-top text-muted"
        style={{ lineHeight: "1.8", fontSize: "1.2em" }}
      >

      {/* first 50 percent */}
        <div className="col-6 p-5">
          <p>
           Our mission is to educate and empower individuals to confidently participate in the stock market. By providing accessible tools, simplified learning resources, and insights into various trading platforms , we aim to bridge the gap between curiosity and confidence in trading.
          </p>
          
          <p>
           Whether you're a beginner trying to understand the basics or someone exploring platforms like, this website is your starting point to learn, grow, and take control of your financial journey.
          </p>
        </div>

        {/* another 50 percent */}
        <div className="col-6 p-5">
          <p>
           We&apos;re still exploring the roots of the stock market and diving deeper into the features and tools . As we continue to learn and grow, we&apos;ll be sharing regular updates, insights, and simplified content through our blog and website.
          </p>
          <p>

          {/* a tag is used when directing to some external website */}
          
       We’ll keep updating the site with new insights and features as we grow — stay tuned, and explore with us.

          </p>
          {/* <p>
            And yet, we are always up to something new every day. Catch up on
            the latest updates on our blog or see what the media is saying about
            us.
          </p> */}
        </div>
      </div>
    </div>
  );
}

export default Hero;
