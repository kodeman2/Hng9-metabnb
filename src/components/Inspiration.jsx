import './inspiration.css';
import One from "../cards/inspiration1.svg";
import Two from "../cards/inspiration2.svg";
import Three from "../cards/inspiration3.svg";
import Four from "../cards/inspiration4.svg";
import Five from "../cards/inspiration5.svg";
import Six from "../cards/inspiration6.svg";
import Seven from "../cards/inspiration7.svg";
import Eight from "../cards/inspiration8.svg";
import rating from "../assets/ratings.png";

export default function Inspiration() {

 
  const places = [
    One,
    Two,
    Three,
    Four,
    Five,
    Six,
    Seven,
    Eight,
  ];


  return (
    <div className="inspiration">
      
      <h2>Inspiration for your next adventure</h2>

      <div className="inspirationbody">
        {/* 1st container */}
        <div className="inspirationcont">
         {places.map((place) => (
           <div className="inspirationcard">
             <img src={place} alt="inspiration" />
             <div className="inspirationtext">
            <div className="uptext">
              <span>Desert King</span>
              <h4>1MBT per night</h4>
            </div>
            <div className="downtext">
              <span>2345km away</span>
              <p>available for 2weeks stay</p>
            </div>
          </div>
          <img src={rating} alt="rating" className="rating" />
        </div>
           
         ))}
        </div>
          
         </div>

        
      
    </div>
  );
}
