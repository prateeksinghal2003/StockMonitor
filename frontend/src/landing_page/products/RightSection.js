// import React from "react";

// function RightSection({ imageURL, productName, productDesription, learnMore }) {
//   return (
//     <div className="container mt-5">
//       <div className="row">
//         <div className="col-6 p-5 mt-5">
//           <h1>{productName}</h1>
//           <p>{productDesription}</p>
//           <div>
//             <a href={learnMore}>Learn More</a>
//           </div>
//         </div>
//         <div className="col-6">
//           <img src={imageURL} />
//         </div>
//       </div>
//     </div>
//   );
// }

// export default RightSection;










import React from "react";
import {Link} from "react-router-dom"

function RightSection({
  imageURL,
  heading,
  chaptercount,
 description,
 route
   
}) {
  return (
  <div className="container ">
      <div className="row">

      {/* first 50 percent */}
        <di  className="col-6 mt-5">
         <h3>{heading}</h3>
            <p>{chaptercount}</p>
            <div class="descript">{description}</div>

              <Link to={route}>
               Let&apos;s Learn
              </Link>

        
        </di>

{/* 
       
        <div className="col-6 p-5 mt-5">

          <h1>{productName}</h1>
          <p>{productDesription}</p>

          <div>
            <a href={tryDemo}>Try Demo</a>
            <a href={learnMore} style={{ marginLeft: "50px" }}>
              Learn More
            </a>
          </div>

          <div className="mt-3">
            <a href={googlePlay}>
              <img src="media/images/googlePlayBadge.svg" />
            </a>
            <a href={appStore}>
              <img
                src="media/images/appstoreBadge.svg"
                style={{ marginLeft: "50px" }}
              />
            </a>
          </div>
          
        </div> */}


         <div className="col-6 p-5 mt-1">

          <h3>{heading}</h3>
             <img src={imageURL} />

         </div>

       


      </div>
    </div>
  );
}

export default RightSection;

