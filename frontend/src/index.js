import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import './index.css';
import HomePage from './landing_page/home/Homepage';
// import Signup from "./landing_page/signup/Signup";
 import AboutPage from "./landing_page/about/AboutPage";
 import ProductPage from "./landing_page/products/ProductsPage";
 import JuniorPage from "./landing_page/Junior/JuniorPage";
 import SupportPage from "./landing_page/support/SupportPage";

import NotFound from "./landing_page/NotFound";
// import Navbar from "./landing_page/Navbar";
import Footer from "./landing_page/Footer";
import Videomod1 from './landing_page/products/videomod1';
import Videomod2 from './landing_page/products/videomod2';
import Videomod3 from './landing_page/products/videomod3';
import Videomod4 from './landing_page/products/videomod4';
import Videomod5 from './landing_page/products/videomod5';
import Videomod6 from './landing_page/products/videomod6';
import Home from './components/Home';
import Home2 from './components/Home2';
import Summary from './components/Summary';
import Orders from './components/Orders';
//import BuyActionWindow from './components/BuyActionWindow';
import BuyActionWindow from './components/BuyActionWindow';
import Positions from './components/Positions';
import Holdings from './components/Holdings';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <BrowserRouter>
  <Toaster/>
      {/* <Navbar /> */}
      <Routes>
        <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
           <Route path="/videos" element={<ProductPage />} />
             <Route path="/junior" element={<JuniorPage />} />
              <Route path="/support" element={<SupportPage />} />
               <Route path="/videos/video-mod-1" element={<Videomod1 />} />
                 <Route path="/videos/video-mod-2" element={<Videomod2 />} />
                   <Route path="/videos/video-mod-3" element={<Videomod3 />} />
                     <Route path="/videos/video-mod-4" element={<Videomod4 />} />
                       <Route path="/videos/video-mod-5" element={<Videomod5 />} />
                         <Route path="/videos/video-mod-6" element={<Videomod6 />} />
        {/* * route  is hit when no route matches */}
          <Route path="*" element={<NotFound />} />

         
       <Route element={
       
          <Home />
       
      } >


<Route  path="/dashboard/summary" element={<Summary />} />
<Route  path="/dashboard/orders" element={<Orders />} />
 {/* <Route  path="/dashboard/buywindow" element={<BuyActionWindow />} />  */}
 <Route  path="/dashboard/positions" element={<Positions />} />
 <Route  path="/dashboard/holdings" element={<Holdings />} />


  
  


</Route> 




  {/* <Route element={<Home2 />} >
 <Route  path="/dashboard/buywindow" element={<BuyActionWindow />} />



  
  


</Route>  */}






      </Routes>
      <Footer />
    </BrowserRouter>
);
