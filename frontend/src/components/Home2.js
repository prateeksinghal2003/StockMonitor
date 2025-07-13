import React from "react";

import Dashboard from "./Dashboard";
import TopBar from "./TopBar";
import   "./Dashboard.css";
import BuyActionWindow from "./BuyActionWindow";
import { Outlet } from "react-router-dom";
import WatchList from "./WatchList";
import { GeneralContextProvider } from "./GeneralContext";

const Home2 = ({uid}) => {
  return (
    <>
      {/* <TopBar />
    <div className="dashboard-container">
       
           <WatchList />
    
     
   
         <div className="content">
       
        
          
         </div>
   
   
       </div> */}
       <BuyActionWindow uid={uid}></BuyActionWindow>
         
     
    </>
  );
};

export default Home2;
