
import './header.css';
import { Link } from 'react-router-dom';
export default function Header() {
  return (
    <div className="header" >
      <div className="headerlogocontainer">
        <img src="./src/assets/logo.png" alt="logo" className="logoicon" />
       

       
      </div>
      <div className="headerlist">
       <ul>
         <li><Link to="/">Home</Link></li>
         <li><Link to="/placetostay">Place To Stay</Link></li>
         <li><Link to="/">NFTs</Link></li>
         <li><Link to="/">Community</Link></li>
       </ul>
      </div>
      <div className="headerbtn">
        <button className="">Connect Wallet</button>
      </div>
      

    </div>
  )
}
