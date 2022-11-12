
import './header.css';
import Modal from './Modal';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';
import logo from '../assets/logo.png';


export default function Header() {


    const [active, setActive] = useState(false);
    const [openModal, setOpenModal] = useState(false);

    const handleToggle = () => {

        setActive(!active);
    }

  return (
    <div className="header" >
      <div className="headerlogocontainer">
        <img src={logo} alt="logo" className="logoicon" />
       

       
      </div>
      <div className="menuicon">
        <MenuIcon onClick={handleToggle} />
      </div>
      <nav className={active ? 'navbar active' : 'navbar'}>   
       <ul >
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
      <Modal open={openModal}  onClose={() => setOpenModal(false)} />
      

    </div>
  )
}
