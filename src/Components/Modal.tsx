import { NavLink } from "react-router-dom"
import { Portal } from "./Portal"
import discount from '../assets/discount.jpg'
import ConfettiEffect from "./Confetti"

type ModalProps = {
    isOpen: boolean,
    onClose: ()=>void
}
export const Modal = ({isOpen, onClose}:ModalProps)=>{
    if (!isOpen) return null
    return(
        <Portal>
            <ConfettiEffect/>
      <div className="modal-overlay" onClick={onClose}>
      
        <div className="modal-content" onClick={(e) => e.stopPropagation()}>
          <div>
          <button onClick={onClose}>Close</button>
          <h3>Discount</h3>
          <p>Take Advantage of Our Discount Prices 🎉</p>
          </div>
          <NavLink className={'modalbutton'} to={'/prices'}> Click here to View Prices</NavLink>
         
        </div>
      </div>
    </Portal>

    )
}