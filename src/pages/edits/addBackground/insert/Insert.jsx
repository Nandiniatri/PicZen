import "./Insert.css";
import { useAppEvent } from "../../../../contextApi/AppEventContext";

const Insert = () => {
    const { insertData } = useAppEvent();

    if (!insertData) return <p>Loading...</p>;

    const { actions, recentUploads, shapes } = insertData;

    return (
        <div className="insert-panel">

            <button className="ai-generate-btn">
                {actions.aiGenerateButton.label}
            </button>

            <div className="upload-box">
                <p>
                    {actions.uploadBox.title.split("select")[0]}
                    <span className="select-text">
                        {actions.uploadBox.selectText}
                    </span>
                </p>
            </div>

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

            <h3 className="section-heading">Shapes</h3>

            <div className="shape-sections">
                {shapes.map((group) => (
                    <div key={group.section} className="shape-group">
                        <p className="shape-title">{group.section}</p>

                        <div className="shape-list">
                            {group.items.map((item) => (
                                <div key={item.id} className="shape-box">
                                    {item.shape}
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
