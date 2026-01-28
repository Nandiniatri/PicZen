import "./UI.css";

const FlatLay = () => {
    return ( 
        <div className="vm-root">

            <div className="vm-preview">
                <div className="vm-card">
                    <img
                        src="https://serverless-api.photoroom.com/mini_app/images/placeholders/flat-lay.webp"
                        alt="jeans"
                    />
                </div>
            </div>

            <p className="vm-desc">
                Visualize your product laid flat on a neutral surface
            </p>

            <div className="vm-bottom-bar">

                <div className="vm-upload">
                    <span>Drop files or <b>select images</b></span>
                </div>

                <div className="vm-actions">
                    <button className="vm-chip">Sqaure</button>
                    <button className="vm-chip">Brand</button>
                    <button className="vm-send">↑</button>
                </div>

            </div>
        </div>
    );
};

export default FlatLay;
