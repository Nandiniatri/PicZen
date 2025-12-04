import React from "react";
import "./Insert.css";

const Insert = () => {
    const { actions, recentUploads, shapes } = insertData;

    return (
        <div className="insert-panel">

            <button className="ai-generate-btn">
                {actions.aiGenerateButton.label}
            </button>

            <div className="upload-box">
                <p>
                    {actions.uploadBox.title.split("select")[0]}
                    <span className="select-text"> {actions.uploadBox.selectText}</span>
                </p>
            </div>

            {/* Recent Uploads */}
            <h3 className="section-heading">Recent uploads</h3>
            <div className="recent-uploads">
                {recentUploads.map((item) => (
                    <img
                        key={item.id}
                        src={item.image}
                        alt="upload"
                        className="recent-img"
                    />
                ))}
            </div>

            {/* Shapes */}
            <h3 className="section-heading">Shapes</h3>

            <div className="shape-sections">
                {shapes.map((shapeGroup) => (
                    <div key={shapeGroup.section} className="shape-group">
                        <p className="shape-title">{shapeGroup.section}</p>

                        <div className="shape-list">
                            {shapeGroup.items.map((item) => (
                                <div key={item.id} className="shape-box"></div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>

        </div>
    );
};

export default Insert;
