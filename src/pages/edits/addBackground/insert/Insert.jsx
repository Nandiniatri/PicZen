import "./Insert.css";
import { useAppEvent } from "../../../../contextApi/AppEventContext";

const Insert = () => {
    const { insertData } = useAppEvent();

    if (!insertData) return null;

    return (
        <div className="insert-panel">

            <h2 className="panel-title">Insert</h2>

            {/* AI Section */}
            <div className="insert-section">
                <button className="ai-btn">
                    <span className="ai-icon">{insertData.ai.icon}</span>
                    {insertData.ai.title}
                </button>
            </div>

            {/* Shapes Section */}
            <div className="insert-section">
                <h3 className="section-title">Shapes</h3>

                {insertData.shapes.map((group, index) => (
                    <div key={index} className="group">
                        <p className="group-title">{group.title}</p>

                        <div className="items-grid">
                            {group.items.map((item, i) => (
                                <div key={i} className="item-box">
                                    {item}
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>

            {/* Graphics Section */}
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

