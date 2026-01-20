import { useState } from "react";
import ModalPortal from "../../ModalPortal";
import "./AIModalComponent.css";
// import "./Modal2.css";
import { useAppEvent } from "../../../contextApi/AppEventContext";

const AIModalComponent = ({ open, onClose }) => {
    const { selectedGenItem } = useAppEvent();
    console.log(selectedGenItem);
    

    if (!open) return null;
    // if(!selectedGenItem) {
    //     return null;
    // }

    return (
        <ModalPortal>
            <div className="AImodal-overlay" onClick={onClose}>
                <div className="AIModal-container" onClick={(e) => e.stopPropagation()}>
                    <div className="AIModal-header">
                        <button className="modal2-close-btn" onClick={onClose}>
                            ✕
                        </button>
                    </div>

                    <div>
                        {/* {selectedGenItem && selectedGenItem.map((AIItem) => {
                            console.log(AIItem);
                            
                        })} */}
                    </div>
                </div>
            </div>
        </ModalPortal>
    );
};

export default AIModalComponent;

