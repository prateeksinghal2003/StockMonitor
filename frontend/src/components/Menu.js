import React, { useState} from "react";

import { Link } from "react-router-dom";

// custom css line 105 to 199
const Menu = () => {

    //to know which option is sellected
    //0 means first index
  const [selectedMenu, setSelectedMenu] = useState(0);
 

  //hook for profile dropdown
 // const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);

 


  //toggle the value 
  // const handleProfileClick = (index) => {
  //   setIsProfileDropdownOpen(!isProfileDropdownOpen);
  // };


   //highlight the current option
  const menuClass = "dashmenu";
  const activeMenuClass = "dashmenuselected";

  return (
    <div className="menu-container">

    {/* process.env.PUBLIC_URL is used in React projects (especially with Create React App) to reference static files in the public folder.
    It gives the base URL where your app is hosted.

It helps in case your app is not hosted at root (e.g., /my-app instead of /).
If you're using Create React App and hosting at root (/), then:

js
Copy
Edit
process.env.PUBLIC_URL === ""
So:

js
Copy
Edit
`${process.env.PUBLIC_URL}/media/images/topbarmenulogo.png`
becomes:

js
Copy
Edit
"/media/images/topbarmenulogo.png" */}

      <img src={`${process.env.PUBLIC_URL}/media/images/topbarmenulogo.png`} style={{ width: "50px", marginBottom: "0.5rem" }}  />
      
      <div className="dashmenus">

        <ul>
          <li>

            <Link
               style={{ textDecoration: "none" }}
              to="/dashboard/summary"
             
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
