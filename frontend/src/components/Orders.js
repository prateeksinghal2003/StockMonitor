import React from "react";
import { useState,useEffect } from "react";
import { Link } from "react-router-dom";
import axios, { all } from "axios";

const Orders = () => {
  const [allorders, setAllOrders] = useState([]);

  useEffect(() => {
      axios.get("http://localhost:3001/allOrders").then((res) => {
        // console.log(res.data);
        setAllOrders(res.data);
      });
    }, []);
  
  return (
    <div className="orders">
   {
     allorders.length ===0 ? (
       <div className="no-orders">
        <p>You haven't placed any orders today</p>

        <Link to={"/dashboard/summary"} className="btn">
          Get started
        </Link>
      </div>
     ) :(
         <>
          <h3 className="title">Orders ({allorders.length})</h3>
              <div className="order-table">
        <table>
          <tr>
            <th>Name</th>
        
            <th>Qty.</th>
         
            <th>Price</th>
           
            <th>Mode</th>
          </tr>

          {allorders.map((stock, index) => {
        

            return (
              <tr key={index}>
             
                <td>{stock.name}</td>
                <td>{stock.qty}</td>
           
                <td>{stock.price}</td>
               
                <td >{stock.mode}</td>
              </tr>
            );
          })}
        </table>
      </div>
         </>
              
     )

   }

     
    </div>
  );
};

export default Orders;
