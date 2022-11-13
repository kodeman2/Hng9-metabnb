import "./bottommain.css";
import bottom from "../assets/bottom.png";

export default function BottomMain() {

  // bottom section of home page
  return (
    <div className="bottommain">
     <div className="leftbottom">
       <h2>Metabnb NFTs</h2>
       <p>

       Discover our NFT gift cards collection. Loyal customers gets amazing gift cards which are traded as NFTs. These NFTs gives our cutomer access to loads of our exclusive services.
       </p>
       <button>Learn more</button>

     </div>
     <div className="rightbottom">

      {/* bottom section image */}
      <img src={bottom} alt="bottomm" className="bottomimg" />
      </div>
     </div>
  )
}
