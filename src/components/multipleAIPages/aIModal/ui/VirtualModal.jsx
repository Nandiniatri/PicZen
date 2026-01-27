import "./UI.css";

const VirtualModal = () => {
    return (
        <div className="vm-root">

            <div className="vm-preview">
                <div className="vm-card">
                    <img
                        src="https://serverless-api.photoroom.com/mini_app/images/placeholders/virtual-tryon.webp"
                        alt="product"
                    />
                </div>
            </div>

            <p className="vm-desc">
                Visualize your product on a real-looking mannequin and <br />
                see your product come to life
            </p>

            <div className="vm-bottom-bar">

                <div className="vm-upload">
                    <span>Drop files or <b>select images</b></span>
                </div>

                <div className="vm-actions">
                    <button className="vm-chip">＋ Product</button>
                    <button className="vm-chip">Avery</button>
                    <button className="vm-chip">Background</button>
                    <button className="vm-chip">Pose</button>
                    <button className="vm-chip">Portrait (2:3)</button>
                    <button className="vm-chip disabled">Brand</button>
                </div>

                <button className="vm-send">↑</button>
            </div>
        </div>
    );
};

export default VirtualModal;
