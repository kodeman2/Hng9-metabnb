import React from "react";
import "./footer.css";


export default function Footer() {
  return (
    <div className="footer">
      <div className="footerlogocontainer">
        <div className="footerlogotop">
          <img
            src="../../assets/footerlogo.svg"
            alt="logo"
            className="footerlogo"
          />
        </div>
        <div className="footerlogomid">
         <img src="../../assets/facebook.png" alt="facebook" className="footerlogoicon" />
          <img src="../../assets/twitter.png" alt="twitter" className="footerlogoicon" />
          <img src="../../assets/instagram.png" alt="instagram" className="footerlogoicon" />
        
        </div>
        <div className="footerlogobottom">
          <p>&copy; 2022 Metabnb</p>
        </div>
      </div>
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
