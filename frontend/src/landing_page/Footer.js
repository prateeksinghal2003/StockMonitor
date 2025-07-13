import React from "react";
import { FaYoutube } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa6";
import {Link} from "react-router-dom";

function Footer() {
  return (
    <footer style={{ backgroundColor: "rgb(250, 250, 250)" }}>

      <div className="container border-top mt-5">

        <div className="row mt-5">

          <div className="footcol">
          
            <img src={`${process.env.PUBLIC_URL}/media/images/stockmonitor3.png`} style={{ width: "50%" }} />
            <br></br>

            <div className="row">

            <div className="col" style={{ marginTop: '0.5rem' }}>
           <FaYoutube  size={24}/>
             <FaSquareXTwitter size={24} style={{ marginLeft: '0.5rem' }}/>
             <FaInstagramSquare size={24} style={{ marginLeft: '0.5rem' }} />
             <FaWhatsapp size={24} style={{ marginLeft: '0.6rem'}}/>
            </div>

         
          
            </div>
          
          
          </div>

          <div className="footcol">
            <p>Company</p>
            <a href="https://zerodha.com/varsity"  style={{ textDecoration: "none" }} target="blank">Varsity</a>
            <br />
            <a href="https://www.investopedia.com"  style={{ textDecoration: "none" }} target="blank">Investopedia</a>
            <br />
            <a href=" https://www.tradingview.com/learn"  style={{ textDecoration: "none" }} target="blank">Trading View</a>
            <br />
            <a href=" https://www.nseindia.com/education"  style={{ textDecoration: "none" }} target="blank">NSE India</a>
            <br />
            <a href="https://www.moneycontrol.com/mschool/"  style={{ textDecoration: "none" }} target="blank">Money Control</a>
            <br />
         
            
          </div>

          <div className="footcol">
            <p>Support</p>
            <a href=""  style={{ textDecoration: "none" }}>Contact</a>

            <Link to="/support" style={{ textDecoration: 'none',  }}>
             <p style={{marginTop: '12px'}}>Support portal</p>
            </Link>

            <a href="" style={{ textDecoration: "none", marginTop: "-5px", display: "inline-block" }}>Downloads & resources</a>
           </div>


          <div className="footcol">
            <p>Account</p>
            <a href=""  style={{ textDecoration: "none" }}>Open an account</a>
            <br />
            <a href=""  style={{ textDecoration: "none" }}>Fund transfer</a>
            <br />
            <a href=""  style={{ textDecoration: "none" }}>60 day challenge</a>
            <br />
          </div>

        </div>


        <div className="mt-5 text-muted" style={{ fontSize: "14px" }}>
          <p>
           This website is an independent educational project created to help beginners understand the basics of the stock market and explore trading platforms. We are not affiliated with Zerodha Broking Ltd. or any financial institution mentioned here.
          </p>

          <p>
          All content shared is for educational purposes only and should not be considered financial or investment advice. Please do your own research or consult a SEBI-registered advisor before making any investment decisions.
          </p>

          <p>
         Investing in the stock market involves risk. Read all relevant documents carefully before investing.
         If you're looking for official information , visit their official website.
          </p>

          <p>
            "Prevent unauthorised transactions in your account. Update your
            mobile numbers/email IDs with your stock brokers. Receive
            information of your transactions directly from Exchange on your
            mobile/email at the end of the day. Issued in the interest of
            investors. KYC is one time exercise while dealing in securities
            markets - once KYC is done through a SEBI registered intermediary
            (broker, DP, Mutual Fund etc.), you need not undergo the same
            process again when you approach another intermediary." Dear
            Investor, if you are subscribing to an IPO, there is no need to
            issue a cheque. Please write the Bank account number and sign the
            IPO application form to authorize your bank to make payment in case
            of allotment. In case of non allotment the funds will remain in your
            bank account. As a business we don't give stock tips, and have not
            authorized anyone to trade on behalf of others. 
          </p>
        </div>
      </div>

    </footer>
  );
}

export default Footer;
