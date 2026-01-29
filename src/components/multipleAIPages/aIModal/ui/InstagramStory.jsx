import "./UI.css";

const InstagramStory = () => {
    return (
        <div className="logo-ui-wrapper">

            <div className="logo-div1">
                <p className="logo-help-text">Need some inspiration?</p>

                <div className="logo-suggestions">
                    <span>Cafe offering new seasonal latte</span>
                    <span>Boutique clothing store summer sale</span>
                    <span>Fitness studio launching online classes</span>
                    <span>Local bakery showcasing artisanal bread</span>
                </div>
            </div>

 
            <div className="logo-input-card">
                <input
                    type="text"
                    placeholder="Describe your business and what you want to promote"
                />

                <div className="logo-actions">
                    <button className="logo-chip">
                        🔀 <span>Style Random</span>
                    </button>
                    <button className="logo-chip">
                        Size <b>Portait</b>
                    </button>

                    <button className="logo-send">↑</button>
                </div>
            </div>

        </div>
    );
};

export default InstagramStory;
