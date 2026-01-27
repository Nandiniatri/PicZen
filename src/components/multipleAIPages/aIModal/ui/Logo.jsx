import "./UI.css";

const Logo = () => {
    return (
        <div className="logo-ui-wrapper">

            <p className="logo-help-text">Need some inspiration?</p>

            <div className="logo-suggestions">
                <span>"kay" - we sell organic soap</span>
                <span>"june" - we sell fresh fruits and vegetables</span>
                <span>"enzo" - I'm a rapper</span>
                <span>"jay" - I'm a ux design consultant</span>
            </div>

            {/* Input Card */}
            <div className="logo-input-card">
                <input
                    type="text"
                    placeholder="What does your business do?"
                />

                <div className="logo-actions">
                    <button className="logo-chip">
                        🔀 <span>Random</span>
                    </button>
                    <button className="logo-chip">
                        Size <b>Square</b>
                    </button>

                    <button className="logo-send">↑</button>
                </div>
            </div>

        </div>
    );
};

export default Logo;
