import './UI.css';

const ProductBeautifierBottom = () => {
    return (
        <div className="pb-bottom-wrapper">

            <div className="pb-image-area">
                <img
                    src="https://serverless-api.photoroom.com/mini_app/images/placeholders/pro-shot.webp"
                    alt="Product Beautifier"
                />
            </div>

            <p className="pb-helper-text">
                Get a polished, professional image of your product
            </p>

            <div className="pb-input-box">
                <div className="pb-drop-area">
                    <span className="pb-cloud">☁️</span>
                    <p>
                        Drop a file or <span>select an image</span>
                    </p>
                </div>

                <div className="pb-pill-row">
                    <button className="pb-pill">＋ Product</button>
                    <button className="pb-pill">Square</button>
                </div>

                <button className="pb-send">↑</button>
            </div>

        </div>
    );
};

export default ProductBeautifierBottom;
