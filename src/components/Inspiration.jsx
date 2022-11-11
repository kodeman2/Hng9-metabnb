import './inspiration.css';
import One from "../assets/cards/inspiration1.svg";
import Two from "../assets/cards/inspiration2.svg";
import Three from "../assets/cards/inspiration3.svg";
import Four from "../assets/cards/inspiration4.svg";
import Five from "../assets/cards/inspiration5.svg";
import Six from "../assets/cards/inspiration6.svg";
import Seven from "../assets/cards/inspiration7.svg";
import Eight from "../assets/cards/inspiration8.svg";

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
          <img src="./src/assets/ratings.png" alt="rating" className="rating" />
        </div>
           
         ))}
        </div>
          
         </div>

        
      
    </div>
  );
}
