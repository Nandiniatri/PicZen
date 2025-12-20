import "./Insert.css";
import { useState } from "react";
import { useAppEvent } from "../../../../contextApi/AppEventContext";

const Insert = () => {
    const { insertData, handleClassis } = useAppEvent();
    const [activeGroup, setActiveGroup] = useState(null);

    if (!insertData) return null;

    return (
        <div className="insert-panel">
            <h2 className="panel-title">Insert</h2>

            {/* AI */}
            <div className="insert-section">
                <button className="ai-btn">
                    <span className="ai-icon">{insertData.ai.icon}</span>
                    {insertData.ai.title}
                </button>
            </div>

            {/* ================= SHAPES ================= */}
            <div className="insert-section">
                <h3 className="section-title">Shapes</h3>

                {/* DETAIL VIEW */}
                {activeGroup ? (
                    <>
                        <div className="detail-header">
                            <button
                                className="back-btn"
                                onClick={() => setActiveGroup(null)}
                            >
                                ←
                            </button>
                            <span className="detail-title">{activeGroup.title}</span>
                        </div>

                        <div className="items-grid">
                            {activeGroup.items.map((item) => (
                                <div
                                    key={item.id}
                                    className="item-box"
                                    onClick={() => handleClassis(item)}
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
