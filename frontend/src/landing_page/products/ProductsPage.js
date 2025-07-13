import React from "react";

import Hero from "./Hero";
import LeftSection from "./LeftSection";
import RightSection from "./RightSection";
import Universe from "./Universe";
import Navbar from "../Navbar";
import "./Products.css";



function ProductPage() {
  return (
    <>
    <Navbar></Navbar>
      <Hero />
      <LeftSection
        imageURL="media/images/videomod1.png"
        heading="Introduction to Stock Market (video series)"
        chaptercount="10 chapters"
       description="This video module on Introduction to Stock markets will familiarize you with the fundamentals of the stock market, how to get started,  and the various intermediaries in the eco system."
       route="/videos/video-mod-1"
      />
      <RightSection
        imageURL="media/images/videomod2.png"
        
        heading="Technical Analysis (Video Series)"
        chaptercount="12 chapters"
       description="Technical Analysis (TA) plays an important role in developing a point of view. Like every other research, TA also has its own attributes. In this module, we discover all those complex attributes of TA, study various patterns, indicators, and theories that will help you as a trader to find upright trading opportunities in the market."
          route="/videos/video-mod-2"
      />
      <LeftSection
        imageURL="media/images/videomod3.png"
        heading="Fundamental Analysis (Video Series)"
        chaptercount="10 chapters"
       description="Fundamental Analysis (FA) is a holistic approach to study a business. If you are an investor that is looking for long term investments this module will help you understand Equity research, help you in reading the financial statements, annual reports, calculation of Financial Ratio, Analysis and most importantly help you in evaluating the intrinsic value of a stock to find long-term investing opportunities."
         route="/videos/video-mod-3"
      />
      <RightSection
        imageURL="media/images/videomod4.png"
        heading="Futures Trading (Video Series)"
        chaptercount="9 chapters"
       description="Futures Trading involves trading in contracts in the derivatives markets. This module covers the various intricacies involved in undergoing a futures trade including margins, leverages, pricing, etc"
         route="/videos/video-mod-4"
      />
      <LeftSection
        imageURL="media/images/videomod5.png"
      heading="Introduction to Options Trading (Video Series)"
        chaptercount="14 chapters"
       description="An option is a contract where the price of the options is based on an underlying. Options contracts grant the buyer the right to buy the underlying without a compulsory obligation."
         route="/videos/video-mod-5"
      />

        <RightSection
        imageURL="media/images/videomod6.png"
       heading="Assorted Concepts (Video Series)"
       chaptercount="10 chapters"
       description="Bite sized videos explaining various financial and stock market concepts."
         route="/videos/video-mod-6"
      />
      {/* <p className="text-center mt-5 mb-5">
        Want to know more about our technology stack? Check out the Zerodha.tech
        blog.
      </p>
      <Universe /> */}
    </>
  );
}

export default ProductPage;
