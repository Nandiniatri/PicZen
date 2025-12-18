import { useAppEvent } from "../../../contextApi/AppEventContext";
import "./Person.css";

const Person = () => {
    const {handleLight , handleShadow , handleOutline , handleBlur , handleTexture , handleFilterOn , handleCenterOn} = useAppEvent();   

    return (
        <div className="person-panel">
            <div className="person-header">
                <h3>Person</h3>
                <button className="save-btn">Save</button>
            </div>

            <div className="person-actions">
                <button className="action-btn">Replace</button>
                <button className="action-btn">Retouch</button>
                <button className="action-btn" onClick={handleLight}>Light On</button>
            </div>

            <div className="section">
                <h4>Align to canvas</h4>
                <div className="align-buttons">
                    <button onClick={handleCenterOn}>Center</button>
                    <button>Middle</button>
                </div>
            </div>

            <div className="section">
                <h4>Remove background</h4>
                <div className="toggle-row">
                    <span>Enabled</span>
                    <input type="checkbox" defaultChecked />
                </div>
                <button className="edit-cutout">Edit Cutout</button>
            </div>

            <div className="section">
                <h4>Effects</h4>
                <div className="effect-item" onClick={handleShadow}>Shadows</div>
                <div className="effect-item" onClick={handleOutline}>Outline</div>
            </div>

            <div className="section">
                <div className="effect-item" onClick={handleBlur}>Blur</div>
                <div className="effect-item" onClick={handleFilterOn}>Filter</div>
                <div className="effect-item" onClick={handleTexture}>Texture</div>
            </div>

            <button className="delete-btn">Delete</button>
        </div>
    );
};

export default Person;
