import React from "react";
import {Link} from "react-router-dom";
import { RiDashboard3Line } from "react-icons/ri";
import { Tooltip} from "@mui/material";
import Zoom from '@mui/material/Zoom';

function Navbar() {
  return (
    <nav
      class="navbar navbar-expand-lg border-bottom"
      style={{ backgroundColor: "#FFF" }}
    >
      <div class="container p-2">
        <Link class="navbar-brand" to="/">
          <img
           src={`${process.env.PUBLIC_URL}/media/images/stockmonitor3.png`}
            style={{ width: "35%",height:"25%" }}
            alt="Logo"
          />
        </Link>

        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <form class="d-flex" role="search">
            <ul class="navbar-nav mb-lg-0">

              <li class="nav-item ">
                <Link class="nav-link active " aria-current="page" to="/">
                  Home
                </Link>
              </li>

              <li class="nav-item">
                <Link class="nav-link active" to="/about">
                  About
                </Link>
              </li>

              <li class="nav-item ">
                <Link class="nav-link active" to="/videos">
                 Videos
                </Link>
              </li>

              <li class="nav-item ">
                <Link class="nav-link active" to="/junior">
                  Junior
                </Link>
              </li>

              <li class="nav-item ">
                <Link class="nav-link active" to="/support">
                  Support
                </Link>
              </li>


               <li class="nav-item ">
                <Link class="nav-link active" to="/dashboard/summary">
                  <Tooltip
                        title="Dashboard"
                        placement="top"
                        arrow
                          slots={{
                        transition: Zoom,
                      }}>
                      
              
                       <RiDashboard3Line  style={{ fontSize: '28px' }}/>
                      </Tooltip>
                
                </Link>
              </li>

              



            </ul>
          </form>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
