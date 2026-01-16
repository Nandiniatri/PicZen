import ModalPortal from "../../ModalPortal";
// import "./AIModalComponent.css";
import "./Modal2.css";

const AIModalComponent = ({ open, onClose }) => {

    if (!open) return null;

    return (
        <ModalPortal>
            <div className="modal2-overlay" onClick={onClose}>
                <h1>Hello</h1>
            </div>
        </ModalPortal>
    );
};

export default AIModalComponent;

