import ModalPortal from "../../ModalPortal";
import "./AIModalComponent.css";

const Modal2 = ({ open, onClose }) => {

    if (!open) return null;

    return (
        <ModalPortal>
            <h1>Hello</h1>
        </ModalPortal>
    );
};

export default Modal2;

