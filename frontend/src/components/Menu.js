import React, { useState,useContext } from "react";

import { Link } from "react-router-dom";
import GeneralContext from "./GeneralContext";

// custom css line 105 to 199
const Menu = () => {

    //to know which option is sellected
    //0 means first index
  const [selectedMenu, setSelectedMenu] = useState(0);
  const generalContext = useContext(GeneralContext);

  //hook for profile dropdown
 // const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);

  const handleMenuClick = (index) => {
    setSelectedMenu(index);
    handleCancelClick();
  };

  const handleCancelClick = () => {
   generalContext.closeBuyWindow();
  };


  //toggle the value 
  // const handleProfileClick = (index) => {
  //   setIsProfileDropdownOpen(!isProfileDropdownOpen);
  // };


   //highlight the current option
  const menuClass = "dashmenu";
  const activeMenuClass = "dashmenuselected";

  return (
    <div className="menu-container">

      <img src={`${process.env.PUBLIC_URL}/media/images/topbarmenulogo.png`} style={{ width: "50px", marginBottom: "0.5rem" }}  />
      
      <div className="dashmenus">

        <ul>
          <li>

            <Link
               style={{ textDecoration: "none" }}
              to="/dashboard/summary"
              onClick={() => handleMenuClick(0)}
            >
              <p className={selectedMenu === 0 ? activeMenuClass : menuClass}>
                Dashboard
              </p>
            </Link>
          </li>

          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/dashboard/orders"
              onClick={() => handleMenuClick(1)}
            >
              <p className={selectedMenu === 1 ? activeMenuClass : menuClass}>
                Orders
              </p>
            </Link>
          </li>


          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/dashboard/holdings"
              onClick={() => handleMenuClick(2)}
            >
              <p className={selectedMenu === 2 ? activeMenuClass : menuClass}>
                Holdings
              </p>
            </Link>
          </li>


          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/dashboard/positions"
              onClick={() => handleMenuClick(3)}
            >
              <p className={selectedMenu === 3 ? activeMenuClass : menuClass}>
                Positions
              </p>
            </Link>
          </li>


          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/funds"
              onClick={() => handleMenuClick(4)}
            >
              <p className={selectedMenu === 4 ? activeMenuClass : menuClass}>
                Funds
              </p>
            </Link>
          </li>


          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/apps"
              onClick={() => handleMenuClick(6)}
            >
              <p className={selectedMenu === 6 ? activeMenuClass : menuClass}>
                Apps
              </p>
            </Link>
          </li>


        </ul>


       

        <div className="profile" >

          <div className="avatar">ZU</div>
          <p className="username">USERID</p>
        </div>


      </div>

    </div>
  );
};

export default Menu;
