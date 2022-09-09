import React from "react";
import playStore from "./images/Appstore.png";
import appStore from "./images/playstore.png";
import tempo from "./images/tempo.png";
import cus from "./images/cus.jpg";
import "./App.css";

const Footer = () => {
  return (
    <footer id="footer">
      <div className="leftFooter">
        <div>
        <h4>DOWNLOAD OUR APP</h4>
        </div>
        <div className="foot">
        <img src={playStore} alt="playstore" /> 
        <img src={appStore} alt="Appstore" />
         </div>

      </div>

      <div className="midFooter">
        <div className="center-foot">
            <div className="matrix">
            <img className="immm" src={tempo} alt="tempo" />
              <h3>Free Delivery</h3>
              <p >Delivery happens within 5-10 days</p>
            </div>
            <div className="matrix">
            <img className="immm" src={cus} alt="tempo" />
            <h3>Customer Support</h3>
            <a href="mailto:asquarehydro@gmail.com" class="subTitle">asquarehydro@gmail.com</a>
            </div>
        </div>
        
      </div>
      <div className="rightFooter">
        <h4>Follow Us</h4>
        <div className="social"> 
        <a href="http://instagram.com/akshupdf">Instagram</a> 
        <br />
        <a href="http://facebook.com/akshupdf">Facebook</a>
        </div>
        
      </div>
    </footer>
  );
};

export default Footer;