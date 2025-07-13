import React from "react";
import {TypeAnimation} from 'react-type-animation'

const CodingBlock = (
    {codeline1,codeline2}
) =>
{
   return(
     <div className="row p-5 mt-5 mb-5">
     <h1 class="about-heading">
          <TypeAnimation
            sequence={[codeline1, 1000, ""]}
            cursor={true}
            repeat={Infinity}
            style={{
              whiteSpace: "pre-line",
              display: "block",
            }}
            omitDeletionAnimation={true}
          />
     </h1>
<br></br>
     <h1 class="about-heading">
          <TypeAnimation
            sequence={[codeline2, 1000, ""]}
            cursor={true}
            repeat={Infinity}
            style={{
              whiteSpace: "pre-line",
              display: "block",
            }}
            omitDeletionAnimation={true}
          />
     </h1>



     </div>
   )
}


export default CodingBlock