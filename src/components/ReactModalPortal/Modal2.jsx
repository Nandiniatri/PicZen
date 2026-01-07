// import ModalPortal from "../ModalPortal";
// import "./Modal2.css";
// import { useAppEvent } from "../../contextApi/AppEventContext";


// const Modal2 = ({ open, onClose }) => {
//     const { generateAIImageData } = useAppEvent();

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

    // 🔒 SAFETY CHECK
    if (
        !open ||
        !generateAIImageData ||
        !generateAIImageData.need ||
        !generateAIImageData.createImage
    ) {
        return null;
    }

    return (
        <ModalPortal>
            <div className="modal-overlay" onClick={onClose}>
                <div
                    className="modal-container"
                    onClick={(e) => e.stopPropagation()}
                >
                    {/* Header */}
                    <div className="modal-header">
                        <h2>{generateAIImageData.need.title}</h2>
                        <button className="close-btn" onClick={onClose}>✕</button>
                    </div>

                    <p className="sub-title">Create images with AI</p>

                    {/* Grid */}
                    <div className="grid">
                        {generateAIImageData.createImage.map((item) => (
                            <div className="card" key={item.id}>
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
