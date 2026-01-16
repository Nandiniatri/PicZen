import ModalPortal from "../ModalPortal";
import "./Modal2.css";
import { useAppEvent } from "../../contextApi/AppEventContext";

const Modal2 = ({ open, onClose }) => {
    const { generateAIImageData } = useAppEvent();

    const handleModalCard = (id) => {
        alert('Hello' , id)
    }

    if (!open) return null;

    return (
        <ModalPortal>
            <div className="modal2-overlay" onClick={onClose}>
                <div
                    className="modal2-container"
                    onClick={(e) => e.stopPropagation()}
                >
                    <div className="modal2-header">
                        <h2>{generateAIImageData.need.title}</h2>
                        <button className="modal2-close-btn" onClick={onClose}>
                            ✕
                        </button>
                    </div>

                    <p className="modal2-sub-title">Create images with AI</p>

                    <div className="modal2-grid">
                        {generateAIImageData.createImage.map((item) => (
                            <div className="modal2-card" key={item.id} onClick={() => handleModalCard(item.id)}>
                                <p>{item.title}</p>
                                <img src={item.image} alt={item.title} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </ModalPortal>
    );
};

export default Modal2;

