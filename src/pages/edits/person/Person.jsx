import "./Person.css";

const Person = () => {
    // if (!selected) return null;

    return (
        <div className="person-panel">
            <div className="person-header">
                <h3>Person</h3>
                <button className="save-btn">Save</button>
            </div>

            <div className="person-actions">
                <button className="action-btn">Replace</button>
                <button className="action-btn">Retouch</button>
                <button className="action-btn">Light On</button>
            </div>

            <div className="section">
                <h4>Align to canvas</h4>
                <div className="align-buttons">
                    <button>Center</button>
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
                <div className="effect-item">Shadows</div>
                <div className="effect-item">Outline</div>
                <div className="effect-item">Reflection</div>
            </div>

            <button className="delete-btn">Delete</button>
        </div>
    );
};

export default Person;
