import { useAppEvent } from "../../../../contextApi/AppEventContext";
import "./Template.css";

const Template = () => {
    const { templateData, handleTemplate } = useAppEvent();

    return (
        <div className="template-container">
            <h2>Template</h2>
            <div className="template-wrapper">

                <input
                    type="text"
                    placeholder="Search templates"
                    className="template-search"
                />

                <div className="template-section">
                    <h3>Classics</h3>
                    <div className="template-grid">
                        {templateData?.classics?.map((item) => (
                            <div className="template-card" key={item.id} onClick={() => handleTemplate(item)}>
                                <img src={item.image} alt={item.title} />
                                <p>{item.title}</p>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="template-section">
                    <h3>Studio</h3>
                    <div className="template-grid">
                        {templateData?.studio?.map((item) => (
                            <div className="template-card" key={item.id} onClick={() => handleTemplate(item)}>
                                <img src={item.image} alt={item.title} />
                            </div>
                        ))}
                    </div>
                </div>

                <div className="template-section">
                    <h3>Photo Editing Classics</h3>
                    <div className="template-grid">
                        {templateData?.photoEditingClassics?.map((item) => (
                            <div className="template-card" key={item.id} onClick={() => handleTemplate(item)}>
                                <img src={item.image} alt={item.title} />
                                <p>{item.title}</p>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Template;
