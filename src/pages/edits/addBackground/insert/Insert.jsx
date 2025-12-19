import { useEffect, useState } from "react";
import "./Insert.css";
import { useAppEvent } from "../../../../contextApi/AppEventContext";

const Insert = () => {
    const [loading, setLoading] = useState(true);
    const { insertData } = useAppEvent();

    if (loading) return <p className="loading">Loading...</p>;
    if (!insertData) return null;

    return (
        <div className="insert-panel">

            <h2 className="panel-title">Insert</h2>

            {/* AI BUTTON */}
            <button className="ai-generate-btn">
                {insertData.ai.icon} {insertData.ai.title}
            </button>

            {/* SHAPES */}
            <Section title="Shapes">
                {insertData.shapes.map((group, idx) => (
                    <Group key={idx} group={group} />
                ))}
            </Section>

            {/* GRAPHICS */}
            <Section title="Graphics">
                {insertData.graphics.map((group, idx) => (
                    <Group key={idx} group={group} />
                ))}
            </Section>

        </div>
    );
};

export default Insert;


const Section = ({ title, children }) => (
    <div className="insert-section">
        <h3>{title}</h3>
        {children}
    </div>
);

const Group = ({ group }) => (
    <div className="shape-group">
        <p className="group-title">{group.title}</p>

        <div className="shape-grid">
            {group.items.map((item, i) => (
                <div
                    key={i}
                    className="shape-item"
                    onClick={() => console.log("Clicked:", item)}
                >
                    {item}
                </div>
            ))}
        </div>
    </div>
);
