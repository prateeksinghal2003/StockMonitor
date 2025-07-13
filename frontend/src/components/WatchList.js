import React, { useState, useContext } from "react";
//import {useNavigate} from "react-router-dom";

//import axios from "axios";

import GeneralContext from "./GeneralContext";

import { Tooltip} from "@mui/material";
import Zoom from '@mui/material/Zoom';

import {
  BarChartOutlined,
  KeyboardArrowDown,
  KeyboardArrowUp,
  MoreHoriz,
} from "@mui/icons-material";

import { watchlist } from "../data/data";
import { DoughnutChart } from "./DoughnoutChart";

const labels = watchlist.map((stock) => stock.name);

const WatchList = () => {
  const data = {
    labels,
    datasets: [
      {
        label: "Price",
        data: watchlist.map((stock) => stock.price),
        backgroundColor: [
          "rgba(255, 99, 132, 0.5)",
          "rgba(54, 162, 235, 0.5)",
          "rgba(255, 206, 86, 0.5)",
          "rgba(75, 192, 192, 0.5)",
          "rgba(153, 102, 255, 0.5)",
          "rgba(255, 159, 64, 0.5)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  

  return (
    <div className="watchlist-container">

      <div className="search-container">
        <input
          type="text"
          name="search"
          id="search"
          placeholder="Search eg:infy, bse, nifty fut weekly, gold mcx"
          className="search"/>
  
        
      
        <span className="counts"> {watchlist.length}</span>
      </div>

      <ul className="list">
        {watchlist.map((stock, index) => {
          return <WatchListItem stock={stock} key={index} />;
        })}
      </ul>

      <DoughnutChart data={data} />
    </div>
  );
};

export default WatchList;

const WatchListItem = ({ stock }) => {

// currently which stock is selected
  const [showWatchlistActions, setShowWatchlistActions] = useState(false);


  const handleMouseEnter = (e) => {
    setShowWatchlistActions(true);
  };

  const handleMouseLeave = (e) => {
    setShowWatchlistActions(false);
  };

  return (
    <li onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>

      <div className="watchlistitem">

    
        <p className={stock.isDown ? "down" : "up"}>{stock.name}</p>

        <div className="watchlistitem-info">

        {/* //right end of menu list */}
          <span className="percent" >{stock.percent}</span>

        { stock.isDown ? 
          (
            <KeyboardArrowDown className="down" style={{
  color: "rgb(223, 73, 73)",
  fontWeight: 500,
  marginTop: "4px",
  marginBottom :"0px"
}} />
          ) : 
          (
            <KeyboardArrowUp style={{
  color: "rgb(103, 201, 136)",
  fontWeight: 500,
  marginTop: "4px",
  marginBottom :"0px"
}} />
          )
        }
          <p className={stock.isDown ? "down" : "up"}>{stock.price}</p>
        </div>

      </div>
      {showWatchlistActions && <WatchListActions uid={stock.name} />}
    </li>
  );
};


//uid is identifying each item
const WatchListActions = ({ uid }) => {
 const generalContext = useContext(GeneralContext);
 



  const handleBuyClick = () => {
    generalContext.openBuyWindow(uid);
 
  };

  return (
    <span className="actions">

      <span>
      {/* read MaterialUI docs */}
      
      {/* <Tooltip
  title="Buy (B)"           // Tooltip text when hovered
  placement="top"           // Show tooltip above the element
  arrow                    // Show a small arrow pointing to the element
  slots={{
    transition: Zoom,      // Use Zoom animation for tooltip
  }}
  onClick={handleBuyClick} // (⚠️ see note below)
></Tooltip> */}

        <Tooltip
          title="Buy (B)"
          placement="top"
          arrow
           slots={{
          transition: Zoom,
        }}
      
          onClick={handleBuyClick}
        >
          <button className="buy">Buy</button>
        </Tooltip>


        <Tooltip
          title="Sell (S)"
          placement="top"
          arrow
            slots={{
          transition: Zoom,
        }}>
          <button className="sell">Sell</button>
        </Tooltip>

        <Tooltip
          title="Analytics (A)"
          placement="top"
          arrow
          slots={{
          transition: Zoom,
        }}
        >
          <button className="action">
            <BarChartOutlined className="icon" />
          </button>
        </Tooltip>

        <Tooltip title="More" placement="top" arrow   slots={{
          transition: Zoom,
        }}>
          <button className="action">
            <MoreHoriz className="icon" />
          </button>
        </Tooltip>

      </span>

    </span>
   
  );
};
