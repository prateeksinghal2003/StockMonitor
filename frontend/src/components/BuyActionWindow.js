import React, { useState,useContext} from "react";
import { Link } from "react-router-dom";

import axios from "axios";

import GeneralContext from "./GeneralContext";

import "./BuyActionWindow.css";

const BuyActionWindow = ({uid}) => {
  const [stockQuantity, setStockQuantity] = useState(1);
  const [stockPrice, setStockPrice] = useState(0.0);
const generalContext = useContext(GeneralContext);

  console.log(generalContext.stockname);

  const handleBuyClick = () => {
    axios.post("http://localhost:3001/newOrder", {
      name: uid,
      qty: stockQuantity,
      price: stockPrice,
      mode: "BUY",
    });
    generalContext.closeBuyWindow();
  };

  const handleCancelClick = () => {
   generalContext.closeBuyWindow();
  };

  return (
    <div>
      
       <div className="buycontainer" id="buy-window" draggable="true">
      <div className="regular-order">
        <div className="inputs">
          <fieldset>
            <legend>Qty.</legend>
            <input
              type="number"
              name="qty"
              id="qty"
              onChange={(e) => setStockQuantity(e.target.value)}
              value={stockQuantity}
            />
          </fieldset>
          <fieldset>
            <legend>Price</legend>
            <input
              type="number"
              name="price"
              id="price"
              step="0.05"
              onChange={(e) => setStockPrice(e.target.value)}
              value={stockPrice}
            />
          </fieldset>
        </div>
      </div>

      <div className="buttons">
        <span>Margin required ₹140.65</span>
        <div>
          <Link className="btn btn-blue" onClick={handleBuyClick}>
            Buy
          </Link>

          {/* <Link to="" className="btn btn-grey" onClick={handleCancelClick}>
            Cancel
          </Link> */}
          <button className="btn btn-grey" onClick={handleCancelClick}>
                Cancel
          </button>

        </div>
      </div>
    </div>
    </div>
 
  );
};

export default BuyActionWindow;
