import React from "react";
import { Outlet, Route, Routes } from "react-router-dom";

//import Apps from "./Apps";
import Funds from "./Funds";
import Holdings from "./Holdings";

import Orders from "./Orders";
import Positions from "./Positions";
import Summary from "./Summary";
import WatchList from "./WatchList";
import { GeneralContextProvider } from "./GeneralContext";


const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <GeneralContextProvider>
        <WatchList />
      </GeneralContextProvider>
  

      <div className="content">
        {/* <Routes>
          <Route exact path="/" element={<Summary />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/holdings" element={<Holdings />} />
          <Route path="/positions" element={<Positions />} />
          <Route path="/funds" element={<Funds />} />
   
        </Routes> */}
        <Outlet></Outlet>
      </div>


    </div>
  );
};

export default Dashboard;



// import React, { useState } from "react";
// import { Outlet } from "react-router-dom";

// import BuyActionWindow from "./BuyActionWindow";
// import WatchList from "./WatchList";
// import  GeneralContext  from "./GeneralContext";

// const Dashboard = () => {

//  const GeneralContext = React.createContext({
//   openBuyWindow: (uid) => {},
//   closeBuyWindow: () => {},
// }); 

//   const [isBuyWindowOpen, setIsBuyWindowOpen] = useState(false);
//   const [selectedStockUID, setSelectedStockUID] = useState("");

//   const handleOpenBuyWindow = (uid) => {
//     setIsBuyWindowOpen(true);
//     setSelectedStockUID(uid);
//   };

//   const handleCloseBuyWindow = () => {
//     setIsBuyWindowOpen(false);
//     setSelectedStockUID("");
//   };

//   return (
//     <div className="dashboard-container">
//       <GeneralContext.Provider
//         value={{
//           openBuyWindow: handleOpenBuyWindow,
//           closeBuyWindow: handleCloseBuyWindow,
//         }}
//       >
//         <WatchList />
//         <div className="content">
//           {isBuyWindowOpen ? (
//             <BuyActionWindow uid={selectedStockUID} />
//           ) : (
//             <Outlet />
//           )}
//         </div>
//       </GeneralContext.Provider>
//     </div>
//   );
// };

// export default Dashboard;
