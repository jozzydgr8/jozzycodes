import { Portal } from "./Portal"
import ConfettiEffect from "./Confetti"
import { useNavigate } from "react-router-dom"

type ModalProps = {
    isOpen: boolean,
    onClose: ()=>void
}
export const Modal = ({isOpen, onClose}:ModalProps)=>{
    const navigate = useNavigate()
    const navigatePricing = ()=>{
        onClose();
        navigate('/pricing')
    }
    if (!isOpen) return null
    return(
        <Portal>
            <ConfettiEffect/>
      <div className="modal-overlay" onClick={onClose}>
      
        <div className="modal-content" onClick={(e) => e.stopPropagation()}>
          <div>
          <button className="closeButton" onClick={onClose}><ion-icon name="close-circle-outline"></ion-icon></button>
          <h3>Discount</h3>
          <p>Take Advantage of Our Discount Prices 🎉</p>
          </div>
          <button onClick={navigatePricing} className={'modalbutton'}> Click here to View Prices</button>
         
        </div>
      </div>
    </Portal>

    )
}