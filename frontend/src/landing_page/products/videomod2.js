import React from "react";
import {Link} from "react-router-dom";
import { useState } from "react";
//import styles from './Videos.module.css';
import  './Videos.css';

import Navbar from "../Navbar" ;

 function Videomod2(){
const url=["https://www.youtube.com/embed/GcZW24SkbHM", "https://www.youtube.com/embed/C7_JHlsqFlM",
           "https://youtube.com/embed/SV7v5WRDtLE" ,"https://youtube.com/embed/HaiM8jPDEhk" , 
           "https://youtube.com/embed/-h1R5oIL0PI", "https://youtube.com/embed/z21PrHuEkKg "];
 const[tag,setTag] = useState(url[0]);     
 
 function onclickmanage(e)
 {
    setTag(url[e.target.id]);
 }



return (
    <div>
    <Navbar></Navbar>
      <div class="container">
<div>
    <div>
        <section class="single-chapter video" >
            <header>
                <div class="row">
                <div class="eight columns">
                    <p ><strong>Module 2. Technical Analysis (Video Series)</strong></p>
                </div>

           <Link to="/videos" class="four columns text-right" style={{ color: 'inherit', textDecoration: 'none' }}>
             ← Back to video modules
           </Link>
                </div>
            </header>



<section class="chapter-body" style={{ marginTop: "2rem" }}>
<div class="row">
    <div class="five columns">

<ul class="noul chapter-list videos">
    <li class="viditem video-list-item">
        <div onClick={onclickmanage} id="0"> 1. Why should you Invest? </div>
        <div class="text-small">00:08:25</div>
    </li>
    <li class="viditem video-list-item">
        <div  onClick={onclickmanage} id="1"> 2. Market Intermediaries </div>
        <div class="text-small">00:08:58</div>
    </li>
    <li class="viditem video-list-item">
        <div onClick={onclickmanage} id="2"> 3. All about the Initial Public Offer (IPO) </div>
        <div class="text-small">00:08:07</div>
    </li>
    <li class="viditem video-list-item">
        <div  onClick={onclickmanage} id="3" > 4. Why do stock prices fluctuate? </div>
        <div class="text-small">00:03:51</div>
    </li>
    <li class="viditem video-list-item">
        <div onClick={onclickmanage} id="4"> 5. How does a trading platform work? </div>
        <div class="text-small">00:07:07</div>
    </li>
    <li class="viditem video-list-item">
        <div onClick={onclickmanage} id="5"> 6. Stock Market Index </div>
        <div class="text-small">00:07:09</div>
    </li>
</ul>



    </div>


<div class="seven columns">
    <div class="post">
        <p >
            <iframe title="YouTube video player" src={tag} width="560" height="315" frameborder="0" allowfullscreen="allowfullscreen"></iframe>
        </p>
    </div>
</div>







</div>

</section>






        </section>   
         </div>
</div>

</div>
    </div>
 )
}

export default Videomod2;