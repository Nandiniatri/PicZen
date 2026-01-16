import { useState } from "react";
import ModalPortal from "../../ModalPortal";
import "./AIModalComponent.css";
// import "./Modal2.css";
import { useAppEvent } from "../../../contextApi/AppEventContext";

const AIModalComponent = ({ open, onClose }) => {
    const { selectedGenItem } = useAppEvent();

    if (!open) return null;

    return (
        <ModalPortal>
            <div className="AImodal-overlay" onClick={onClose}>
                <div className="AIModal-container" onClick={(e) => e.stopPropagation()}>
                    <div className="AIModal-header">
                        <h1>Hello</h1>
                        <button className="modal2-close-btn" onClick={onClose}>
                            ✕
                        </button>
                    </div>
                </div>
            </div>
        </ModalPortal>
    );
};

export default AIModalComponent;

