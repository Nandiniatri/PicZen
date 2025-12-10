import "./Insert.css";
import { useAppEvent } from "../../../../contextApi/AppEventContext";

const renderShape = (name) => {
    switch (name) {
        case "circle":
            return <div className="shape-circle"></div>;

        case "triangle":
            return <div className="shape-triangle"></div>;

        case "star":
            return <div className="shape-star">★</div>;

        case "blob1":
            return <div className="shape-blob blob1"></div>;

        case "blob2":
            return <div className="shape-blob blob2"></div>;

        case "blob3":
            return <div className="shape-blob blob3"></div>;

        case "wired1":
            return <div className="shape-wired wired1"></div>;

        case "wired2":
            return <div className="shape-wired wired2"></div>;

        case "wired3":
            return <div className="shape-wired wired3"></div>;

        case "loop1":
            return <div className="shape-loop loop1"></div>;

        case "loop2":
            return <div className="shape-loop loop2"></div>;

        case "loop3":
            return <div className="shape-loop loop3"></div>;

        case "sticker_orange":
            return <div className="shape-sticker orange"></div>;

        case "sticker_yellow":
            return <div className="shape-sticker yellow"></div>;

        case "sticker_pink":
            return <div className="shape-sticker pink"></div>;

        default:
            return null;
    }
};


const Insert = () => {
    const { insertData } = useAppEvent();

    if (!insertData) return <p>Loading...</p>;

    const { actions, recentUploads, shapes, handleAIGenerate } = useAppEvent();;

    return (
        <div className="insert-panel">

            {/* AI Button */}
            <button className="ai-generate-btn" onClick={handleAIGenerate}>
                {actions.aiGenerateButton.label}
            </button>

            {/* Upload Box */}
            <div className="upload-box">
                <p>
                    {actions.uploadBox.title.split("select")[0]}
                    <span className="select-text">
                        {actions.uploadBox.selectText}
                    </span>
                </p>
            </div>

            {/* Recent Uploads ----------------------- */}
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

            {/* Shapes Section ----------------------- */}
            <h3 className="section-heading">Shapes</h3>

            <div className="shape-sections">
                {shapes.map((group) => (
                    <div key={group.section} className="shape-group">

                        <p className="shape-title">{group.section}</p>

                        <div className="shape-list">

                            {group.items.map((item) => (
                                <div key={item.id} className="shape-box">
                                    {renderShape(item.name)}
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
