import React from "react";
import "./footer.css";
import fb from "../assets/facebook.png";
import twitter from "../assets/twitter.png";
import insta from "../assets/instagram.png";
import footlogo from "../assets/footerLogo.svg";


// footer section

export default function Footer() {
  return (
    <div className="footer">
      <div className="footerlogocontainer">
        <div className="footerlogotop">

          {/* footer logo section */}
          <img
            src={footlogo}
            alt="logo"
            className="footerlogo"
          />
        </div>
        <div className="footerlogomid">
         <img src={fb} alt="facebook" className="footerlogoicon" />
          <img src={twitter} alt="twitter" className="footerlogoicon" />
          <img src={insta} alt="instagram" className="footerlogoicon" />
        
        </div>
        <div className="footerlogobottom">
          <p>&copy; 2022 Metabnb</p>
        </div>
      </div>

      {/* footer list */}
      <div className="footerlist">
        <ul>
          <li>
            <a href="#">Community</a>{" "}
          </li>
          <li>
            <a href="#">NFTs</a>{" "}
          </li>
          <li>
            <a href="#">Tokens</a>{" "}
          </li>
          <li>
            <a href="#">Landlords</a>{" "}
          </li>
          <li>
            <a href="#">Discord</a>{" "}
          </li>
        </ul>
        <ul>
          <li>
            <a href="#">Places</a>{" "}
          </li>
          <li>
            <a href="#">Castle</a>{" "}
          </li>
          <li>
            <a href="#">Farms</a>{" "}
          </li>
          <li>
            <a href="#">Beach</a>{" "}
          </li>
          <li>
            <a href="#">Learn more</a>{" "}
          </li>
        </ul>
        <ul>
          <li>
            <a href="#"> About us</a>{" "}
          </li>
          <li>
            <a href="#">Road map</a>{" "}
          </li>
          <li>
            <a href="#"> Creators</a>
          </li>
          <li>
            <a href="#">Career</a>{" "}
          </li>
          <li>
            <a href="#">Contact us</a>{" "}
          </li>
        </ul>
      </div>
    </div>
  );
}
