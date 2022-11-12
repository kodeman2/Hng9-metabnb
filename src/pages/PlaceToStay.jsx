import "./placetostay.css";

import One from "../cards/inspiration1.svg";
import Two from "../cards/inspiration2.svg";
import Three from "../cards/inspiration3.svg";
import Four from "../cards/inspiration4.svg";
import Five from "../cards/inspiration5.svg";
import Six from "../cards/inspiration6.svg";
import Seven from "../cards/inspiration7.svg";
import Eight from "../cards/inspiration8.svg";
import Nine from "../cards/inspiration9.svg";
import Ten from "../cards/inspiration10.svg";
import Eleven from "../cards/inspiration11.svg";
import Twelve from "../cards/inspiration12.svg";
import Thirteen from "../cards/inspiration13.svg";
import Fourteen from "../cards/inspiration14.svg";
import Fifteen from "../cards/inspiration15.svg";
import Sixteen from "../cards/inspiration16.svg";
import { VscSettings } from "react-icons/vsc"



export default function PlaceToStay() {

  const places = [

    One,
    Two,
    Three,
    Four,
    Five,
    Six,
    Seven,
    Eight,
    Nine,
    Ten,
    Eleven,
    Twelve,
    Thirteen,
    Fourteen,
    Fifteen,
    Sixteen,
  ];

  const placehead = [
   "Resturant",
   "Cottage",
   "Castle",
   "fantast city",
   "Beach",
   "Carbins",
   "Off-grid",
   "Farm",
  ];

  return (
    <div className="placetostay">
     <div className="placepage">

      <div className="placehead">
       <div className="placelist">
        {placehead.map((place) => (
          <div className="placeitem">
           
           <h1>{place}</h1>
           </div>))}
       </div>
      
<div className="placebutton">

       <button>Location </button>
       <span className="pt-1"><VscSettings /></span>
</div>
       </div>
       <div>

       <div className="placebody">
        {/* 1st container */}
        {places.map((place) => (
          <div className="placecard">
           <img src={place} alt="place" />
           <div className="placetext">
            <div className="uptext">
             <span>Desert King</span>
             <h4>1MBT per night</h4>
             </div>
            <div className="downtext">
              <span>2345km away</span>
              <p>available for 2weeks stay</p>
            </div>
          </div>
          <img src="./src/assets/ratings.png" alt="rating" className="rating" />
        </div>
           
         ))}
        </div>

        
       </div>
     </div>

    </div>
  )
}
