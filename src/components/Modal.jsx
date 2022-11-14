import './modal.css'
import { AiOutlineClose } from 'react-icons/ai'
import { FiChevronRight } from 'react-icons/fi'
import modal1 from '../assets/modalimg1.svg'
import modal2 from '../assets/modalimg2.svg'


//modal function 
// recieve props from parent 

const Modal = ({ open, onClose }) => {

  // coditions if modal is not open retun null
    if(!open) return null
  return (
      <div className='overlay' onClick={onClose}>
          <div className='modalContainer' onClick={(e) => {
  // prevent modal container div closing when clicked
             e.stopPropagation();
            }}>
              <div className="modalHeader">
              <h3>Connect wallet</h3>
              <p className='closebtn' onClick={onClose}><AiOutlineClose /></p>
              </div>
              <form>
                  <label>Choose your preferred wallet:</label>
                  {/* render modal images */}
                  <button><span  className='modalname'><img src={ modal1 } alt="metamask"/>Metamask</span> <FiChevronRight /></button>
                    <button><span className='modalname'><img src={ modal2 } alt="wallet"/>WalletConnect</span><FiChevronRight /></button>
              </form>
          </div>
    </div>
  )
}

export default Modal