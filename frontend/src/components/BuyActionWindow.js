import React, { useState,useContext} from "react";
import { Link } from "react-router-dom";
import { toast } from "react-hot-toast"


import axios from "axios";

import GeneralContext from "./GeneralContext";

import "./BuyActionWindow.css";


// axios.post(...) – sends a POST request.

// URL: http://localhost:3001/newOrder – the backend endpoint.

// Payload:

// name: likely the user ID (uid).

// qty: quantity of stock to buy.

// price: price per stock.

// mode: "BUY" – indicates this is a buy order.

// Purpose: It likely creates a new stock buy order on the server.

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
    }).then((res) => {
 
    toast.success(uid + " Stock bought Successfully");
});
   // console.log(res);
    generalContext.closeBuyWindow();
  };

  

  const handleCancelClick = () => {
   generalContext.closeBuyWindow();
  };

  return (
    <div>
      
       <div className="buycontainer" id="buy-window">

      <div className="regular-order">

        <div className="inputs">

      {/* It’s like a box that groups related form elements.
     It usually has a border around it.
🏷️   What is <legend>?
     It’s the title of that box.
     It tells what the inputs inside the box are about. */}
          <fieldset id="firstfield">
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
           <legend style={{ color: "black" }}>Price</legend>
            <input
              type="number"
              name="price"
              id="price"
              step="100"
              onChange={(e) => setStockPrice(e.target.value)}
              value={stockPrice}
            />
          </fieldset>

        </div>
      </div>


      <div className="buttons">

        <span>Margin required ₹140.65</span>

        <div>

          <Link className="buywindbtn buybtn-blue" onClick={handleBuyClick}>
            Buy
          </Link>

          <button className="buywindbtn canbtn-grey" onClick={handleCancelClick}>
                Cancel
          </button>

        </div>

      </div>

    </div>

    </div>
 
  );
};

export default BuyActionWindow;
