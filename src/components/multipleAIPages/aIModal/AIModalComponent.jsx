// import ModalPortal from "../../ModalPortal";
// import "./AIModalComponent.css";
// import { useAppEvent } from "../../../contextApi/AppEventContext";
// import { useState } from "react";

// const AIModalComponent = ({ open, onClose }) => {
//     const { selectedGenItem } = useAppEvent();
//     const [activeItem , setActiveItem] = useState(null);

//     if (!open || !selectedGenItem) return null;

//     const handleAISelectedDataTitle = (item) => {
//         // alert(item.title)
//         // console.log(item);
//         setActiveItem(item);
//     }

//     return (
//         <ModalPortal>
//             <div className="AImodal-overlay" onClick={onClose}>
//                 <div
//                     className="AIModal-container"
//                     onClick={(e) => e.stopPropagation()}
//                 >

//                     <div className="AIModal-header">
//                         <button className="close-btn" onClick={onClose}>✕</button>
//                     </div>


//                     <div className="ai-tabs-wrapper">
//                         <div className="ai-tabs">
//                             {selectedGenItem.map((item) => (
//                                 <button
//                                     key={item.id}
//                                     className="ai-tab"
//                                     onClick={() => handleAISelectedDataTitle(item)}
//                                 >
//                                     {item.title}
//                                 </button>
//                             ))}
//                         </div>
//                     </div>


//                     <div className="ai-content-placeholder">
//                         <div className="prompt-wrapper">
//                             <input
//                                 type="text"
//                                 placeholder="Describe an image"
//                                 className="prompt-input"
//                             />

//                             <div className="prompt-options">
//                                 <span className="option-pill">Style <b>Random</b></span>
//                                 <span className="option-pill">Size <b>Square</b></span>
//                             </div>

//                             <button className="prompt-send-btn">
//                                 ↑
//                             </button>
//                         </div>
//                     </div>

//                 </div>
//             </div>
//         </ModalPortal>
//     );
// };

// export default AIModalComponent;



import { useState } from "react";
import ModalPortal from "../../ModalPortal";
import "./AIModalComponent.css";
import { useAppEvent } from "../../../contextApi/AppEventContext";

const AIModalComponent = ({ open, onClose }) => {
    const { selectedGenItem } = useAppEvent();
    const [activeItem, setActiveItem] = useState(null);

    if (!open || !selectedGenItem) return null;

    const handleAISelectedDataTitle = (item) => {
        setActiveItem(item);
        console.log("Selected Item:", item);
    };

    return (
        <ModalPortal>
            <div className="AImodal-overlay" onClick={onClose}>
                <div
                    className="AIModal-container"
                    onClick={(e) => e.stopPropagation()}
                >
                
                    <div className="AIModal-header">
                        <button className="close-btn" onClick={onClose}>✕</button>
                    </div>

                    
                    <div className="ai-tabs-wrapper">
                        <div className="ai-tabs">
                            {selectedGenItem.map((item) => (
                                <button
                                    key={item.id}
                                    className={`ai-tab ${
                                        activeItem?.id === item.id ? "active" : ""
                                    }`}
                                    onClick={() => handleAISelectedDataTitle(item)}
                                >
                                    {item.title}
                                </button>
                            ))}
                        </div>
                    </div>

                
                    {activeItem && (
                        <h2 className="ai-selected-title">
                            {activeItem.title}
                        </h2>
                    )}

                    
                    <div className="ai-content-placeholder">
                        <div className="prompt-wrapper">
                            <input
                                type="text"
                                placeholder={`Describe an image for ${activeItem?.title || ""}`}
                                className="prompt-input"
                            />

                            <div className="prompt-options">
                                <span className="option-pill">Style <b>Random</b></span>
                                <span className="option-pill">Size <b>Square</b></span>
                            </div>

                            <button className="prompt-send-btn">
                                ↑
                            </button>
                        </div>
                    </div>

                </div>
            </div>
        </ModalPortal>
    );
};

export default AIModalComponent;
