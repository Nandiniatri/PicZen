import "./UI.css";

const Illustration = () => {
    return (
        <div className="logo-ui-wrapper">

            <div className="logo-div1">
                <p className="logo-help-text">Need some inspiration?</p>

                <div className="logo-suggestions">
                    <span>A modern workspace with a laptop, coffee cup, and plants</span>
                    <span>A cute robot character watering plants</span>
                </div>
            </div>


            <div className="logo-input-card">
                <input
                    type="text"
                    placeholder="Describe your 3D illustration"
                />

                <div className="logo-actions">
                    <button className="logo-chip">
                        <span>Style Playful Objects</span>
                    </button>
                    <button className="logo-chip">
                        Size <b>Landscape(4:3)</b>
                    </button>

                    <button className="logo-send">↑</button>
                </div>
            </div>

        </div>
    );
};

export default Illustration;
