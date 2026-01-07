import ModalPortal from "../ModalPortal"
import './Modal2.css';

const Modal2 = ({ open, onClose, children }) => {

    return (
        <ModalPortal>
            <div className="overlay" onclick={onClose}>
                <div className="loginModal">
                    <h2>Login</h2>
                    <button onClick={onClose}>Close</button>
                </div>
            </div>
        </ModalPortal>
    )
}

export default Modal2;