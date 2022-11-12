import "./herosection.css";
import  metamask from "../assets/metamask.svg";
import  mbtoken from "../assets/mbtoken.svg";
import opensea from "../assets/opensea.svg";
import heroimg from "../assets/heroimg.png";

export default function Herosection() {
  return (
    <div className="herosection">
      <div className="herosectiontopcontainer">
        <div className="lefthero">

        <h1>
            Rent a <span className="textspancolor">Place</span> away from{" "}
            <span className="textspancolor">Home</span> in the <span className="textspancolor">Metaverse</span>
          </h1>

          <p>
            we provide you access to luxury and affordable houses in the
            metaverse, get a chance to turn your  imagination to reality at your
            comfort zone
          </p>

          <span>
          <input
              type="search"
              name=""
              id=""
              placeholder="search for location"
         
            />
             <button>
              Search
            </button></span>
            
        </div>
        <div className="righthero">

         <img src={heroimg} alt="heroimage" className="heroimage" />
        </div>
      </div>
      <div className="herosectionbottomcontainer">
      <img src={mbtoken} alt="mbtoken" id="imgStyle" />
        <img src={metamask} alt="metamask" id="imgStyle" />
        <img src={opensea} alt="opensea" id="imgStyle" />
      </div>
    </div>
  );
}
