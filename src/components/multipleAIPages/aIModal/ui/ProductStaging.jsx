import "./UI.css";

const ProductStaging = () => {
    return ( 
        <div className="vm-root">

            <div className="vm-preview">
                <div className="vm-card">
                    <img
                        src="https://serverless-api.photoroom.com/mini_app/images/placeholders/lifestyle-shot.webp"
                        alt="product"
                    />
                </div>
            </div>

            <p className="vm-desc">
                Create stunning lifestyle images that tell a story and <br />
                show it in action
            </p>

            <div className="vm-bottom-bar">

                <div className="vm-upload">
                    <span>Drop files or <b>select images</b></span>
                </div>

                <div className="vm-actions">
                    <button className="vm-chip">＋ Product</button>
                    <button className="vm-chip">Landscape (3:2)</button>
                    <button className="vm-chip">Brand</button>
                    <button className="vm-send">↑</button>
                </div>

            </div>
        </div>
    );
};

export default ProductStaging;
