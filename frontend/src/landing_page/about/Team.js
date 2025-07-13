import React from "react";
import { FaLinkedin } from "react-icons/fa";

function Team() {
  return (
    <div className="container">

      <div className="row p-3 mt-5 border-top">
        <h1 className="text-center ">People</h1>
      </div>

      <div
        className="row p-3 text-muted"
        style={{ lineHeight: "1.8", fontSize: "1.2em" }}
      >

      {/* first 50 percent contains an image */}
        <div className="col-6 p-3 text-center">
          <img
            src="media/images/prateek.jpeg"
            style={{  width: "50%",height: "74%" }}
            className="dev-image"
          />
          <h4 className="mt-5">Prateek Singhal</h4>
          <h6>Developer</h6>
        </div>


         {/* next 50 percent */}
        <div className="col-6 p-3">
          <p>
          With a keen interest in the stock market and financial technologies ,
          I created this website as a personal project to learn and share the basics of the stock market,
          especially by exploring various platforms. 
          </p>

          <p>
            When I&apos;m not diving into charts or code, you&apos;ll find me unwinding through badminton or a refreshing swim.
           This site is just the beginning — stay connected as I keep learning and building!
          </p>

        

          <p>
            Connect via <a href="https://www.linkedin.com/in/prateek-singhal-8754a6356/" style={{textDecoration : "none"}} target="blank"><FaLinkedin size={24}/></a>
          </p>

        </div>


      </div>
    </div>
  );
}

export default Team;
