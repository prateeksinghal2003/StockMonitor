import React from "react";

import Hero from "./Hero";
import Team from "./Team";
import Navbar from "../Navbar";
 import "./About.css"

function AboutPage() {
  return (
    <>
     <Navbar></Navbar>
      <Hero />
      <Team />
    </>
  );
}

export default AboutPage;
