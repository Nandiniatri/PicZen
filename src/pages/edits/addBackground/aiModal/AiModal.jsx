import "./AiModal.css";
import { useEffect, useState } from "react";

const AiModal = ({ onClose }) => {
    const [data, setData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch("/data/aiModal.json");
            const json = await res.json();
            setData(json);
        };
        fetchData();
    }, []);

    if (!data) return null;

    return (
        <div className="ai-modal-overlay">
            <div className="ai-modal">
                
                <button className="ai-close-btn" onClick={onClose}>✕</button>

                <h2 className="ai-title">{data.title}</h2>

                <div className="ai-grid">
                    {data.categories.map((item) => (
                        <div key={item.id} className="ai-card">
                            <img src={item.image} alt={item.label} className="ai-card-img" />
                            <p className="ai-card-text">{item.label}</p>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    );
};

export default AiModal;
