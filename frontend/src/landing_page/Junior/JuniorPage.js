// import React from "react";
// import Hero from "./Hero";
// import Brokerage from "./Brokerage";
// import OpenAccount from "../OpenAccount";

// function PricingPage() {
//   return (
//     <>
//       <Hero />
//       <OpenAccount />
//       <Brokerage />
//     </>
//   );
// }

// export default PricingPage;



import React from "react";
import {Link} from "react-router-dom";
import { useState } from "react";
import Navbar from "../Navbar";

 function Junior(){
const url=["https://youtube.com/embed/9155SZc96kk", "https://youtube.com/embed/D916Xq4Fbxg",
           "https://youtube.com/embed/5O2f--QwFEI"];
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
        <section class="single-chapter video">
            <header>
                <div class="row">
                <div class="eight columns">
                    <p ><strong>Module : Junior Section</strong></p>
                </div>

           <Link to="/videos" class="four columns text-right" style={{ color: 'inherit', textDecoration: 'none' }}>
             ← Back to video modules
           </Link>
                </div>
            </header>



<section className="chapter-body" style={{ marginTop: "2rem" }}>
<div class="row">
    <div class="five columns">

<ul class="noul chapter-list videos">
    <li class="viditem video-list-item">
        <div onClick={onclickmanage} id="0"> 1. Ideas by the lake </div>
        <div class="text-small">00:13:32</div>
    </li>
    <li class="viditem video-list-item">
        <div  onClick={onclickmanage} id="1"> 2. The vegetable list</div>
        <div class="text-small">00:15:44</div>
    </li>
    <li class="viditem video-list-item">
        <div onClick={onclickmanage} id="2"> 3. The Haircut Affair</div>
        <div class="text-small">00:11:52</div>
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

export default Junior;
