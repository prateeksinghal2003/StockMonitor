import React, { useState,useEffect } from "react";

import BuyActionWindow from "./BuyActionWindow";

import Home2 from "./Home2";

//React.createContext() defines what values (state/functions) will be shared.
// They are functions that will control state inside the Provider component.
// These functions will be shared globally through Context.

const GeneralContext = React.createContext({
  openBuyWindow: (uid) => {},
  closeBuyWindow: () => {},
 
});

export const GeneralContextProvider = (props) => {
  const [isBuyWindowOpen, setIsBuyWindowOpen] = useState(false);
  const [selectedStockUID, setSelectedStockUID] = useState("");

 
  const handleOpenBuyWindow = (uid) => {
    setIsBuyWindowOpen(true);
    setSelectedStockUID(uid);
  };

  const handleCloseBuyWindow = () => {
    setIsBuyWindowOpen(false);
    setSelectedStockUID("");
  };

  return (
    <GeneralContext.Provider
      value={{
        openBuyWindow: handleOpenBuyWindow,
        closeBuyWindow: handleCloseBuyWindow,
      
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