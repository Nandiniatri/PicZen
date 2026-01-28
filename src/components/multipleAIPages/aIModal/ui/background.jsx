import "./UI.css";

const Background = () => {
    return (
        <div className="logo-ui-wrapper">

            <div className="logo-div1">
                <p className="logo-help-text">Need some inspiration?</p>

                <div className="logo-suggestions">
                    <span>beach, podium</span>
                    <span>christmas</span>
                    <span>rustic table, shot from above</span>
                    <span>autumn, podium</span>
                </div>
            </div>


            <div className="logo-input-card">
                <input
                    type="text"
                    placeholder="Describe your background"
                />

                <div className="logo-actions">
                    <button className="logo-chip">
                        <span>Style Random</span>
                    </button>
                    <button className="logo-chip">
                        Size <b>Portait(3:4)</b>
                    </button>

                    <button className="logo-send">↑</button>
                </div>
            </div>

        </div>
    );
};

export default Background;
