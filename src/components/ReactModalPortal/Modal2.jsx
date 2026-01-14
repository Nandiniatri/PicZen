// import ModalPortal from "../ModalPortal";
// import "./Modal2.css";
// import { useAppEvent } from "../../contextApi/AppEventContext";


// const Modal2 = ({ open, onClose }) => {
//     const { generateAIImageData } = useAppEvent();
//     console.log("generateAIImageData" , generateAIImageData);
    

//     if (!open) return null;

//     return (
//         <ModalPortal>
//             <div className="modal-overlay" onClick={onClose}>
//                 <div
//                     className="modal-container"
//                     onClick={(e) => e.stopPropagation()}
//                 >

//                     <div className="modal-header">
//                         <h2>{generateAIImageData.need.title}</h2>
//                         <button className="close-btn" onClick={onClose}>✕</button>
//                     </div>

//                     <p className="sub-title">Create images with AI</p>

//                     <div className="grid">
//                         {generateAIImageData.createImage.map((item) => (
//                             <div className="card" key={item.id}>
//                                 <img src={item.image} alt={item.title} />
//                                 <p>{item.title}</p>
//                             </div>
//                         ))}
//                     </div>
//                 </div>
//             </div>
//         </ModalPortal>
//     );
// };

// export default Modal2;






import ModalPortal from "../ModalPortal";
import "./Modal2.css";
import { useAppEvent } from "../../contextApi/AppEventContext";

const Modal2 = ({ open, onClose }) => {
    const { generateAIImageData } = useAppEvent();

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
                            <div className="modal2-card" key={item.id}>
                                <img src={item.image} alt={item.title} />
                                <p>{item.title}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </ModalPortal>
    );
};

export default Modal2;

