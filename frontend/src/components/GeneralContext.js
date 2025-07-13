import React, { useState,useEffect } from "react";

import BuyActionWindow from "./BuyActionWindow";
import {useNavigate}  from "react-router-dom"
import Home2 from "./Home2";

//React.createContext() defines what values (state/functions) will be shared.
// They are functions that will control state inside the Provider component.
// These functions will be shared globally through Context.

const GeneralContext = React.createContext({
  openBuyWindow: (uid) => {},
  closeBuyWindow: () => {},
  stockname :"",
});

export const GeneralContextProvider = (props) => {
  const [isBuyWindowOpen, setIsBuyWindowOpen] = useState(false);
  const [selectedStockUID, setSelectedStockUID] = useState("");

  const navigate=useNavigate();

  const handleOpenBuyWindow = (uid) => {
    setIsBuyWindowOpen(true);
    setSelectedStockUID(uid);
  };

  const handleCloseBuyWindow = () => {
    setIsBuyWindowOpen(false);
    setSelectedStockUID("");
  };
//  useEffect(() => {
//     if (isBuyWindowOpen) {
//       navigate("dashboard/buywindow");
//     }
//   }, [isBuyWindowOpen, navigate]);
  return (
    <GeneralContext.Provider
      value={{
        openBuyWindow: handleOpenBuyWindow,
        closeBuyWindow: handleCloseBuyWindow,
        stockname :selectedStockUID
      }}
    >
    
{/* This renders whatever components are wrapped inside <GeneralContextProvider>. */}
      {props.children}

      
      {
        isBuyWindowOpen &&  <Home2 uid={selectedStockUID}></Home2>
      
       }
    </GeneralContext.Provider>
  );
};

export default GeneralContext;



// import React from "react";

// const GeneralContext = React.createContext({
//   openBuyWindow: (uid) => {},
//   closeBuyWindow: () => {},
// });

// export default GeneralContext;

 // {/* navigate("dashboard/buywindow") */}