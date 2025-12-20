import "./Insert.css";
import { useState } from "react";
import { useAppEvent } from "../../../../contextApi/AppEventContext";

const Insert = () => {
    const { insertData } = useAppEvent();
    const [activeGroup, setActiveGroup] = useState(null);

    if (!insertData) return null;

    return (
        <div className="insert-panel">

            <h2 className="panel-title">Insert</h2>

            
            <div className="insert-section">
                <button className="ai-btn">
                    <span className="ai-icon">{insertData.ai.icon}</span>
                    {insertData.ai.title}
                </button>
            </div>

        
            <div className="insert-section">
                <h3 className="section-title">Shapes</h3>

                
                {activeGroup ? (
                    <>
                        <div className="detail-header">
                            <button className="back-btn" onClick={() => setActiveGroup(null)}>
                                ←
                            </button>
                            <span className="detail-title">{activeGroup.title}</span>
                        </div>

                        <div className="items-grid">
                            {activeGroup.items.map((item) => (
                                <div key={item.id} className="item-box">
                                    <img src={item.img} alt="" />
                                </div>
                            ))}
                        </div>
                    </>
                ) : (
                 
                    insertData.shapes.map((group, index) => (
                        <div key={index} className="group">
                            <p
                                className="group-title clickable"
                                onClick={() => setActiveGroup(group)}
                            >
                                {group.title}
                            </p>

                            <div className="items-grid">
                                {group.items.slice(0, 4).map((item) => (
                                    <div key={item.id} className="item-box">
                                        <img src={item.img} alt="" />
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))
                )}
            </div>

           
            <div className="insert-section">
                <h3 className="section-title">Graphics</h3>

                {insertData.graphics.map((group, index) => (
                    <div key={index} className="group">
                        <p className="group-title">{group.title}</p>

                        <div className="items-grid">
                            {group.items.map((item, i) => (
                                <div key={i} className="item-box text-item">
                                    {item}
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>

        </div>
    );
};

export default Insert;
