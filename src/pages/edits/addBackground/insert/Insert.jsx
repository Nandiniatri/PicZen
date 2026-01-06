import "./Insert.css";
import { useState } from "react";
import { useAppEvent } from "../../../../contextApi/AppEventContext";
import Button from "../../../../components/Button";

 
const Insert = () => {
    const { insertData, handleClassis , addShapeToCanvas } = useAppEvent();
    const [activeGroup, setActiveGroup] = useState(null);

    if (!insertData) return null;

    const handleAIGenrateImage = () => {    
        alert("aiImageGeneration");
    }

    return (
        <div className="insert-panel">
            <h2 className="panel-title">Insert</h2>

            {/* AI */}
            <div className="insert-section">
                <Button className="ai-btn" onClick={handleAIGenrateImage}>
                    <span className="ai-icon">{insertData.ai.icon}</span>
                    {insertData.ai.title}
                </Button>
            </div>

            {/* ================= SHAPES ================= */}
            <div className="insert-section">
                <h3 className="section-title">Shapes</h3>

                {/* DETAIL VIEW */}
                {activeGroup ? (
                    <>
                        <div className="detail-header">
                            <Button
                                className="back-btn"
                                onClick={() => setActiveGroup(null)}
                            >
                                ←
                            </Button>
                            <span className="detail-title">{activeGroup.title}</span>
                        </div>

                        <div className="items-grid">
                            {activeGroup.items.map((item) => (
                                <div
                                    key={item.id}
                                    className="item-box"
                                    onClick={() => addShapeToCanvas(item)}
                                >
                                    <img src={item.img} alt="" />
                                </div>
                            ))}
                        </div>
                    </>
                ) : (
                    /* LIST VIEW */
                    insertData.shapes.map((group, index) => (
                        <div
                            key={index}
                            className="group clickable-group"
                            onClick={() => setActiveGroup(group)}
                        >
                            <p className="group-title">{group.title}</p>

                            <div className="items-grid preview-grid">
                                {group.items.slice(0, 4).map((item) => (
                                    <div key={item.id} className="item-box no-click">
                                        <img src={item.img} alt="" />
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
};

export default Insert;
