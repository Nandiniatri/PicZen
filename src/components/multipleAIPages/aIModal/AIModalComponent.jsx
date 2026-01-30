import { useState } from "react";
import ModalPortal from "../../ModalPortal";
import "./AIModalComponent.css";
import { useAppEvent } from "../../../contextApi/AppEventContext";

import CreateImageUI from "./ui/CreateImageUI";
import RecolorUI from "./ui/RecolorUI";
import ProductBeautifierUI from "./ui/ProductBeautifierUI";
import VirtualModal from "./ui/VirtualModal";
import ProductStaging from "./ui/ProductStaging";
import Logo from "./ui/Logo";
import InstagramStory from "./ui/InstagramStory";

const AIModalComponent = ({ open, onClose }) => {
    const { selectedGenItem } = useAppEvent();
    const [activeItem, setActiveItem] = useState(null);

    if (!open || !selectedGenItem) return null;

    const renderActiveUI = () => {
        if (!activeItem) return <CreateImageUI />;

        switch (activeItem.type) {
            case "ai_create":
                return <CreateImageUI />;

            case "recolor":
                return <RecolorUI />;

            case "product_beautifier":
                return <ProductBeautifierUI />;

            case "virtual_model":
                return <VirtualModal />
            
            case "product_staging":
                return <ProductStaging />
            
            case "logo":
                return <Logo />

            case "instagram_story":
                return <InstagramStory />
            
            case "background":
                return 

            default:
                return <CreateImageUI />;
        }
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
                                    className={`ai-tab ${activeItem?.id === item.id ? "active" : ""
                                        }`}
                                    onClick={() => setActiveItem(item)}
                                >
                                    {item.title}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="ai-dynamic-content">
                        {renderActiveUI()}
                    </div>

                </div>
            </div>
        </ModalPortal>
    );
};

export default AIModalComponent;
