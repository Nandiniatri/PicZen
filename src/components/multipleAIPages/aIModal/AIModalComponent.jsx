import { useState } from "react";
import ModalPortal from "../../ModalPortal";
// import "./AIModalComponent.css";
import "./Modal2.css";
import { useAppEvent } from "../../../contextApi/AppEventContext";

const AIModalComponent = ({ open, onClose }) => {
    const { showModal, setShowModal } = useAppEvent();

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

