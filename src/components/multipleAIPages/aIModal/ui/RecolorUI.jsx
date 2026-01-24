// const RecolorUI = () => {
//     return (
//         <div className="ai-content-placeholder">
//             <div>
//                 <img src="https://serverless-api.photoroom.com/mini_app/images/placeholders/recolor.webp" />
//             </div>

//             <p className="ai-helper-text">
//                 Change your product's color.
//             </p>

//             <div className="upload-box">
//                 Drop a file or <span>select an image</span>
//             </div>

//             <div className="prompt-options">
//                 <span className="option-pill">+ Product</span>
//                 <span className="option-pill">4D3DE3</span>
//                 <span className="option-pill">Square</span>
//             </div>

//             <button className="prompt-send-btn">↑</button>
//         </div>
//     );
// };

// export default RecolorUI;


import './UI.css';


const RecolorUI = () => {
    return (
        <div className="recolor-wrapper">
            <div className="recolor-preview">
                <img
                    src="https://serverless-api.photoroom.com/mini_app/images/placeholders/recolor.webp"
                    alt="Recolor preview"
                />
            </div>

            <p className="recolor-helper-text">
                Change your product's color. Apply it to the entire item or only a specific part.
            </p>

            <div className="recolor-upload-box">
                <div className="upload-icon">☁️</div>
                <p>
                    Drop a file or <span className="upload-link">select an image</span>
                </p>
            </div>

            <div className="recolor-prompt-bar">
                <div className="prompt-options">
                    <span className="option-pill">＋ Product</span>

                    <span className="option-pill color-pill">
                        <span className="color-dot"></span>
                        4D3DE3
                    </span>

                    <span className="option-pill">Square</span>
                </div>

                <button className="prompt-send-btn">↑</button>
            </div>

        </div>
    );
};

export default RecolorUI;
