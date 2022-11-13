
import './header.css';
import Modal from './Modal';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';
import logo from '../assets/logo.png';

// header section

export default function Header() {



// mobile hamburger state
    const [active, setActive] = useState(false);

    // modal state initialization...you get!
    const [openModal, setOpenModal] = useState(false);


// handle toggle function for hamburger menu
    const handleToggle = () => {

        setActive(!active);
    }

  return (
    <div className="header" >
      <div className="headerlogocontainer">
        <img src={logo} alt="logo" className="logoicon" />
       

       
      </div>
      <div className="menuicon">
        {/* display menu when clicked */}
        <MenuIcon onClick={handleToggle} />
      </div>

      {/* condition for showing hamburger menu in mobile mode */}
      <nav className={active ? 'navbar active' : 'navbar'}>   
       <ul onClick={handleToggle} >
        <div className="closed">
          <CloseIcon onClick={handleToggle} className='close' />
        </div>
         <li><Link to="/">Home</Link></li>
         <li><Link to="/placetostay">Place To Stay</Link></li>
         <li><Link to="/">NFTs</Link></li>
         <li><Link to="/">Community</Link></li>
       </ul>
      <div className="headerbtn">
        <button  onClick={() => setOpenModal(true) }className="modalbtn">Connect Wallet</button>
      </div>
      </nav>

      {/* conditional modal display when clicked */}
      <Modal open={openModal}  onClose={() => setOpenModal(false)} />
      

    </div>
  )
}
